import Link from "next/link";

interface LinkButtonLightProps {
    buttonText: string;
    link?: string;
}

// Clear background, blue outline button link
export default function LinkButtonLight({ buttonText, link = "#" }: LinkButtonLightProps) {
    return (
        <Link
            href={link}
            className="transition-all py-5 bg-transparent hover:bg-cyan-500 hover:shadow-lg text-cyan-500 font-semibold hover:text-white py-2 px-10 border border-cyan-500 hover:border-transparent rounded"
        >
            {buttonText}
        </Link>
    );
}
