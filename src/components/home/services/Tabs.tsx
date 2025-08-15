"use client";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { home_services } from "@/domain/home";
import TabContent from "./TabContent";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<"CFD" | "CAD" | "FEA">("CFD");
  const [selectedItem, setSelectedItem] = useState<number | null>(1);

  const getContentDataForSelectedTab = () => {
    if (selectedTab === "CFD") {
      return home_services.CFD.card;
    } else if (selectedTab === "CAD") {
      return home_services.CAD.card;
    } else {
      return home_services.FEA.card;
    }
  };

  const selectedData = getContentDataForSelectedTab();

  const selectedContent = selectedData.find((item) => item.id === selectedItem);

  return (
    <Grid
      container
      flexDirection={"column"}
      gap={"16px"}
      size={12}
      // px={"108px"}
      pt={"0px"}
    >
      {/* Top Tab Buttons */}
      <Grid
        container
        flexDirection={"row"}
        gap={"10px"}
        size={12}
        justifyContent={{ xs: "center !important", sm: "start !important" }}
      >
        {home_services.services.map((tab) => (
          <Button
            key={tab}
            variant="outlined"
            onClick={() => setSelectedTab(tab as "CFD" | "CAD" | "FEA")}
            sx={{
              border: "1px solid #E0E0E0",
              bgcolor: selectedTab === tab ? "#007BFF" : "#F2F3F5",
              color: selectedTab === tab ? "white" : "black",
              fontWeight: selectedTab === tab ? 600 : 400,
              textTransform: "capitalize",
            }}
          >
            {tab}
          </Button>
        ))}
      </Grid>

      {/* Main Content */}
      <Grid
        container
        flexDirection={{ xs: "column", lg: "row" }}
        gap={"40px"}
        size={12}
        alignItems={"center"}
      >
        {/* Left Tab Content */}
        <Grid
          container
          flexDirection={"column"}
          gap={"10px"}
          size={{ xs: 12, sm: 8, lg: 4 }}
          justifyContent={"space-between"}
          alignItems={"center"}
          // border={"1px solid red"}
        >
          {selectedTab === "CAD" && (
            <>
              {home_services.CAD.list.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  variant="outlined"
                  startIcon={
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  }
                  sx={{
                    border: "1px solid #BDBCC7",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: selectedItem === item.id ? "white" : "black",
                    bgcolor: selectedItem === item.id ? "#007BFF" : "white",
                    textTransform: "capitalize",
                    height: "60px",
                    borderRadius: "8px",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": {
                      bgcolor: selectedItem === item.id ? "#007BFF" : "#f5f5f5",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </>
          )}
          {selectedTab === "CFD" && (
            <>
              {home_services.CFD.list.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  variant="outlined"
                  startIcon={
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  }
                  sx={{
                    border: "1px solid #BDBCC7",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: selectedItem === item.id ? "white" : "black",
                    bgcolor: selectedItem === item.id ? "#007BFF" : "white",
                    textTransform: "capitalize",
                    height: "60px",
                    borderRadius: "8px",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": {
                      bgcolor: selectedItem === item.id ? "#007BFF" : "#f5f5f5",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </>
          )}
          {selectedTab === "FEA" && (
            <>
              {home_services.FEA.list.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  variant="outlined"
                  startIcon={
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  }
                  sx={{
                    border: "1px solid #BDBCC7",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: selectedItem === item.id ? "white" : "black",
                    bgcolor: selectedItem === item.id ? "#007BFF" : "white",
                    textTransform: "capitalize",
                    height: "60px",
                    borderRadius: "8px",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": {
                      bgcolor: selectedItem === item.id ? "#007BFF" : "#f5f5f5",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </>
          )}
        </Grid>

        {/* Right Description + Image */}
        <Grid
          flex={1}
          container
          flexDirection={"row"}
          justifyContent={"center"}
        >
          {selectedContent && (
            <TabContent
              title={selectedContent.title}
              description={selectedContent.description}
              btnContent={selectedContent.buttonText}
              img={selectedContent.img}
              imgWidth={selectedContent.width}
              imgHeight={selectedContent.height}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tabs;
