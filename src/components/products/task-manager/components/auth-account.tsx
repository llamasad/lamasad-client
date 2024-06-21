'use client';
import 'react-datepicker/dist/react-datepicker.css';

import { Input } from 'antd';
import { ArrowIcon, ArrowLineIcon, ExitIcon, PlusIcon } from '@/components/icons';
import DatePicker from 'react-datepicker';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import $ from 'jquery';
import Image from 'next/image';
import interact from 'interactjs';
import { getAccessToken } from '@/hooks/use-type-user-fetcher';
import { mutate } from 'swr';
import { useRouter } from '@/navigation/next-intl';

function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);

    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
}

function AuthAccount({ hasMacWrap = true }: { hasMacWrap?: boolean }) {
    const route = useRouter();
    const [x, setX] = useState<string>('0');
    const [username, setUsername] = useState('');
    const [date, setDate] = useState<Date>();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgSrc, setImgSrc] = useState('');
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [defaultConfigImg, setDefaultConfigImg] = useState<{
        x: number;
        y: number;
        w: number;
        h: number;
        maxSize: number;
    }>();

    useEffect(() => {
        if (canvasRef.current) {
            interact(canvasRef.current)
                .resizable({
                    // resize from all edges and corners
                    edges: { left: true, right: true, bottom: true, top: true },
                    listeners: {
                        end(event) {
                            const target = event.target;
                            const x = parseFloat(target.getAttribute('data-x')) || 0;
                            const y = parseFloat(target.getAttribute('data-y')) || 0;
                            const img = imgRef.current;
                            if (x < 0) {
                                target.style.transform = 'translate(' + 0 + 'px,' + y + 'px)';
                                target.setAttribute('data-x', 0);
                            }
                            if (y < 0) {
                                target.style.transform = 'translate(' + x + 'px,' + 0 + 'px)';
                                target.setAttribute('data-y', 0);
                            }
                            if (img && img.width < x + target.width) {
                                target.style.transform = 'translate(' + (img.width - target.width) + 'px,' + y + 'px)';
                                target.setAttribute('data-x', img.width - target.width);
                            }
                            if (img && img.height < y + target.height) {
                                target.style.transform =
                                    'translate(' + x + 'px,' + (img.height - target.height) + 'px)';
                                target.setAttribute('data-y', img.height - target.height);
                            }
                        },
                        move(event) {
                            const target = event.target;

                            // Calculate the new size based on the larger dimension
                            const newSize = event.rect.height;

                            // Set the canvas width and height to the new size
                            target.width = newSize;
                            target.height = newSize;

                            // Update the element's style
                            target.style.width = newSize + 'px';
                            target.style.height = newSize + 'px';

                            // Translate when resizing from top or left edges
                            const x = parseFloat(target.getAttribute('data-x')) || 0;
                            const y = parseFloat(target.getAttribute('data-y')) || 0;
                            const dx = event.deltaRect.left;
                            const dy = event.deltaRect.top;

                            target.style.transform = 'translate(' + (x + dx) + 'px,' + (y + dy) + 'px)';
                            target.setAttribute('data-x', x + dx);
                            target.setAttribute('data-y', y + dy);
                        },
                    },
                    modifiers: [
                        interact.modifiers.restrictEdges({
                            outer: 'parent',
                        }),

                        // minimum size
                        interact.modifiers.restrictSize({
                            min: { width: 140, height: 140 },
                        }),
                        interact.modifiers.aspectRatio({
                            // make sure the width is always double the height
                            equalDelta: true,
                            // also restrict the size by nesting another modifier
                            modifiers: [interact.modifiers.restrictSize({ max: 'parent' })],
                        }),
                    ],

                    inertia: true,
                })
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    modifiers: [
                        interact.modifiers.restrictRect({
                            restriction: 'parent',
                            endOnly: true,
                        }),
                    ],
                    // enable autoScroll
                    autoScroll: true,

                    listeners: {
                        // call this function on every dragmove event
                        move: (event) => {
                            var target = event.target;
                            // keep the dragged position in the data-x/data-y attributes
                            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                            // translate the element
                            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                            const canvas = canvasRef.current;
                            const ctx = canvas ? canvas.getContext('2d') : false;

                            if (ctx && imgRef.current && canvas && defaultConfigImg && defaultConfigImg) {
                                const img = imgRef.current;

                                // Clear previous content

                                ctx.clearRect(0, 0, canvas.width, canvas.height);

                                // Draw the image onto the canvas
                                ctx.drawImage(img, -x, -y, img.width, img.height);

                                // update the posiion attributes
                                target.setAttribute('data-x', x);
                                target.setAttribute('data-y', y);
                            }
                        },

                        // call this function on every dragend event
                    },
                });
        }
    }, [defaultConfigImg]);
    return (
        <form
            onSubmit={(ev) => {
                ev.preventDefault();
                const imgSrcInput = ev.currentTarget.querySelector(
                    'input[type="file"][name="img"]',
                ) as HTMLInputElement | null; // Access the file directly
                const usernameInput = ev.currentTarget.querySelector(
                    'input[name="username"]',
                ) as HTMLInputElement | null; // Access the file directly
                const dateInput = ev.currentTarget.querySelector('input[name="birthday"]') as HTMLInputElement | null; // Access the file directly

                if (imgSrcInput && usernameInput && dateInput && canvasRef.current) {
                    const img = imgSrcInput.files?.length
                        ? dataURItoBlob(canvasRef.current.toDataURL())
                        : 'avatarDefault';
                    const fields = {
                        avatar: img,
                        username: usernameInput.value,
                        birthday: dateInput.value,
                    };
                    if (fields) {
                        const formData = new FormData();
                        const formArray = Object.entries(fields); // Append the file
                        formArray.forEach(([key, value]) => {
                            formData.append(key, value as any);
                        });

                        $.ajax({
                            type: 'POST',
                            url: process.env.NEXT_PUBLIC_SERVER_SIDE_URL + '/auth', // Replace with your server endpoint
                            data: formData,
                            processData: false,
                            contentType: false,
                            success: function (response) {
                                // Handle success response
                                if (hasMacWrap) {
                                    route.refresh();
                                } else {
                                    window.location.reload();
                                }
                                mutate(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/user-check`);
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader('Authorization', `Bearer ${getAccessToken('access-token')}`); // Replace 'YOUR_ACCESS_TOKEN' with your actual token
                            },
                            error: function (xhr, status, error) {
                                // Handle error response
                            },
                        });
                    } else {
                    }
                }
            }}
            className="fixed inset-0 z-10"
        >
            <motion.div
                className="flex flex-nowrap absolute h-full w-[300%] start-0"
                animate={{ x }}
                transition={{ type: 'linear' }}
            >
                <div className="w-full h-full flex flex-col items-center  justify-center shrink bg-[rgb(var(--background-start-rgb))]">
                    <h1 className="text-xl font-semibold mb-5 text-tl">Username</h1>
                    <Input
                        name="username"
                        value={username}
                        onChange={(ev) => {
                            setUsername(ev.currentTarget.value);
                        }}
                        placeholder="defaul:unnkown"
                        className="bg-transparent border-weak text-current text-base hover:border-green-500 placeholder:text-weak focus:border-green-500 h-[44px] w-[380px]"
                    />
                    <div
                        onClick={() => {
                            setX('-33.33%');
                        }}
                        className={classNames(
                            'mb-3 cursor-pointer mt-5 rounded-full hover:bg-green-500 flex items-center justify-center w-[56px] h-[56px]',
                            { 'bg-green-500': username, 'bg-weak': !username },
                        )}
                    >
                        <ArrowLineIcon className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="w-full  h-full relative flex flex-col items-center justify-center shrink bg-[rgb(var(--background-start-rgb))]">
                    <span
                        onClick={() => {
                            setX('0');
                        }}
                        className="absolute top-14 left-14 flex text-tl cursor-pointer"
                    >
                        <ArrowIcon className="rotate-90 w-6 h-6 mr-1" />
                        Back to username
                    </span>
                    <h1 className="text-xl font-semibold mb-5 text-tl">Birthday</h1>
                    <DatePicker
                        name="birthday"
                        selected={date}
                        onChange={(date: Date) => {
                            setDate(date);
                        }}
                        dateFormat={'dd/MM/yyyy'}
                        placeholderText="Birthday"
                        className={classNames(
                            'outline-none bg-transparent border-weak border rounded-lg px-2 text-current text-base hover:border-green-500 placeholder:text-weak focus:border-green-500 h-[44px] w-[380px]',
                        )}
                    />
                    <div
                        onClick={() => {
                            setX('-66.66%');
                        }}
                        className={classNames(
                            'cursor-pointer mb-3 hover:bg-green-500 mt-5 rounded-full flex items-center justify-center w-[56px] h-[56px]',
                            { 'bg-weak': !date, 'bg-green-500': date },
                        )}
                    >
                        <ArrowLineIcon className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center shrink bg-[rgb(var(--background-start-rgb))] relative">
                    <span
                        onClick={() => {
                            setX('-33.33%');
                        }}
                        className="absolute top-14 left-14 flex text-tl cursor-pointer"
                    >
                        <ArrowIcon className="rotate-90 w-6 h-6 mr-1" />
                        Back to Birthday
                    </span>
                    <h1 className="text-xl font-semibold mb-5 text-tl">Avatar</h1>
                    <div className="">
                        <div
                            hidden={!(imgSrc === '')}
                            className={classNames(
                                'rounded-full border-dashed border  items-center justify-center border-current w-[140px] h-[140px]',
                                { flex: imgSrc === '' },
                            )}
                        >
                            <label htmlFor="tsm-auth-account_input-file" className="cursor-pointer">
                                <PlusIcon className="w-8 h-8" />
                                <input
                                    accept="image/png,image/jpeg,image/jpg"
                                    ref={inputFileRef}
                                    onChange={function (ev) {
                                        const files = ev.currentTarget.files;

                                        files?.length;
                                        const canvas = canvasRef.current;
                                        if (
                                            files?.length &&
                                            files[0].type.split('/')[1].match(/^(jpg|jpeg|png|)$/i) &&
                                            canvas &&
                                            imgRef.current
                                        ) {
                                            const file = files[0];
                                            const reader = new FileReader();
                                            reader.onload = function (event) {
                                                const ctx = canvas.getContext('2d');
                                                if (ctx && imgRef.current) {
                                                    const img = imgRef.current;
                                                    imgRef.current.onload = function () {
                                                        const newWidth = 140; // Adjust as needed
                                                        const newHeight = 140;
                                                        const newX = (img.width - newWidth) / 2;
                                                        const newY = (img.height - newHeight) / 2;
                                                        canvas.width = newWidth;
                                                        canvas.height = newHeight;
                                                        canvas.style.width = newWidth + 'px';
                                                        canvas.style.height = newHeight + 'px'; // Clear previous content

                                                        canvas.setAttribute('data-x', `${newX - 1}`);
                                                        canvas.setAttribute('data-y', `${newY - 1}`);
                                                        canvas.style.transform =
                                                            'translate(' + (newX - 1) + 'px,' + (newY - 1) + 'px)';
                                                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                                                        // Draw the image onto the canvas
                                                        ctx.drawImage(img, -newX, -newY, img.width, img.height);
                                                        setDefaultConfigImg({
                                                            x: newX,
                                                            y: newY,
                                                            w: newWidth,
                                                            h: newHeight,
                                                            maxSize:
                                                                img.width > img.height ? img.height - 2 : img.width - 2,
                                                        });
                                                    };
                                                    event.target && setImgSrc(event.target.result as string);
                                                }
                                            };

                                            reader.readAsDataURL(file);
                                        } else {
                                            ev.currentTarget.value = '';
                                        }
                                    }}
                                    id="tsm-auth-account_input-file"
                                    hidden
                                    type="file"
                                    name="img"
                                />
                            </label>
                        </div>

                        <div className="relative ">
                            <Image
                                className="w-[360px]"
                                hidden={imgSrc === ''}
                                width={300}
                                height={200}
                                src={imgSrc || process.env.NEXT_PUBLIC_CLIENT_SIZE_URL + '/logo-llama.svg'}
                                ref={imgRef}
                                alt=""
                            />
                            <canvas
                                hidden={imgSrc === ''}
                                className="absolute top-0 rounded-full border border-dashed border-tl"
                                ref={canvasRef}
                            ></canvas>
                            <span
                                hidden={imgSrc === ''}
                                onClick={() => {
                                    setImgSrc('');

                                    if (inputFileRef.current && canvasRef.current) {
                                        inputFileRef.current.value = '';
                                        const ctx = canvasRef.current.getContext('2d');
                                        ctx && ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                                    }
                                }}
                                className="absolute top-0 text-tl"
                            >
                                <ExitIcon />
                            </span>
                        </div>
                    </div>

                    <button className="mb-3 hover:bg-green-500 mt-5 rounded-full flex items-center justify-center bg-weak w-[56px] h-[56px]">
                        <ArrowLineIcon className="w-[24px] h-[24px]" />
                    </button>
                </div>
            </motion.div>
        </form>
    );
}

export default AuthAccount;
