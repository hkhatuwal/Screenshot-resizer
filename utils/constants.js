
export const baseUrl="http://localhost:3000"

export  const appStoreScreenshotsSizes = [
    {
        platform: "iPhone",
        sizes: [
            {
                device: "iPhone 12 Pro Max",
                height: 1284,
                width: 2778
            },
            {
                device: "iPhone 12, iPhone 12 Pro",
                height: 1170,
                width: 2532
            },
            {
                device: "iPhone 11, iPhone XR",
                height: 828,
                width: 1792
            },
            {
                device: "iPhone SE (2nd generation)",
                height: 750,
                width: 1334
            },
            {
                device: "iPhone 8",
                height: 750,
                width: 1334
            },
            {
                device: "iPhone 8 Plus",
                height: 1080,
                width: 1920
            },
            {
                device: "iPhone 7",
                height: 750,
                width: 1334
            },
            {
                device: "iPhone 7 Plus",
                height: 1080,
                width: 1920
            },
            {
                device: "iPhone 6s, iPhone 6",
                height: 750,
                width: 1334
            },
            {
                device: "iPhone 6s Plus, iPhone 6 Plus",
                height: 1080,
                width: 1920
            }
        ]
    },
    {
        platform: "iPad",
        sizes: [
            {
                device: "iPad Pro (12.9-inch) (5th generation)",
                height: 2048,
                width: 2732
            },
            {
                device: "iPad Pro (11-inch) (3rd generation)",
                height: 1668,
                width: 2388
            },
            {
                device: "iPad Air (4th generation)",
                height: 1640,
                width: 2360
            },
            {
                device: "iPad Pro (12.9-inch) (4th generation)",
                height: 2048,
                width: 2732
            },
            {
                device: "iPad Pro (11-inch) (2nd generation)",
                height: 1668,
                width: 2388
            },
            {
                device: "iPad Pro (12.9-inch) (3rd generation)",
                height: 2048,
                width: 2732
            },
            {
                device: "iPad Pro (10.5-inch), iPad Air (3rd generation)",
                height: 1668,
                width: 2224
            },
            {
                device: "iPad (8th generation), iPad (7th generation)",
                height: 1620,
                width: 2160
            },
            {
                device: "iPad mini (5th generation)",
                height: 1536,
                width: 2048
            }
        ]
    },
    {
        platform: "Mac",
        sizes: [
            {
                device: "Mac",
                height: 2160,
                width: 2880
            }
        ]
    }
];


export const  getFileName=(path)=>{
    return path.split("\\")[path.split("\\").length-1]
}