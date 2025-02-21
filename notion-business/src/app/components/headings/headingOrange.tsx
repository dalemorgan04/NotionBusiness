export default function SectionOrange({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full bg-orange-200 ">
            <div className="container mx-auto px-8 py-8 lg:px-20 lg:py-10 text-base font-serif text-black text-justify">
                {children}
            </div>
        </section>
    );
}
