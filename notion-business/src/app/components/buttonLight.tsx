interface ButtonLightProps {
    buttonText: string;
}

// Clear background, blue outline button link
export default function SubmitButtonLight({ buttonText }: ButtonLightProps) {
    return (
        <button type="submit" className="transition-all bg-transparent hover:bg-cyan-500 hover:shadow-lg text-cyan-500 font-semibold hover:text-white py-2 px-10 border border-cyan-500 hover:border-transparent rounded">
            {buttonText}
        </button>
    );
}
