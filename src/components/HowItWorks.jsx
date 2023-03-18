import React from "react";
import WalletLogo from "../assets/how-it-works-images/wallet-logo.png"
import CollectionLogo from "../assets/how-it-works-images/collection-logo.png"
import EarningLogo from "../assets/how-it-works-images/earning-logo.png"
import HowItWorksCard from "./cards/HowItWorksCard";

export default function HowItWorks() {
    return (
        <div className="mt-20 mb-20 font-workSans">
            <div className="px-8 sm:px-32 text-white mb-10">
                <h4 className="text-3xl lg:text-[2.5rem] font-bold">
                    How It Works
                </h4>
                <p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
                    Find Out How To Get Started
                </p>
            </div>
            <div className="block md:flex px-8 lg:px-20 xl:px-32 gap-7">
                <div className="md:flex-1">
                    <HowItWorksCard icon={WalletLogo} title="Setup Your wallet" description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
                </div>
                <div className="md:flex-1">
                    <HowItWorksCard icon={CollectionLogo} title="Create Collection" description="Upload your work and setup your collection. Add a description, social links and floor price." />
                </div>
                <div className="md:flex-1">
                    <HowItWorksCard icon={EarningLogo} title="Start Earning" description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
                </div>
            </div>
        </div>
    )
}