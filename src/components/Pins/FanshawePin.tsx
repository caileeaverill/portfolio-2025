import { PinContainer } from "@/components/ui/3d-pin";

const FanshawePin = () => {
    return (
        <div className="h-[20rem] w-full flex items-center justify-center ">
            <PinContainer
                title="eConverse Media Inc."
                href="https://econversemedia.connectedcommunity.org/home"
            >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-96 md:w-[25rem] h-[20rem] ">
                    <img
                        src="/images/fanshawecollege.jpg"
                        alt=""
                        className="w-full h-full rounded-2xl object-cover"
                    />
                </div>
            </PinContainer>
        </div>
    );
}

export default FanshawePin