import { Typography } from "@mui/material";
import Flow from "../../components/flow";
import LayoutWithHeader from "../../layouts";
import "./style.css";

export default function GraphPage() {
    return (
        <LayoutWithHeader>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                paddingBottom={"40px"}
            >
                MindMap
            </Typography>

            <div className="graph" style={{ height: "80vh" }}>
                <Flow />
            </div>
        </LayoutWithHeader>
    );
}
