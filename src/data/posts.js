import { slugify } from "../utils/slugify";

import Aptos from "../assets/img/aptos.png"
import ArbitrumStdent from "../assets/img/arbitrum-student.jpg";
import Arbitrum from "../assets/img/arbitrum.png";
import Berachain from "../assets/img/berachain.png";
import Bitcoin from "../assets/img/bitcoin.png";
import Celestia from "../assets/img/celestia.png";
import Consensus from "../assets/img/consensus-2025.png";
import EthGlobal from "../assets/img/eth-global.png";
import Layer2Protocols from "../assets/img/layer-2-protocols.jpg";
import Layerzero from "../assets/img/layerzero.jpg";
import LineaAirdrop from "../assets/img/linea-airdrop.jpg";
import Lisk from "../assets/img/lisk.jpg";
import Nft from "../assets/img/nft.jpg";
import Polygon from "../assets/img/polygon-zkevm.png";
import SmartMoney from "../assets/img/smart-money-moves.png";
import SolanaProjects from "../assets/img/solana-projects.jpg";
import Solana from "../assets/img/solana.png";
import StarkNet from "../assets/img/starknet.png";
import SuiLight from "../assets/img/sui-light.jpg";
import Sui from "../assets/img/sui.png";
import Web3Summit from "../assets/img/web3-summit.png";
import Zetachain from "../assets/img/zetachain-public-testnet.png";


const categoryList = [
  "Trending",
  "Latest News",
  "Alpha Calls",
  "Events",
  "Testnets",
  "Web3 Jobs"
];

export const postData = {
    firstSet: [
        {   
            id: slugify("Layer 2 Networks See Record Adoption"),
            img: Layer2Protocols,
            title: "Layer 2 Networks See Record Adoption",
            description: "Optimism, Arbitrum, and zkSync report growth in active users as developers migrate for scalability.",
            source: "The Block",
            postedSince: "2h ago",
            category: categoryList[0],
            buttonText: "Read More"
        },
        {   
            id: slugify("NFT Gaming Surge — Play-to-Earn Expands"),
            img: Nft,
            title: "NFT Gaming Surge — Play-to-Earn Expands",
            description: "Daily active users in top P2E platforms up 40% month-over-month, signaling strong engagement.",
            source: "NFT News",
            postedSince: "4h ago",
            category: categoryList[0],
            buttonText: "Read More"
        },
        {   
            id: slugify("LayerZero Integrates zkSync for Cross-Chain Messaging"),
            img: Layerzero,
            title: "LayerZero Integrates zkSync for Cross-Chain Messaging",
            description: "Integration enables faster bridging and lower fees across networks.",
            source: "Decrypt",
            postedSince: "12h ago",
            category: categoryList[0],
            buttonText: "Explore"
        },
    ],
    secondSet: [
        {   
            id: slugify("Bitcoin Crosses $72K — CME Futures Show Record Long Interest"),
            img: Bitcoin,
            title: "Bitcoin Crosses $72K — CME Futures Show Record Long Interest",
            description: "Market sentiment turns sharply bullish as BTC dominance nears 54%.",
            source: "CoinDesk",
            postedSince: "3h ago",
            category: categoryList[1],
            buttonText: "Read More"
        },
        {   
            id: slugify("Solana NFT Marketplace Surpasses 1M Active Wallets"),
            img: Solana,
            title: "Solana NFT Marketplace Surpasses 1M Active Wallets",
            description: "NFT Adoption accelerates as marketplaces onboard new users.",
            source: "The Block",
            postedSince: "4h ago",
            category: categoryList[1],
            buttonText: "Explore"
        },
        {   
            id: slugify("USDT-SUI Pair sees Record Volume on Dexes"),
            img: Sui,
            title: "USDT-SUI Pair sees Record Volume on Dexes",
            description: "Traders show increased interest in stablecoin/altcoin conversion.",
            source: "Dexscreener",
            postedSince: "3h ago",
            category: categoryList[1],
            buttonText: "View Details"
        },
    ],
    thirdSet: [
        {   
            id: slugify("Solana Projects Rally After $120M Liquidity Boost"),
            img: SolanaProjects,
            title: "Solana Projects Rally After $120M Liquidity Boost",
            description: " Kamino, MarginFi, and Drift show double-digit growth after ecosystem liquidity injections.",
            source: "CoinTelegraph",
            postedSince: "5h ago",
            category: categoryList[2],
            buttonText: "View Analysis"
        },
        {   
            id: slugify("Arbitrum L2 Adoption Signals Next DeFi Wave"),
            img: Arbitrum,
            title: "Arbitrum L2 Adoption Signals Next DeFi Wave",
            description: "Analytics indicate a 30% increase in daily active users over the past month, highlighting growing developer interest.",
            source: "Nansen Insights",
            postedSince: "7h ago",
            category: categoryList[2],
            buttonText: "View Full Insight"
        },
        {   
            id: slugify("Smart Money Moves into $NOVA Ahead of Listing"),
            img: SmartMoney,
            title: "Smart Money Moves into $NOVA Ahead of Listing",
            description: "On-chain data shows whale accumulation signals for $NOVA.",
            source: "On-Chain Data",
            postedSince: "2h ago",
            category: categoryList[2],
            buttonText: "Track Token"
        },
    ],
    fourthSet: [
        {   
            id: slugify(" ETH Global Hackathon — Submissions Open"),
            img: EthGlobal,
            title: " ETH Global Hackathon — Submissions Open",
            description: "Students and developers invited to participate with mentorship, prizes, and exposure to top DeFi projects.",
            source: "ETHGlobal",
            postedSince: "6h ago",
            category: categoryList[3],
            buttonText: "Register Now"
        },
        {   
            id: slugify("Web3 Summit 2025 — Speaker Lineup Announced"),
            img: Web3Summit,
            title: "Web3 Summit 2025 — Speaker Lineup Announced",
            description: "Industry leaders will discuss Layer 2 adoption, NFT marketplaces, and decentralized governance models.",
            source: "Web3 Summit",
            postedSince: "1d ago",
            category: categoryList[3],
            buttonText: "Register Now"
        },
        {   
            id: slugify("Consensus 2025 Early Bird Tickets Available"),
            img: Consensus,
            title: "Consensus 2025 Early Bird Tickets Available",
            description: "Get discounted access to crypto’s biggest annual event.",
            source: "CoinDesk",
            postedSince: "10h ago",
            category: categoryList[3],
            buttonText: "Get Tickets"
        },
    ],
    fifthSet: [
        {   
            id: slugify("ZetaChain Public Testnet Launch — Rewards for Early Participants"),
            img: Zetachain,
            title: "ZetaChain Public Testnet Launch — Rewards for Early Participants",
            description: "Early testers can earn token incentives while exploring EVM and non-EVM bridges.",
            source: "ZetaChain Blog",
            postedSince: "8h ago",
            category: categoryList[4],
            buttonText: "Join Testnet"
        },
        {   
            id: slugify("Polygon zkEVM Testnet — Developer Bounties Open"),
            img: Polygon,
            title: "Polygon zkEVM Testnet — Developer Bounties Open",
            description: "Test new smart contracts on zkEVM and earn rewards for bug reports and feature submissions.",
            source: "Polygon Blog",
            postedSince: "12h ago",
            category: categoryList[4],
            buttonText: "Join Testnet"
        },
        {   
            id: slugify("StarkNet Phase 2 Snapshot Confirmed"),
            img: StarkNet,
            title: "StarkNet Phase 2 Snapshot Confirmed",
            description: "Final chance to qualify for upcoming airdrops.",
            source: "StarkWare",
            postedSince: "5h ago",
            category: categoryList[4],
            buttonText: "Check Eligibility"
        },
    ],
};










