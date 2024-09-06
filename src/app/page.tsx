import Link from "next/link";

export default function Home() {
    return (
        <div className={"flex items-center justify-center w-full"}>
            <Link href={'/orders'} className={
                "text-black font-bold py-2 px-4 rounded underline text-xl"}>
                Ver Ordens
            </Link>
        </div>
    );
}
