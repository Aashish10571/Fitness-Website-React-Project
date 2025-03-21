import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link.tsx";
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Index = ({
                   isTopOfPage,
                   selectedPage,
                   setSelectedPage,
               }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuSelected, setIsMenuSelected] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div
                    className={`${flexBetween} mx-auto w-5/6`}
                >
                    <div
                        className={`${flexBetween} w-full gap-16`}
                    >
                        {/*left side*/}
                        <img alt={"logo"} src={Logo}/>

                        {/*right side*/}
                        {isAboveMediumScreens ?
                            <div
                                className={`${flexBetween} w-full`}
                            >
                                {/*inner left side*/}
                                <div
                                    className={`${flexBetween} gap-8 text-sm`}
                                >
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>

                                {/*inner right side*/}
                                <div
                                    className={`${flexBetween} gap-8`}
                                >
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div> : (
                                <button
                                    className={"rounded-full bg-secondary-500 p-2"}
                                    onClick={() => setIsMenuSelected(!isMenuSelected)}
                                >
                                    <Bars3Icon className={"h-6 w-6 text-white"}/>
                                </button>
                            )}
                    </div>
                </div>
            </div>

            {/*mobile menu modal*/}
            {!isAboveMediumScreens && isMenuSelected && (
                <div
                    className={"fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"}
                >
                    <div
                        className={"flex justify-end p-12"}
                    >
                        <button onClick={() => setIsMenuSelected(!isMenuSelected)}>
                            <XMarkIcon className={"h-6 w-6 text-gray-400"}/>
                        </button>
                    </div>

                    {/*menu items*/}
                    <div
                        className="ml-[33%] flex flex-col gap-10 text-xl"
                    >
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Index;
