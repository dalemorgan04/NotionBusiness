import { XDirection } from "../componentEnums";

export interface IndexedTimelineItemProps {
    id: string;
    heading: string;
    textContent: React.ReactNode;
    align?: XDirection;
}

export default function TimelineItem({
    id,
    heading,
    textContent,
    align = XDirection.Left,
}: IndexedTimelineItemProps) {
    let bulletAlignClasses = "-left-1.5";
    let listAlignClasses = "ml-4";
    if (align === XDirection.Right) {
        listAlignClasses = "text-right mr-4";
        bulletAlignClasses = "-right-1.5";
    }
    return (
        <li key={id} className={"mb-10 ml-4 mr-2 " + listAlignClasses}>
            {/* Bullet */}
            <div
                className={
                    "absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 " +
                    bulletAlignClasses
                }
            ></div>

            <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white underline-offset-8 decoration-orange-400">
                {heading}
            </h3>
            <div className="text-justify mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">                
                {textContent}                
            </div>
        </li>
    );
}
