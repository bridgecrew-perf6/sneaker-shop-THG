import { Button, Snackbar } from "@mui/material";
import React from "react";
import textApi from "../../api/testApi";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

class SneakerDetail extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      detailSneaker: [],
      imgChange: {},
      size: "",
      open: false,
    };
  }

  async componentDidMount() {
    const fetchData = await textApi.getDetail();
    this.setState({
      detailSneaker: [...fetchData.data],
      imgChange: { ...fetchData.data[0].moreDetailImg[0] },
    });
  }

  handleChangeImg(e: any) {
    this.setState({ imgChange: { ...e } });
  }

  handleChangeSize(e: any) {
    this.setState((prev: any) => ({
      size: prev.size === e ? "" : e,
    }));
  }

  handleClose() {
    this.setState({ open: false });
  }
  handleSubmit() {
    if (!this.state.size) {
      this.setState({ open: true });
    }
  }

  render() {
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose.bind(this)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    return (
      <div className="container mx-auto px-2 m-4 flex">
        <div className="imageDetail ">
          <img
            src={this.state.imgChange.img}
            alt="img"
            className="w-auto"
            style={{ borderRadius: "2%" }}
          />

          <div className="moreDetail flex flex-wrap mt-3 gap-x-3 ">
            {this.state.detailSneaker[0]?.moreDetailImg.map((img: any) => {
              return (
                <img
                  src={img.img}
                  alt="Checking"
                  className={`rounded-full w-20 hover:border border-neutral-400 hover:scale-125  ${
                    img.id === this.state.imgChange.id
                      ? "border border-neutral-400"
                      : ""
                  }`}
                  key={img.img}
                  onClick={this.handleChangeImg.bind(this, img)}
                />
              );
            })}
          </div>
        </div>

        <div className="m-5">
          <p className="text-4xl font-bold">
            {this.state.detailSneaker[0]?.name}
          </p>

          <p className="text-lg mt-5">${this.state.detailSneaker[0]?.price}</p>

          <hr className="mt-5 mb-5" />
          {/* begin:: color */}
          <h1 className="text-base font-bold">Color:</h1>
          <p className="text-base">{this.state.detailSneaker[0]?.color}</p>
          {/* end:: color */}

          {/* begin:: list size */}
          <div className="listSize flex flex-wrap w-96 gap-x-2 gap-y-2 mt-5">
            {this.state.detailSneaker[0]?.sizes.map((size: any) => {
              return (
                <Button
                  variant={
                    this.state.size === size.size ? "contained" : "outlined"
                  }
                  size="small"
                  key={size.size}
                  disabled={!size.outOfStock}
                  onClick={this.handleChangeSize.bind(this, size.size)}
                >
                  {size.size}
                </Button>
              );
            })}
          </div>
          {/* end:: list size */}
          <hr className="mt-5 mb-5" />
          <Button
            variant="contained"
            disableElevation
            className="w-full"
            onClick={this.handleSubmit.bind(this)}
          >
            Add to bag
          </Button>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose.bind(this)}
          message="Please select size"
          action={action}
        />
      </div>
    );
  }
}

export default SneakerDetail;
