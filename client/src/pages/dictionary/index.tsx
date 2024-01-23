import { Typography } from "@mui/material";
import ListCards from "../../components/term-list";
import LayoutWithHeader from "../../layouts";

export default function DictionaryPage() {
    return (
        <LayoutWithHeader>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                paddingBottom={"40px"}
            >
                Глоссарий терминов ВКР
            </Typography>
            <ListCards />
        </LayoutWithHeader>
    );
}
