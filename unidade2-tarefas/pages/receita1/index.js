import { Home2 } from "./index2.js"
import { Home3 } from "./index3.js";

export default function Home() {
    return (
        <div>
            <h2>
                Viva Santana!
            </h2>
            {Home2()}
            {Home3()}
        </div>
    )
}