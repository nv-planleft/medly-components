export interface TableTheme {
    borderColor: string;
    scrollBarColor: string;
    shadowColor: string;
    row: {
        bgColor: {
            odd: string;
            even: string;
            disabled: string;
            selected: string;
        };
        selectedBorderColor: string;
    };
    titleRow: {
        bgColor: {
            default: string;
            expanded: string;
            selected: string;
        };
        countChip: {
            textColor: string;
            bgColor: {
                default: string;
                selected: string;
            };
        };
        secondaryContent: {
            textColor: string;
        };
        accordionIcon: {
            color: {
                default: string;
                expanded: string;
                selected: string;
            };
            bgColor: {
                hover: {
                    default: string;
                    expanded: string;
                    selected: string;
                };
                pressed: {
                    default: string;
                    expanded: string;
                    selected: string;
                };
            };
        };
    };
    accordionIcon: {
        color: string;
        bgColor: {
            hover: {
                default: string;
                selected: string;
            };
            pressed: {
                default: string;
                selected: string;
            };
        };
    };
    header: {
        bgColor: string;
        cell: {
            bgColor: {
                default: string;
                hovered: string;
                pressed: string;
                selected: {
                    default: string;
                    hovered: string;
                    pressed: string;
                };
            };
            textColor: {
                default: string;
                hovered: string;
                pressed: string;
                selected: {
                    default: string;
                    hovered: string;
                    pressed: string;
                };
            };
        };
    };
}
