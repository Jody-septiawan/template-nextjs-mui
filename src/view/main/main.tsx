import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import * as React from "react";

export function Main() {
  const dep = React.useMemo(
    () => [
      { title: "NextJs", link: "https://nextjs.org/" },
      { title: "Material UI", link: "https://mui.com/" },
      { title: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
    ],
    []
  );

  return (
    <Stack
      border="50px solid #19376D"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="#0B2447"
    >
      <Stack direction="row" spacing={2}>
        <Typography color="#fff" variant="h2">
          Welcome
        </Typography>
        <Typography color="#fff" variant="h2">
          |
        </Typography>
        <Typography color="#C07F00" variant="h2">
          ꧋ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉
        </Typography>
      </Stack>
      <Typography color="#fff" variant="body1" marginTop={10}>
        This template using:{" "}
      </Typography>
      <Stack spacing={6} direction="row" marginTop={2}>
        {dep.map((item, idx) => (
          <Typography
            key={idx}
            onClick={() => {
              window.open(item.link, "_blank");
            }}
            sx={{
              color: "#fff",
              cursor: "pointer",
              transition: "1s",
              "&:hover": {
                color: "blue",
                fontSize: "50px",
              },
            }}
          >
            {item.title}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
