import {
    LazyLoadImage,
    type LazyLoadImageProps,
    type Effect,
} from "react-lazy-load-image-component";

export type ImageRatio =
    | "4/3"
    | "3/4"
    | "6/4"
    | "4/6"
    | "16/9"
    | "9/16"
    | "21/9"
    | "9/21"
    | "1/1";

type IProps = LazyLoadImageProps;

interface Props extends IProps {
    ratio?: ImageRatio;
    disabledEffect?: boolean;
    effect?: Effect;
    src: string;
    alt?: string;
    style?: React.CSSProperties;
    placeholderSrc?: string;
    className?: string;
}

export function LazyImage({
    ratio,
    disabledEffect = false,
    effect = "blur",
    style,
    className,
    ...other
}: Props) {
    if (ratio) {
        return (
            <span
                className={className}
                style={{
                    lineHeight: 0,
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    paddingTop: getRatio(ratio),
                    width: other.width ?? 100,
                    // height: other.height || "100%",
                    ...style,
                }}
            >
                <LazyLoadImage
                    wrapperClassName="absolute top-0 left-0 right-0 bottom-0 leading-0 w-full h-full bg-cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    placeholderSrc="/assets/placeholder.svg"
                    {...other}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "/assets/image.svg";
                    }}
                />
            </span>
        );
    }

    return (
        <span
            className={className}
            style={{
                lineHeight: 0,
                display: "block",
                //  overflow: 'hidden',
                ...style,
            }}
        >
            <LazyLoadImage
                wrapperClassName="w-full h-full bg-cover"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                placeholderSrc="/assets/placeholder.svg"
                {...other}
            />
        </span>
    );
}

// ----------------------------------------------------------------------

function getRatio(ratio = "1/1") {
    return {
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%",
    }[ratio];
}
