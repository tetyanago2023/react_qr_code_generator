import {useState} from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput("");
    };

    return (
        <div style={{ margin: "20px" }}>
            <h1>QR Code Generator</h1>
            <div style={{marginBottom: "15px"}}>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter text for QR code"
                />
                <button
                    disabled={!(input && input.trim() !== "")}
                    onClick={handleGenerateQrCode}
                >
                    Generate QR Code
                </button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
