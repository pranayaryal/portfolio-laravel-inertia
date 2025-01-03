import MainLayout from '@/Layouts/MainLayout';
import NejmLogo from '@/Components/NejmLogo';
import BaseTable from '@/Components/BaseTable';
import { Head } from '@inertiajs/react';
import { CodeViolet, CodeSky, CodeAmber } from '@/Components/CodeColors';

export default function LlmCoding() {
    return (
        <MainLayout>
            <Head>
                <title>Use LLMs in Neovim code editor using gen.nvim plugin</title>
                <meta name="description" content="How to use Neovim code editor with LLMs using the gen.nvim plugin" />
            </Head>
            <div class="max-w-[500px] mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" width="173" height="50" viewBox="0 0 742 214" aria-label="Neovim">
                    <title>Neovim</title>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                            <stop stopColor="#16B0ED" stopOpacity=".8" offset="0%"></stop>
                            <stop stopColor="#0F59B2" stopOpacity=".837" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                            <stop stopColor="#7DB643" offset="0%"></stop>
                            <stop stopColor="#367533" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
                            <stop stopColor="#88C649" stopOpacity=".8" offset="0%"></stop>
                            <stop stopColor="#439240" stopOpacity=".84" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path d="M.027 45.459L45.224-.173v212.171L.027 166.894V45.459z" fill="url(#a)" transform="translate(1 1)"></path>
                        <path d="M129.337 45.89L175.152-.149l-.928 212.146-45.197-45.104.31-121.005z" fill="url(#b)" transform="matrix(-1 0 0 1 305 1)"></path>
                        <path d="M45.194-.137L162.7 179.173l-32.882 32.881L12.25 33.141 45.194-.137z" fill="url(#c)" transform="translate(1 1)"></path>
                        <path d="M46.234 84.032l-.063 7.063-36.28-53.563 3.36-3.422 32.983 49.922z" fillOpacity=".13" fill="#000"></path>
                        <g fill="#444">
                            <path d="M227 154V64.44h4.655c1.55 0 2.445.75 2.685 2.25l.806 13.502c4.058-5.16 8.786-9.316 14.188-12.466 5.4-3.15 11.413-4.726 18.037-4.726 4.893 0 9.205.781 12.935 2.34 3.729 1.561 6.817 3.811 9.264 6.751 2.448 2.942 4.297 6.48 5.55 10.621 1.253 4.14 1.88 8.821 1.88 14.042V154h-8.504V96.754c0-8.402-1.91-14.987-5.729-19.757-3.82-4.771-9.667-7.156-17.544-7.156-5.851 0-11.28 1.516-16.292 4.545-5.013 3.032-9.489 7.187-13.427 12.467V154H227zM350.624 63c5.066 0 9.755.868 14.069 2.605 4.312 1.738 8.052 4.268 11.219 7.592s5.638 7.412 7.419 12.264C385.11 90.313 386 95.883 386 102.17c0 1.318-.195 2.216-.588 2.696-.393.48-1.01.719-1.851.719h-64.966v1.70c0 6.708.784 12.609 2.353 17.7 1.567 5.09 3.8 9.357 6.695 12.802 2.895 3.445 6.393 6.034 10.495 7.771 4.1 1.738 8.686 2.606 13.752 2.606 4.524 0 8.446-.494 11.762-1.483 3.317-.988 6.108-2.097 8.37-3.324 2.261-1.227 4.056-2.336 5.383-3.324 1.326-.988 2.292-1.482 2.895-1.482.784 0 1.388.3 1.81.898l2.352 2.875c-1.448 1.797-3.362 3.475-5.745 5.031-2.383 1.558-5.038 2.891-7.962 3.998-2.926 1.109-6.062 1.991-9.41 2.65a52.21 52.21 0 01-10.088.989c-6.152 0-11.762-1.064-16.828-3.19-5.067-2.125-9.415-5.225-13.043-9.298-3.63-4.074-6.435-9.06-8.415-14.96C310.99 121.655 310 114.9 310 107.294c0-6.408.92-12.323 2.76-17.744 1.84-5.421 4.493-10.093 7.961-14.016 3.467-3.922 7.72-6.991 12.758-9.209C338.513 64.11 344.229 63 350.624 63zm.573 6c-4.696 0-8.904.702-12.623 2.105-3.721 1.404-6.936 3.421-9.65 6.053-2.713 2.631-4.908 5.79-6.586 9.474S319.55 94.439 319 99h60c0-4.679-.672-8.874-2.013-12.588-1.343-3.712-3.232-6.856-5.67-9.43-2.44-2.571-5.367-4.545-8.782-5.92-3.413-1.374-7.192-2.062-11.338-2.062zM435.546 63c6.526 0 12.368 1.093 17.524 3.28 5.154 2.186 9.5 5.286 13.04 9.298 3.538 4.013 6.238 8.85 8.099 14.51 1.861 5.66 2.791 11.994 2.791 19.002 0 7.008-.932 13.327-2.791 18.957-1.861 5.631-4.561 10.452-8.099 14.465-3.54 4.012-7.886 7.097-13.04 9.254-5.156 2.156-10.998 3.234-17.524 3.234-6.529 0-12.369-1.078-17.525-3.234-5.155-2.157-9.517-5.242-13.085-9.254-3.57-4.013-6.285-8.836-8.145-14.465-1.861-5.63-2.791-11.95-2.791-18.957 0-7.008.93-13.342 2.791-19.002 1.861-5.66 4.576-10.496 8.145-14.51 3.568-4.012 7.93-7.112 13.085-9.299C423.177 64.094 429.017 63 435.546 63zm-.501 86c5.341 0 10.006-.918 13.997-2.757 3.99-1.838 7.32-4.474 9.992-7.909 2.67-3.435 4.664-7.576 5.986-12.428 1.317-4.85 1.98-10.288 1.98-16.316 0-5.965-.66-11.389-1.98-16.27-1.322-4.88-3.316-9.053-5.986-12.519-2.67-3.463-6-6.13-9.992-7.999-3.991-1.867-8.657-2.802-13.997-2.802s-10.008.935-13.997 2.802c-3.991 1.87-7.322 4.536-9.992 8-2.671 3.465-4.68 7.637-6.03 12.518-1.35 4.881-2.026 10.305-2.026 16.27 0 6.026.675 11.465 2.025 16.316 1.35 4.852 3.36 8.993 6.031 12.428 2.67 3.435 6 6.07 9.992 7.91 3.99 1.838 8.656 2.756 13.997 2.756z" fill="currentColor"></path>
                            <path d="M530.57 152h-20.05L474 60h18.35c1.61 0 2.967.39 4.072 1.166 1.103.778 1.865 1.763 2.283 2.959l17.722 49.138a92.762 92.762 0 012.551 8.429c.686 2.751 1.298 5.5 1.835 8.25.537-2.75 1.148-5.499 1.835-8.25a77.713 77.713 0 012.64-8.429l18.171-49.138c.417-1.196 1.164-2.181 2.238-2.96 1.074-.776 2.356-1.165 3.849-1.165H567l-36.43 92zM572 61h23v92h-23zM610 153V60.443h13.624c2.887 0 4.78 1.354 5.682 4.06l1.443 6.856a52.7 52.7 0 015.097-4.962 32.732 32.732 0 015.683-3.879 30.731 30.731 0 016.496-2.57c2.314-.632 4.855-.948 7.624-.948 5.832 0 10.63 1.579 14.39 4.736 3.758 3.157 6.57 7.352 8.434 12.585 1.444-3.068 3.248-5.698 5.413-7.894 2.165-2.194 4.541-3.984 7.127-5.367a32.848 32.848 0 018.254-3.068 39.597 39.597 0 018.796-.992c5.111 0 9.653.783 13.622 2.345 3.97 1.565 7.307 3.849 10.014 6.857 2.706 3.007 4.766 6.675 6.18 11.005C739.29 83.537 740 88.5 740 94.092V153h-22.284V94.092c0-5.894-1.294-10.329-3.878-13.306-2.587-2.977-6.376-4.465-11.368-4.465-2.286 0-4.404.391-6.358 1.172a15.189 15.189 0 00-5.144 3.383c-1.473 1.474-2.631 3.324-3.474 5.548-.842 2.225-1.263 4.781-1.263 7.668V153h-22.37V94.092c0-6.194-1.249-10.704-3.744-13.532-2.497-2.825-6.18-4.24-11.051-4.24-3.19 0-6.18.798-8.976 2.391-2.799 1.593-5.399 3.775-7.804 6.54V153H610zM572 30h23v19h-23z" fill="currentColor" fillOpacity=".8"></path>
                        </g>
                    </g>
                </svg>
                <h1 class="text-xl md:text-2xl font-bold mt-8">How To Use Large Language Models (LLMs) in Neovim code editor using gen.nvim</h1>
                <h1 class="text-md md:text-xl font-bold text-left mt-8 text-gray-900">
                    Table of contents:
                </h1>
                <div class="mt-2 leading-6 md:leading-7">
                    <p>1. Why Should You Use A LLM In Your Computer</p>
                    <p>2. How to Download a Large Language Model (LLM) using Ollama</p>
                    <p>3. How to Set Up A Basic Neovim Code Editor From Scratch</p>
                    <p>4. Install The Plugin gen.nvim In Your Neovim To Use an LLM</p>
                    <p>5. Use The Large Language Model In Your Code Editor</p>
                </div>

                <p class='mt-12'>Here is the video where I show how to have LLM in neovim code editor using the plugin gen.nvim.</p>
                <iframe class="w-[95%] mt-8" width="560" height="315" src="https://www.youtube.com/embed/oQnXAOjMQOw?si=0SIOD-3XRiclECSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <div class='step flex md:items-center space-x-4 py-4 mt-12'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        1
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Why Should You Use LLM in Your Computer</h1>
                </div>
                <p class='mt-6'>You can download LLMs and use it as a compressed form of internet without you needing an internet connection.</p>
                <p class='mt-4 md:mt-2'>This is better than ChatGPT because you don't have to give your data away.</p>
                <p class='mt-4 md:mt-2'>Software developers like me can use LLMs to answer their questions and to understand code written by someone else.</p>
                <p class='mt-4 md:mt-2'>Writers can leverage this tool to refine their concepts and rephrase their linguistic expressions</p>
                <div class='step flex md:items-center space-x-4 py-4 mt-12'>
                    <div
                        class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                        2
                    </div>
                    <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">How To Download An LLM using Ollama</h1>
                </div>
                <p class='mt-6 md:mt-4'><a href="https://ollama.com/" class='text-blue-500' target="__blank">Ollama</a> is a great tool that packages LLMs in a way you can use in your computer.</p>
                <p class='mt-4 md:mt-2'>You can download the <span class='text-blue-500'>llama3</span> model</p>
                <p class='mt-4 md:mt-2'>After you download ollama you can use the below command command; the model will download and a chat will open up in the terminal</p>
                <p class='mt-4 md:mt-2'>You can use it as a chat interface to ask any questions.</p>
                <p class='mt-4 md:mt-2'>This chat is also available through an API endpoint which will be used in your neovim code editor</p>
                <div class='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
                    <div class='flex space-x-2 items-center'>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
                        </svg>
                        <p><span class='text-violet-300 text-xs'>homeFolder/Code ~</span><span class='text-white text-xs'> ollama run llama3</span></p>

                    </div>
                    <p class='text-white'><span class='text-gray-400 text-xs ml-2'>{`Send a message (/? for help)`}</span></p>
      </div>
      <p class='mt-4'>When you type 'ollama list' like this </p>
      <div class='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
        <div class='flex space-x-2 items-center'>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
          </svg>
          <p><span class='text-violet-300 text-xs'>homeFolder/Code ~</span><span class='text-white text-xs'> ollama list</span></p>
        </div>
      </div>
      <p class="mt-4">You will see this output</p>
      <div class='bg-ubuntu-background rounded-md px-3 py-3 mt-4'>
        <div class='flex space-x-2 items-center'>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#66ff00" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
          </svg>
          <p><span class='text-violet-300 text-xs'>homeFolder/Code ~</span><span class='text-white text-xs'> ollama list</span></p>
        </div>
        <p class='text-white text-xs'>
          <span>NAME</span>
          <span class='ml-16'>ID</span>
          <span class='ml-20'>SIZE</span>
          <span class='ml-8'>MODIFIED</span>
        </p>
        <p class='text-white text-xs'>
          <span>llama3:latest</span>
          <span class='ml-6'>365c0bd3c000</span>
          <span class='ml-4'>4.7GB</span>
          <span class='ml-6'>3 days ago</span>
        </p>
      </div>
      <div class='step flex md:items-center space-x-4 py-4 mt-12'>
            <div
                class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                3
            </div>
            <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">How To  Set Up A Basic Neovim Code Editor From Scratch</h1>
      </div>
      <p class='mt-4'>Why Neovim?  This is a light-weighted code-editor that you can customize for yourself.</p>
      <p class='mt-2'>Here is a good <a
        href="https://www.youtube.com/watch?v=m8C0Cq9Uv9o&t=0s"
        target="__blank"
        class="bg-pink-50 cursor-pointer text-blue-500">tutorial.</a></p>
      <div class='step flex md:items-center space-x-4 py-4 mt-12'>
            <div
                class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                4
            </div>
            <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Install The Plugin gen.nvim</h1>
      </div>
      <p class='mt-4'>Once you have set up your <span class='text-red-500'>init.lua</span>, go to gen.nvim
        <a target="__blank" class='text-blue-500' href="https://github.com/David-Kunz/gen.nvim"> repository</a> by David Kunz</p>
      <p class="mb-4 mt-4">You will see this code in the README.md. Add this code to your <span class='bg-orange-400 px-1 rounded-sm'>init.lua</span> file.
      Note that the model is 'llama3' in the example below.  You can use any model available in llama but be sure to change your init.lua accordingly.</p>

      <div class="flex mt-4 text-white rounded-md text-xs md:text-sm">
        <div class='hidden md:flex md:flex-col space-y-8 bg-vs-background w-[45px] py-5 px-3'>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.5002 0H8.50024L7.00024 1.5V6H2.50024L1.00024 7.5V22.5699L2.50024 24H14.5702L16.0002 22.5699V18H20.7002L22.0002 16.5699V4.5L17.5002 0ZM17.5002 2.12L19.8802 4.5H17.5002V2.12ZM14.5002 22.5H2.50024V7.5H7.00024V16.5699L8.50024 18H14.5002V22.5ZM20.5002 16.5H8.50024V1.5H16.0002V6H20.5002V16.5Z" fill="white" />
						</svg>
					</div>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.2502 1.02546e-06C13.6607 -0.000791296 12.1048 0.457574 10.7697 1.32007C9.43447 2.18256 8.37681 3.4124 7.724 4.8617C7.07118 6.31099 6.85102 7.91801 7.08984 9.4895C7.32867 11.061 8.01628 12.5301 9.07019 13.72L1.00024 22.88L2.12024 23.88L10.1703 14.76C11.2057 15.5693 12.4195 16.1196 13.7106 16.365C15.0017 16.6104 16.3328 16.5437 17.5929 16.1707C18.853 15.7976 20.0058 15.1288 20.9552 14.2201C21.9046 13.3114 22.6232 12.1891 23.0511 10.9465C23.4791 9.70396 23.6041 8.37703 23.4155 7.07642C23.227 5.77581 22.7304 4.53915 21.9673 3.46924C21.2041 2.39933 20.1964 1.52711 19.0281 0.925416C17.8597 0.323719 16.5644 0.00991516 15.2502 0.0100108V1.02546e-06ZM15.2502 15C13.9152 15 12.6102 14.6041 11.5001 13.8624C10.3901 13.1207 9.52493 12.0665 9.01404 10.8331C8.50315 9.59973 8.36943 8.24248 8.62988 6.93311C8.89033 5.62373 9.53329 4.42106 10.4773 3.47705C11.4213 2.53305 12.624 1.89009 13.9333 1.62964C15.2427 1.36919 16.6 1.5029 17.8334 2.01379C19.0668 2.52469 20.121 3.38985 20.8627 4.49988C21.6044 5.60991 22.0002 6.91498 22.0002 8.25C22.0002 10.0402 21.2891 11.7571 20.0232 13.023C18.7573 14.2888 17.0405 15 15.2502 15Z" fill="white" />
						</svg>

					</div>
					<div class='text-gray-400'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.007 8.22168C21.0105 7.52792 20.8207 6.84689 20.4591 6.25485C20.0974 5.66281 19.578 5.18315 18.9592 4.86957C18.3403 4.556 17.6463 4.42091 16.9551 4.47941C16.2637 4.53793 15.6025 4.78773 15.045 5.20085C14.4877 5.61397 14.0563 6.17409 13.7993 6.8185C13.5424 7.4629 13.4697 8.16613 13.5898 8.84944C13.7099 9.53274 14.0177 10.1692 14.4789 10.6874C14.9402 11.2056 15.5367 11.5852 16.2015 11.7836C15.956 12.2824 15.5763 12.703 15.1049 12.9979C14.6336 13.2929 14.0894 13.4505 13.5334 13.4532H10.544C9.43726 13.4571 8.37163 13.8727 7.55451 14.6191V7.39809C8.46184 7.21288 9.26808 6.69737 9.81692 5.95151C10.3658 5.20565 10.6181 4.28256 10.525 3.36121C10.4319 2.43987 10.0001 1.5859 9.31316 0.964873C8.62624 0.343845 7.73319 0 6.80716 0C5.88112 0 4.98807 0.343845 4.30114 0.964873C3.61422 1.5859 3.18236 2.43987 3.08928 3.36121C2.9962 4.28256 3.24855 5.20565 3.79739 5.95151C4.34623 6.69737 5.15247 7.21288 6.0598 7.39809V16.5159C5.15418 16.6891 4.34323 17.1877 3.77993 17.9176C3.21663 18.6476 2.93992 19.5585 3.00197 20.4785C3.06403 21.3984 3.46057 22.2639 4.1168 22.9115C4.77303 23.5592 5.6436 23.9444 6.56427 23.9944C7.48496 24.0445 8.39211 23.7558 9.11464 23.183C9.83718 22.6102 10.3251 21.7928 10.4865 20.885C10.6478 19.9771 10.4714 19.0417 9.99048 18.255C9.50957 17.4683 8.75741 16.8848 7.87588 16.6145C8.12176 16.1162 8.50167 15.6963 8.97296 15.4019C9.44426 15.1074 9.98827 14.9503 10.544 14.9479H13.5334C14.4661 14.9436 15.3742 14.6486 16.1313 14.1039C16.8884 13.5592 17.4568 12.792 17.7575 11.9091C18.6534 11.7914 19.4763 11.3528 20.0738 10.6748C20.6713 9.9968 21.0028 9.12533 21.007 8.22168ZM4.56508 3.73752C4.56508 3.29408 4.69657 2.8606 4.94293 2.4919C5.1893 2.12319 5.53947 1.83581 5.94915 1.66611C6.35884 1.49642 6.80965 1.45202 7.24456 1.53854C7.67948 1.62504 8.07898 1.83857 8.39254 2.15214C8.70611 2.4657 8.91964 2.8652 9.00615 3.30012C9.09266 3.73504 9.04827 4.18585 8.87857 4.59553C8.70887 5.00521 8.42149 5.35539 8.05278 5.60175C7.68408 5.84811 7.2506 5.9796 6.80716 5.9796C6.21252 5.9796 5.64224 5.74339 5.22177 5.32291C4.80129 4.90245 4.56508 4.33216 4.56508 3.73752ZM9.04923 20.1794C9.04923 20.6229 8.91774 21.0563 8.67138 21.425C8.42501 21.7937 8.07485 22.0811 7.66516 22.2508C7.25547 22.4205 6.80466 22.4649 6.36975 22.3784C5.93483 22.292 5.53533 22.0784 5.22177 21.7648C4.90821 21.4512 4.69467 21.0517 4.60816 20.6169C4.52165 20.1819 4.56605 19.7311 4.73575 19.3214C4.90545 18.9117 5.19282 18.5615 5.56153 18.3152C5.93023 18.0689 6.36371 17.9373 6.80716 17.9373C7.40179 17.9373 7.97207 18.1736 8.39254 18.594C8.81302 19.0145 9.04923 19.5848 9.04923 20.1794ZM17.2702 10.4638C16.8267 10.4638 16.3933 10.3322 16.0246 10.0859C15.6559 9.83954 15.3685 9.48937 15.1988 9.07969C15.0291 8.67 14.9847 8.2192 15.0712 7.78427C15.1576 7.34935 15.3712 6.94985 15.6848 6.63629C15.9984 6.32273 16.3979 6.10919 16.8327 6.02268C17.2677 5.93617 17.7185 5.98058 18.1281 6.15027C18.5379 6.31997 18.8881 6.60734 19.1344 6.97605C19.3807 7.34476 19.5123 7.77823 19.5123 8.22168C19.5123 8.81632 19.276 9.3866 18.8556 9.80706C18.4351 10.2275 17.8648 10.4638 17.2702 10.4638Z" fill="white" />
						</svg>
					</div>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5002 1.5L15.0002 0H22.5002L24.0002 1.5V9L22.5002 10.5H15.0002L13.5002 9V1.5ZM15.0002 1.5V9H22.5002V1.5H15.0002ZM0.000244141 15V6L1.50024 4.5H9.00024L10.5002 6V13.5H18.0002L19.5002 15V22.5L18.0002 24H10.5002H9.00024H1.50024L0.000244141 22.5V15ZM9.00024 13.5V6H1.50024V13.5H9.00024ZM9.00024 15H1.50024V22.5H9.00024V15ZM10.5002 22.5H18.0002V15H10.5002V22.5Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="24" height="24" fill="white" transform="translate(0.000244141)" />
								</clipPath>
							</defs>
						</svg>
					</div>
        </div>
        <div class='bg-code-background py-4 px-6 md:px-8 relative'>
          <p class='text-xs absolute right-2 top-1'>Add this to your ~/.config/nvim/init.lua</p>
          <span class='mt-4'>{`{`}</span>
          <p class='ml-4'><CodeViolet>"David-Kunz/gen.nvim",</CodeViolet></p>
          <p class='ml-5'>{`opts= {`}</p>
          <p class='ml-6 text-xs text-gray-500'>-- The default model to use.</p>
          <p class='ml-6'>model = <span class="text-sky-300">"llama3",</span></p>
          <p class='ml-6 text-xs text-gray-500'>-- The host running the ollama service</p>
          <p class='ml-6'>host = <span class="text-sky-300">"localhost",</span></p>
          <p class='ml-6 text-xs text-gray-500'>-- The port on which the ollama service is listening</p>
          <p class='ml-6'>port = <span class="text-sky-300">"11434",</span></p>
          <p class='ml-6 text-xs text-gray-500'>-- set keymap for close the response window</p>
          <p class='ml-6'>quit_map = <span class="text-sky-300">"q",</span></p>
          <p class='ml-6 text-xs text-gray-500'>`-- set keymap to re-send the current prompt</p>
                    <p class='ml-6'>retry_map = <span class="text-sky-300">{`<c-r>,`}</span></p>
                    <p class='ml-6'>init = function(options) pcall(io.popen, "ollama serve &gt; /dev/null 2&gt;&1 &") end,</p>
                    <p class='ml-6 text-xs text-gray-500'> -- Function to initialize Ollama</p>
                    <p class='ml-6'><span class="text-yellow-500">command = </span><span class="text-sky-300">function</span>{`{(options)`}</p>
          <p class='ml-6'>local body = model = options.model, stream = true</p>
          <p class='ml-6'>return "curl --silent --no-buffer -X POST http://" .. options.host .. ":" .. options.port .. "/api/chat -d $body"</p>
          <p class='ml-6'><span class="text-yellow-500">end</span></p>
          <p class='ml-6 text-xs text-gray-500'>-- The command for the Ollama service. You can use placeholders $prompt, $model and $body (shellescaped).</p>
          <p class='ml-6 text-xs text-gray-500'>-- This can also be a command string.</p>
          <p class='ml-6'>display_mode = <span class="text-sky-300">"split",</span></p>
          <p class='ml-6'>show_prompt = <span class="text-sky-300">false,</span></p>
          <p class='ml-6'>show_model = <span class="text-sky-300">false,</span></p>
          <p class='ml-6'>no_auto_close = <span class="text-sky-300">false,</span></p>
          <p class='ml-6'>debug = <span class="text-sky-300">false</span></p>
          <p class='ml-4'></p>
          <span>{`}`}</span>
        </div>
      </div>
      <div class='step flex md:items-center space-x-4 py-4 mt-12'>
            <div
                class="flex items-center justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
                5
            </div>
            <h1 class="tracking-tight leading-6 font-semibold text-lg md:text-2xl mb-0">Using the LLM</h1>
      </div>
      <p class='mt-4'>Once you have added above to your init.lua file, close your neovim and reopen it</p>
      <p class='mt-4'>Let's say you want to ask a general question</p>
      <p class='mt-4'>Type colon (:) and then type 'Gen' like this (see bottom) and then press Enter.</p>
      <div class='mt-4 bg-code-background rounded-md relative'>
        <p>There are nice</p>
        <p>There are nice</p>
        <div class='text-white text-xs'>
          <div class='flex justify-between items-center w-full'>
            <div class='flex'>
              <p class='bg-blue-500 px-2 text-black'>Normal</p>
              <p class='px-2'>Git main diff -</p>
              <p class='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div class='hidden md:flex'>
              <p class='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Gen</p>
        </div>
      </div>
      <p class='mt-8'>You will see a dropdown box appear as below:</p>
      <p class='mt-2'>Scroll down and choose 'Chat'</p>
      <div class='mt-4 bg-code-background rounded-md relative'>
        <p>There are nice</p>
        <p>There are nice</p>
        <div class='text-white text-xs md:text-sm'>
          <div class='flex flex-col items-center justify-center text-white w-2/3 mb-4'>
            <div class='border-orange-400 border flex flex-col px-3 rounded-md py-3'>
              <p></p>
              <p>Ask</p>
              <p>Change</p>
              <p>Change Code</p>
              <p class='bg-gray-500 px-2 rounded-sm bg-gray-500'>Chat</p>
              <p>Enhance Code</p>
              <p>Enhance Grammar Spelling</p>
              <p>Enhance Wording</p>
              <p>Generate</p>
              <p>Make Concise</p>
              <p>Make List</p>
              <p>Make Table</p>
            </div>

          </div>
          <div class='flex justify-between items-center text-xs w-full'>
            <div class='flex'>
              <p class='bg-blue-500 px-2 text-black'>Normal</p>
              <p class='px-2'>Git main diff -</p>
              <p class='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div class='hidden md:flex'>
              <p class='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
              <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:Gen</p>
        </div>
      </div>
      <p class='mt-8 text-sm md:text-md'>Or you could highlight your code, type 'Gen' and ask a question like this</p>
      <div class='mt-4 bg-code-background rounded-md relative'>
        <div class='pl-4  pt-4 text-white text-xs'>
          <div class='bg-gray-500 px-2 py-4 w-4/5 md:w-1/2 rounded-sm'>
            <span class="text-violet-300">def </span><span class="text-sky-300">pytest_collection_modifyitems</span>(<span class="text-yellow-500">config, items</span>):
            <p class='ml-4'>requires_trainable_backend = pytest.mark.skipif(</p>
            <p class='ml-6'><span class="text-sky-300">backend() </span><span class="text-green-300">= "numpy"</span></p>
            <p class='ml-6'><span class="text-yellow-500">reason</span><span class='text-green-300'>="Trainer not implemented for NumPy backend.",</span></p>
            <p class='ml-4'>)</p>
            <p class='ml-4'><span class="text-violet-300">for</span> items <span class="text-violet-300">in</span> items:</p>
            <p class='ml-8'>if <span class="text-yellow-500">"requires_trainable_backend"</span> <span class="text-sky-300">in</span> item.keywords:</p>
            <p class='ml-12'>item.add_marker(requires_trainable_backend)</p>
          </div>
        </div>
        <div class='text-white text-xs mt-4'>
          <div class='flex justify-between items-center w-full'>
            <div class='flex'>
              <p class='bg-blue-500 px-2 text-black'>Normal</p>
              <p class='px-2'>Git main diff -</p>
              <p class='bg-gray-400 px-2 rounded-sm'>~/path/to/file</p>
            </div>
            <div class='hidden md:flex'>
              <p class='bg-gray-500 px-2 rounded-sm'>python utf-8[unix] 12.22Kib</p>
              <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
          <p>:'&lte;,'&gte;Gen<span class='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
        </div>
      </div>
      <p class='mt-8 text-sm md:text-md'>If you click on 'Ask', it will open a prompt like below</p>
      <div class='mt-4 bg-code-background rounded-md flex-col text-xs md:flex-row'>
        <div class='flex flex-col justify-between'>
          <div class='pl-6  pt-6 text-white text-xs md:text-sm'>
            <p><CodeViolet>def </CodeViolet><CodeSky>pytest_collection_modifyitems</CodeSky>(<CodeAmber>config, items</CodeAmber>):</p>
            <p class='ml-4'>requires_trainable_backend = pytest.mark.skipif(</p>
            <p class='ml-6'><CodeSky>backend() </CodeSky><span class="text-green-300">= "numpy"</span></p>
            <p class='ml-6'>)</p>
            <p class='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
            <p class='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
            <p class='ml-12'>item.add_marker(requires_trainable_backend)</p>
          </div>
        <div class='flex flex-col items-center justify-center text-white mb-4 text-xs md:text-sm py-3 px-4'>
          <div class='border-orange-400 border flex flex-col px-3 rounded-md py-3'>
            <p></p>
            <p class='bg-gray-500 px-2 rounded-sm bg-gray-500'>Ask</p>
            <p>Change</p>
            <p>Change Code</p>
            <p>Enhance Code</p>
            <p>Chat</p>
            <p>Enhance Grammar Spelling</p>
            <p>Enhance Wording</p>
            <p>Generate</p>
            <p>Make Concise</p>
            <p>Make List</p>
            <p>Make Table</p>
          </div>
        </div>
          <div class='flex justify-between items-center w-full text-xs'>
            <div class='flex'>
              <p class='bg-blue-500 px-2 text-black'>Normal</p>
              <p class='px-2 text-white'>Git main diff -</p>
              <p class='bg-gray-400 px-2 rounded-sm'>~/conftest.py</p>
            </div>
            <div class='flex'>
              <p class='bg-gray-500 px-2 rounded-sm'>python</p>
              <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
            </div>
          </div>
        </div>
      </div>
      <p class='mt-8 text-sm md:text-md'>Then it will open a prompt input like below</p>
      <div class='mt-4 bg-code-background rounded-md relative text-xs'>
        <div class='pl-4  pt-2 text-white'>
          <p><CodeViolet>def </CodeViolet><CodeSky>modify_items</CodeSky>(<CodeAmber>config,</CodeAmber></p>
          <p>items):</p>
          <p class='ml-4'>requires_trainable_backend = pytest.mark.skipif(</p>
          <p class='ml-6'><CodeSky>backend() </CodeSky><span class="text-green-300">= "numpy"</span></p>
          <p class='ml-6'><CodeAmber>reason</CodeAmber><span class='text-green-300'>="Trainer not implemented for NumPy backend.",</span></p>
          <p class='ml-4'>)</p>
          <p class='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
          <p class='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
          <p class='ml-12'>item.add_marker(requires_trainable_backend</p>
        </div>
        <div class='flex justify-between items-center w-full text-xs mt-8'>
          <div class='flex'>
            <p class='bg-blue-500 px-2 text-black'>Normal</p>
            <p class='px-2 text-white'>Git main diff -</p>
            <p class='bg-gray-400 px-2 rounded-sm'>~/conftest.py</p>
          </div>
          <div class='flex'>
            <p class='bg-gray-500 px-2 rounded-sm'>python</p>
            <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
          </div>
        </div>
        <p class='text-white'>:Prompt: what does this code do<span class='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
      </div>
      <p class='mt-4 text-sm md:text-md'>Your screen will be split.</p>
      <div class='mt-4 text-xs bg-code-background rounded-md relative'>
        <div class='flex flex-col md:flex-row'>
          <div class="md:w-1/2">
            <div class='px-4 pt-4 text-white text-xs'>
              <div class='bg-gray-500  p-4 rounded-sm'>
                <p>def pytest_modifyitems(config, items):</p>
                <p class='ml-4'>requires_trainable_backend = pytest.mark.skipif(</p>
                <p class='ml-6'><CodeSky>backend() </CodeSky><span class="text-green-300">= "numpy"</span></p>
                <p class='ml-6'><CodeAmber>reason</CodeAmber><span class='text-green-300'>"Trainer not implemented for NumPy backend.",</span></p>
                <p class='ml-4'>)</p>
                <p class='ml-4'><CodeViolet>for</CodeViolet> items <CodeViolet>in</CodeViolet> items:</p>
                <p class='ml-8'>if <CodeAmber>"requires_trainable_backend"</CodeAmber> <CodeSky>in</CodeSky> item.keywords:</p>
                <p class='ml-12'>item.add_marker(</p>
                <p class='ml-12'>requires_trainable_backend)</p>
              </div>
            </div>
          </div>
          <div class='text-white text-xs px-8 py-4 border-orange-400 border-top'>
            <p>This is a custom hook function in Pytest that modifies the test collection. Specifically, it adds markers to certain test items based on their keywords.</p>
            <p class='mt-4'>Here is what it does:</p>
            <p><CodeAmber>1.</CodeAmber> It defines a marker `requires_trainable_backend` using the `pytest.mark.skipif` function. This marker will be added to test items that require a trainable backend (e.g., TensorFlow or PyTorch).</p>
                    <p><CodeAmber>2.</CodeAmber> It defines a marker `requires_trainable_backend` using the `pytest.mark.skipif` function. This marker will be added to test items that require a trainable backend (e.g., TensorFlow or PyTorch).</p>

                </div>
            </div>
            <div class='text-white text-xs'>
                <div class='mt-4 flex md:justify-between items-center w-full'>
                    <div class='flex'>
                        <p class='bg-blue-500 px-2 text-black'>Normal</p>
                        <p class='px-2'>Git main diff -</p>
                        <p class='bg-gray-400 px-2 rounded-sm'>~/conftest.py</p>
                    </div>
                    <div class='hidden md:flex'>
                        <p class='bg-gray-500 px-2 rounded-sm'>javascript utf-8[unix] 12.22Kib</p>
                        <p class='bg-blue-400 text-black px-2 rounded-sm'>140:36</p>
                    </div>
                </div>
                <p>:Prompt: what does this code do<span class='ml-1 bg-gray-500 px-1 py-[0.5px]'></span></p>
            </div>
        </div>
    </div >

        </MainLayout >

    );
}

