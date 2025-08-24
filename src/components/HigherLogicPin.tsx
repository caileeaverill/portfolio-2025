"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export function HigherLogicPin() {
    return (
        <div className="h-[20rem] w-full flex items-center justify-center ">
            <PinContainer
                title="Higher Logic"
                href="https://www.higherlogic.com/"
            >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 max-w-96 md:w-[25rem] h-[20rem] ">
                    <img
                        src="/screenshots/hl-screenshot.png"
                        alt=""
                        className="w-full h-full rounded-2xl object-cover bg-top"
                    />
                </div>
            </PinContainer>
        </div>
    );
}

export default HigherLogicPin;