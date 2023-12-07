This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




//post login form
export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  await Login.create({ email, password });
  return NextResponse.json({ message: "Login Successfully" }, { status: 201 });
}

import React from 'react';
import Navbar from '@/app/navbar/page';

function Page() {
  return (
    <div className='flex'>
      <Navbar />
      <div className='flex items-center fixed top-20 left-0 right-0 h-full bg-slate-100 p-10 z-10'>
        <div className='flex-1 flex'>
          <form className="flex flex-col gap-3 border rounded-xl border-gray-800 p-8 max-w-md">
            <h1 className='bg-slate-700 text-white p-2 mb-3 rounded-t-xl'>Employee Details</h1>
            <div className="relative">
              <label htmlFor="fileInput" className="cursor-pointer bg-slate-700 text-white p-2 mb-3 rounded-md">Choose File</label>
              <input id="fileInput" type="file" className="hidden" />
            </div>
            <input placeholder='First Name' />
            <input placeholder='Last Name' />
            <input placeholder='Gender' />
            <input placeholder='Marital Status' />
            <input placeholder='Physical Challenged' />
            <input placeholder='Blood Group' />
            <input placeholder='Skills' />
            <input placeholder='Contact Number' />
            <input placeholder='Address' />
          </form>
        </div>
        <div className='flex-1'>
          <img src='https://s01.sgp1.cdn.digitaloceanspaces.com/article/122512-bqwmmaopyl-1561363484.jpg' alt='Background' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Page;
