import Link from "next/link"
// import { DataTable } from "@/components/datatable"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center justify-center gap-4 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[1280px] flex-col items-center gap-2">
        <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Страница Таблицы с данными
        </h1>
      {/* <div className="container flex flex-col items-center gap-2">
        < DataTable/>
      </div>         */}
      </div>
    </section>
  )
}
