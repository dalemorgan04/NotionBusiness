export default function SectionHeadingWhite({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-8">
            <h1 className="font-sans space-y-8 text-2xl tracking-[0.8rem] uppercase text-cyan-600 lg:text-5xl mdLtracking-[1rem] lg:tracking-[2rem]">
                {children}
            </h1>
        </div>
    );
}
