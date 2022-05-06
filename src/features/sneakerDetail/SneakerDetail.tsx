import { Button, Snackbar } from "@mui/material";
import React from "react";
import textApi from "../../api/testApi";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ImageDetail, ListSize } from "./components";

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

  handleChangeImg(imgDetail: { id: number; img: string }) {
    this.setState({ imgChange: { ...imgDetail } });
  }

  handleChangeSize(size: string) {
    this.setState((prev: any) => ({
      size: prev.size === size ? "" : size,
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
          <ImageDetail
            mainImage={this.state.imgChange}
            listImgDetail={this.state.detailSneaker[0]?.moreDetailImg}
            changeImg={this.handleChangeImg.bind(this)}
          />
        </div>

        <div className="m-5">
          {/* begin: name and price */}
          <p className="text-4xl font-bold">
            {this.state.detailSneaker[0]?.name}
          </p>
          <p className="text-lg mt-5">${this.state.detailSneaker[0]?.price}</p>
          {/* end: name and price */}

          <hr className="mt-5 mb-5" />

          {/* begin:: color */}
          <h1 className="text-base font-bold">Color:</h1>
          <p className="text-base">{this.state.detailSneaker[0]?.color}</p>
          {/* end:: color */}

          {/* begin:: list size */}
          <ListSize
            listSizes={this.state.detailSneaker[0]?.sizes}
            sizePicked={this.state.size}
            changeSize={this.handleChangeSize.bind(this)}
          />
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
