// DepthOfFieldCalculator.tsx (Component Approach - Recommended)
import { useState } from "react";
import DoFImage from "./../assets/DoF.jpg";
import { Form, FormGroup, Col, Row, Button } from "react-bootstrap";

const DepthOfFieldCalculator = () => {
  const [focalLength, setFocalLength] = useState("");
  const [aperture, setAperture] = useState("");
  const [distance, setDistance] = useState("");
  const [sensorType, setSensorType] = useState("fullFrame"); // Default sensor type
  const [coc, setCoc] = useState(""); // Circle of Confusion (default for full-frame)
  const [nearFocus, setNearFocus] = useState("");
  const [farFocus, setFarFocus] = useState("");
  const [depthOfField, setDepthOfField] = useState("");

  const calculateCoc = (type: string) => {
    //function to calculate CoC
    let calculatedCoC;
    switch (type) {
      case "fullFrame":
        calculatedCoC = 0.029; // Standard for full-frame
        break;
      case "apsC": // Example APS-C size (adjust as needed)
        calculatedCoC = 0.019; // Example, adjust based on specific APS-C size
        break;
      case "microFourThirds":
        calculatedCoC = 0.015; // Example
        break;
      // Add more sensor types as needed
      default:
        calculatedCoC = 0.029; // Default
    }
    setCoc(calculatedCoC.toString()); // Update the CoC state
    return calculatedCoC; // Return the CoC value for the main calculation
  };

  const calculateDepthOfField = () => {
    const fl = parseFloat(focalLength);
    const ap = parseFloat(aperture);
    const dist = parseFloat(distance) * 1000; // Convert meters to mm
    const c = parseFloat(coc);

    if (
      isNaN(fl) ||
      isNaN(ap) ||
      isNaN(dist) ||
      isNaN(c) ||
      fl <= 0 ||
      ap <= 0 ||
      dist <= 0 ||
      c <= 0
    ) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const hyperfocalDistance = (fl * fl) / (ap * c);
    const nf = (hyperfocalDistance * dist) / (hyperfocalDistance + dist);
    const ff = (hyperfocalDistance * dist) / (hyperfocalDistance - dist);
    const dof = ff - nf;

    setNearFocus((nf / 1000).toFixed(2));
    setFarFocus((ff / 1000).toFixed(2));
    setDepthOfField((dof / 1000).toFixed(2));
  };

  return (
    <Form>
      <FormGroup as={Row} className="mb-3" controlId="sensorType">
        <Form.Label column sm={2}>
          Sensor Type
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="select"
            value={sensorType}
            onChange={(e) => {
              setSensorType(e.target.value);
              calculateCoc(e.target.value); // Calculate and update CoC
            }}
          >
            <option value="fullFrame">Full Frame</option>
            <option value="apsC">APS-C</option>
            <option value="microFourThirds">Micro Four Thirds</option>
            {/* Add more options */}
          </Form.Control>
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3" controlId="focalLength">
        <Form.Label column sm={2}>
          Focal Length (mm)
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            value={focalLength}
            onChange={(e) => setFocalLength(e.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3" controlId="aperture">
        <Form.Label column sm={2}>
          Aperture (f)
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            value={aperture}
            onChange={(e) => setAperture(e.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup as={Row} controlId="distance">
        <Form.Label column sm={2}>
          Distance to Subject (m)
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup as={Row} controlId="coc">
        <Form.Label column sm={2}>
          Circle of Confusion (mm)
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            value={coc}
            onChange={(e) => setCoc(e.target.value)}
            readOnly={sensorType !== "custom"} // Read-only unless "custom" is selected
          />
        </Col>
      </FormGroup>

      {/* Add a sensor type option for custom */}
      <Form.Control
        as="select"
        value={sensorType}
        onChange={(e) => {
          setSensorType(e.target.value);
          if (e.target.value !== "custom") {
            calculateCoc(e.target.value);
          }
        }}
      >
        {/* ... other options */}
        <option value="custom">Custom</option>
      </Form.Control>

      <Button variant="primary" onClick={calculateDepthOfField}>
        Calculate
      </Button>

      {/* Display Results */}
      {nearFocus && (
        <div className="mt-3">
          <p>Near Focus: {nearFocus} m</p>
          <p>Far Focus: {farFocus} m</p>
          <p>Depth of Field: {depthOfField} m</p>
        </div>
      )}

      <div>
        <div
          style={{
            position: "relative",
            width: "500px",
            height: "300px",
            overflow: "hidden",
          }}
        >
          {" "}
          {/* Adjust size */}
          <img
            src={DoFImage}
            alt="Landscape"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Replace with your image */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              color: "black",
              textAlign: "center",
            }}
          >
            <p>{depthOfField} m</p>
            <p style={{ marginTop: "10px" }}>{nearFocus} m</p>
            <p style={{ marginTop: "5px" }}>{farFocus} m</p>
          </div>
        </div>
        {/* ... rest of the form */}
      </div>
    </Form>
  );
};

export default DepthOfFieldCalculator;
