import { useMemo } from "react";

export default function usePogination(totalPages) {
    const res1 = useMemo(() => {
        let res = [];
        for (let i = 0; i < totalPages; i++) {
            res.push(i + 1);
        }
        return res;
    }, [totalPages]);

    return res1;
}
