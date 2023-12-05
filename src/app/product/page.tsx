import React from "react"
import AddProductModal from "@/app/components/AddProductModal";
import Search from "@/app/components/Search";
import List from "@/app/components/List";

export default function Home() {
    return (

        <main>
            <section className='container mx-auto relative '>
                <div className=' absolute right-0'>
                    <AddProductModal/>
                </div>
            </section>
            <section className='container mx-auto my-3 p-4'>
                <Search type='Product'/>
            </section>
            <section className='container mx-auto my-4'>
                <List type="Product"/>
            </section>
        </main>
    )
}
