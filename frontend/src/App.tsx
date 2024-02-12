import './App.css'
import {Input} from "@/components/ui/input.tsx";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {useState} from "react";
import axios from "axios";

function App() {

    const [firstNum, setFirstNum] = useState<string>("0")
    const [secondNum, setSecondNum] = useState<string>("0")
    const [sum, setSum] = useState<number>(0)

    const fetchAdditionResults = (num1: string, num2: string) => {
        axios.get(`/api/calculator/add?firstValue=${num1}&secondValue=${num2}`)
            .then(r => setSum(r.data + 3))
    }

    return (
        <div className={"flex flex-col gap-8 items-center"}>
            <div>
                <h1>World's Worst HTTP Calculator</h1>
                <p>(no seriously - all it does is add, and not correctly)</p>
            </div>
            <div className={"flex flex-row gap-2 items-center justify-center"}>
                <Input className={"w-1/6"} type={"number"} value={firstNum}
                       onChange={e => setFirstNum(e.target.value)}/>
                <p className={"font-extrabold"}> + </p>
                <Input className={"w-1/6"} type={"number"} value={secondNum}
                       onChange={e => setSecondNum(e.target.value)}/>
            </div>
            <AlertDialog>
                <AlertDialogTrigger
                    className={"outline"}
                    onClick={() => fetchAdditionResults(firstNum, secondNum)}>Add</AlertDialogTrigger>
                <AlertDialogContent className={"bg-black"}>
                    <AlertDialogHeader className={"flex flex-col items-center justify-center gap-4"}>
                        <AlertDialogTitle>I swear this is the right answer.</AlertDialogTitle>
                        <AlertDialogDescription className={"text-2xl font-extrabold"} data-testid={'answer'}>
                            {sum}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default App
