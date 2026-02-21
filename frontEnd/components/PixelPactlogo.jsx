import { Box, Typography } from "@mui/material";

export default function PixelPactLogo({ size = "md" }) {
  const fontSize =
    size === "sm" ? "1.2rem" : size === "lg" ? "2.4rem" : "1.8rem";

  const boxSize =
    size === "sm" ? 6 : size === "lg" ? 10 : 8;

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Pixel Icon */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={0.5}>
        {[...Array(4)].map((_, i) => (
          <Box
            key={i}
            sx={{
              width: boxSize,
              height: boxSize,
              background: "linear-gradient(135deg, #646464, #25d1fc)",
              borderRadius: "2px",
            }}
          />
        ))}
      </Box>

      {/* Text */}
      <Typography
        fontSize={fontSize}
        fontWeight={800}
        letterSpacing={1}
      >
        <span style={{ color: "#001d6e" }}>Pixel</span>
        <span style={{ color: "#fdfdfd" }}>Pact</span>
      </Typography>
    </Box>
  );
}
