"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}


export default function LoginModal({ onClose,setIsLogin }: Props) {
  const [mounted, setMounted] = useState(false);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = document.getElementById("portal-root");
    setPortalNode(el);
  }, []);

  if (!mounted || !portalNode) return null;

  const handleSubmit = (e: React.FormEvent) => {


    e.preventDefault();
    // TODO: Thêm logic đăng nhập ở đây (validate, call API...)
    setIsLogin(true);
    onClose();
  };

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10000">
      <div className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 -z-10 opacity-100 animate-modal-in"></div>
      <div className="h-full outline-none overflow-x-hidden overflow-y-auto text-center">
        <div className="inline-block text-left align-middle bg-white shadow-[0_12px_15px_0_rgba(0,0,0,0.25)] p-[1.2rem] relative overflow-y-auto max-w-[400px] min-w-[200px] rounded py-10 px-6 m-0 animate-modal-in animation-forwards">
          <div className="w-[350px]">
            <div className="text-center mb-[1rem]">
              <Image
                src={"https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"}
                alt="Login icon"
                width={190}
                height={120}
                className="my-0 mx-auto object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
              />
              <h5 className="text-lg font-bold not-italic py-2 capitalize">
                Đăng nhập tài khoản
              </h5>
            </div>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="text-xs block font-bold not-italic text-[#777777]"
              >
                Email
              </label>
              <span className="w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300">
                <input
                  autoComplete="email"
                  type="text"
                  placeholder="Nhập Email"
                  name="email"
                  id="email"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2"
                />
              </span>
              <br />
              <label
                htmlFor="password"
                className="text-xs block font-bold not-italic text-[#777777]"
              >
                Mật khẩu
              </label>
              <span className="w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300">
                <input
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    // Icon mắt "đóng" (mắt gạch chéo)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.956 9.956 0 014.333-8.11m1.56 1.56a3 3 0 014.242 4.242M15 12a3 3 0 01-6 0m9 0a9.956 9.956 0 01-1.875 6.825M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    // Icon mắt "mở"
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </span>
              <button
                type="submit"
                onClick={() => setIsLogin(true)}
                className="cursor-pointer rounded-md hover:bg-[#e38601] transition-all duration-30 min-w-[135px] focus:outline-none focus:ring-[#e38601] text-sm text-center inline-flex items-center dark:hover:bg-[#e38601] dark:focus:ring-[#e38601] justify-center text-white bg-[#F58020] w-full h-full px-5 py-2.5 uppercase mt-5"
              >
                <span className="block">Đăng nhập</span>
              </button>
              <div className="text-start mt-[14px] mb-4 ">
                <Link
                  className="inline cursor-pointer text-[14px] text-[#212529] font-light hover:text-[#f26b38] transition-all duration-300"
                  href={"#"}
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </form>
            <div className="text-[14px] text-center pt-[1.5rem] border-t-2">
              <span>Bạn chưa có tài khoản ? </span>
              <button
                type="button"
                className="cursor-pointer rounded-md hover:bg-[#e38601] transition-all duration-30 min-w-[135px] w-full focus:outline-none focus:ring-[#e38601] text-sm text-center inline-flex items-center dark:hover:bg-[#e38601] dark:focus:ring-[#e38601] justify-center border border-orange-20 text-primary hover:text-white px-6 py-[6px] font-light"
              >
                <span className="block">Đăng ký</span>
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close login modal"
            className="absolute top-[14px] right-[14px] border-none p-0 cursor-pointer bg-gray-600 flex transform-none m-0 text-[100%]"
          >
            <span className="bg-[rgb(236,236,236)] rounded-full content-center items-center w-[24px] h-[24px] inline-flex">
              <Image
                src={"https://www.galaxycine.vn/_next/static/media/icon-close.7e22f021.svg"}
                alt="Close icon"
                width={30}
                height={30}
                className="m-w-full block align-middle"
              />
            </span>
          </button>
        </div>
      </div>
    </div>,
    portalNode
  );
}
