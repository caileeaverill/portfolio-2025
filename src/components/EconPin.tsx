"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export function eConPin() {
    return (
        <div className="h-[20rem] w-full flex items-center justify-center ">
            <PinContainer
                title="eConverse Media Inc."
                href="https://temporarylink.com/"
            >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <img
                        src="/public/images/placeholder.svg"
                        alt=""
                        className="w-full h-full rounded-2xl object-cover bg-top"
                    />
                </div>
            </PinContainer>
        </div>
    );
}

export default eConPin;