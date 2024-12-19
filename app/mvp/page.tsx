import { DataTableDemo } from "@/components/table"
import { AppSidebar } from "@/components/sidebar"

export default function Page() {
    return (
        <div className="flex h-screen">
            <div className="w-[20%]">
                <AppSidebar />
            </div>

            <div className="w-[80%] flex items-center justify-center">
                <DataTableDemo />
            </div>
        </div>
    )
}