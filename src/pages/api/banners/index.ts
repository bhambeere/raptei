import type { NextApiRequest, NextApiResponse } from 'next';
import { BannerType } from '../../../features/home/types/BannerType';
import { HttpMethods } from '../../../shared/constants';

const banners = [
    {
        id: 1,
        label: 'Fashionable Dress',
        simpleText: '10% OFF YOUR FIRST ORDER',
        imgPath: '/static/carousel-1.jpg',
    } as BannerType,
    {
        id: 2,
        label: 'Reasonable Price',
        simpleText: '10% OFF YOUR FIRST ORDER',
        imgPath: '/static/carousel-2.jpg',
    } as BannerType,
] as BannerType[];

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {

    const { method } = req;

    switch (method) {
        case HttpMethods[HttpMethods.GET]:
            try {
                const products = banners;
                return res.status(200).json({
                    success: true,
                    data: products,
                });
            } catch (error) {
                return res.status(404).json({
                    success: false,
                });
            }
        default:
            res.setHeader("Allow", [
                HttpMethods[HttpMethods.GET],
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break
    }
}