// app/home/page.tsx
import { Header } from "@/components/persona/Header";
import { Aside } from "@/components/persona/Aside";

export default function HomePage() {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex flex-1">
                    <Aside />
                </div>
            </div>
            <div className="flex-1 flex">
                <div className="border border-gray-200/20 p-6 containeer-r-12 container-l-20"></div>
            </div>
        </div>
    );
}
