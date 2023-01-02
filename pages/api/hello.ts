// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    name: "John Doe",
    items: [
      { id: 1, name: "item 1" },
      { id: 2, name: "item 2" },
      { id: 3, name: "item 3" },
    ],
  });
}