export const sideBarPost = {
    featuredPost: [
        {
            id: slugify("Lisk Ambassador Program"),
            img: Lisk,
            title: "Lisk Ambassador Program",
            description: "Accepting 200 participants worldwide. Early adopters gain mentorship and campaign rewards.",
            buttonText: "View",
        },
        {
            id: slugify("SUI Testnet Bounty"),
            img: SuiLight,
            title: "SUI Testnet Bounty",
            description: "Complete network tasks and earn tiered token rewards. Open to students and developers.",
            buttonText: "Join",
        },
        {
            id: slugify("LayerZero Ecosystem Push"),
            img: Layerzero,
            title: "LayerZero Ecosystem Push",
            description: "Earn XP and early access benefits by participating in cross-chain activities.",
            buttonText: "Explore",
        },
        {
            id: slugify("Arbitrum Student Ambassadors"),
            img: Arbitrum,
            title: "Arbitrum Student Ambassadors",
            description: "Apply for mentorship, exclusive calls, and early ecosystem participation.",
            buttonText: "Apply",
        },
    ],
    web3Jobs: [
        {
            id: slugify("LayerZero: Smart Contract Auditor"),
            img: Layerzero,
            title: "LayerZero: Smart Contract Auditor",
            description: "Part-time student role auditing DeFi smart contracts.",
            buttonText: "Apply",
        },
        {
            id: slugify("Blockchain Developer Intern"),
            img: SuiLight,
            title: "Blockchain Developer Intern",
            description: "Remote internship; earn crypto rewards while building real projects.",
            buttonText: "Apply",
        },
        {
            id: slugify("Lisk: Web3 Content Creator"),
            img: Lisk,
            title: "Lisk: Web3 Content Creator",
            description: "Create tutorials, guides, and community posts; compensated in tokens.",
            buttonText: "Apply",
        },
        {
            id: slugify("Linea Q4 Ambassador Progra, Mow Open"),
            img: LineaAirdrop,
            title: "Linea Q4 Ambassador Progra, Mow Open",
            description: "Engage, educate, and earn rewards as a verified Linea rep.",
            buttonText: "Apply",
        },
        {
            id: slugify("Berachain Recruiting Community Mods"),
            img: Berachain,
            title: "Berachain Recruiting Community Mods",
            description: "Help manage communitites ahead of mainnet launch.",
            buttonText: "Sign Up",
        },
        {
            id: slugify("Celestia ‘Light Leaders’ Program Accepting Applications"),
            img: Celestia,
            title: "Celestia ‘Light Leaders’ Program Accepting Applications",
            description: "Receive early ecosystem access and ambassador perks.",
            buttonText: "Join",
        },
        {
            id: slugify("Aptos Expands Africa Hub With Regional Reps"),
            img: Aptos,
            title: "Aptos Expands Africa Hub With Regional Reps",
            description: "New roles open for ecosystem growth in Sub-Saharan regions.",
            buttonText: "Apply Now",
        },
    ]
}