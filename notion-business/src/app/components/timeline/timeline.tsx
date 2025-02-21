import { XDirection } from "../componentEnums";
import TimelineItem from "./timelineItem";

export interface TimelineProps {
    id: string;
    timelineItems: TimelineItemProps[];
    align?: XDirection;
}

export interface TimelineItemProps {
    heading: string;
    textContent: React.ReactNode;
}

export default function Timeline({ id, timelineItems, align = XDirection.Left }: TimelineProps) {
    let alignClasses = "border-l-2 ml-4";
    if (align === XDirection.Right) {
        alignClasses = "border-r-2 mr-4";
    }

    const items = timelineItems.map((item, index) => (
        <TimelineItem
            key={`${id}_${index}`}
            id={`${id}_${index}`}
            heading={item.heading}
            textContent={item.textContent}
            align={align}
        />
    ));
    return (
        <ol className={`relative border-orange-400 dark:border-gray-700 pt-10 ${alignClasses}`}>
            {items}
        </ol>
    );
}
