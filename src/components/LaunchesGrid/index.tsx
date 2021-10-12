import { useEffect, useState, ReactElement } from "react";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowParams,
} from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_LAUNCHES_REQUEST,
  SHOW_SNACKBAR_NOTIFICATION,
} from "../../redux/constants";
import { getLaunchesState } from "../../redux/selectors";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { LoadingOverlay } from "..";

type LaunchesGridProps = { autoHeight?: boolean };

const useStyles = makeStyles(() => ({
  selectContainer: {
    display: "flex",
    justifyContent: "end",
    padding: "1rem 3rem 1rem 0",
  },
  formControl: {
    minWidth: 150,
  },
  root: {
    borderRadius: 10,
    height: 550,
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#FAFAFA",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
  },
  row: {
    cursor: "pointer",
  },
}));

export const LaunchesGrid = ({
  autoHeight = false,
}: LaunchesGridProps): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentPage, launches, totalLaunches, requested } =
    useSelector(getLaunchesState);
  const [launchOrder, setLaunchOrder] = useState<string>("desc");
  const pageSize = 10;

  useEffect(() => {
    getLaunches(1, launchOrder);
  }, [launchOrder]);

  const getLaunches = (page: number, order: string) => {
    dispatch({
      type: FETCH_LAUNCHES_REQUEST,
      payload: { page, order },
    });
  };

  const viewDocument = (params: GridRowParams) => {
    if (params.row.links.presskit) {
      window.open(params.row.links.presskit, "_blank");
    } else {
      dispatch({
        type: SHOW_SNACKBAR_NOTIFICATION,
        payload: { title: "Presskit document not available", severity: "info" },
      });
    }
  };

  const rows = [...launches];

  const columns: GridColDef[] = [
    {
      field: "flightNumber",
      headerName: "Flight Number",
      sortable: false,
      flex: 0.3,
      valueGetter: (params: GridValueGetterParams) => params.row.flight_number,
    },
    {
      field: "launchYear",
      headerName: "Launch Year",
      sortable: false,
      flex: 0.5,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.date_local).getFullYear(),
    },
    {
      field: "rocketName",
      headerName: "Rocket Name",
      sortable: false,
      flex: 0.5,
      valueGetter: (params: GridValueGetterParams) => params.row.name,
    },
    {
      field: "details",
      headerName: "Details",
      sortable: false,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.details || "Not Available",
    },
  ];

  return (
    <>
      <div data-testid="select-container" className={classes.selectContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel id="launch-order-label">Launch Order</InputLabel>
          <Select
            data-testid="select-order"
            labelId="launch-order-select-label"
            id="launch-order-select"
            value={launchOrder}
            label="Launch Order"
            onChange={(event) => setLaunchOrder(event.target.value as string)}
          >
            <MenuItem data-testid="select-order-desc" value={"desc"}>
              Newest first
            </MenuItem>
            <MenuItem data-testid="select-order-asc" value={"asc"}>
              Oldest first
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <DataGrid
        autoHeight={autoHeight}
        classes={{ root: classes.root, row: classes.row }}
        components={{ LoadingOverlay: LoadingOverlay }}
        disableSelectionOnClick
        disableColumnMenu
        loading={requested}
        columns={columns}
        rows={rows}
        getRowId={(row) => `${row.id}${row.date_local}`}
        rowsPerPageOptions={[10]}
        rowCount={totalLaunches}
        onRowClick={viewDocument}
        page={currentPage - 1}
        pageSize={pageSize}
        pagination
        paginationMode="server"
        onPageChange={(page) => getLaunches(page + 1, launchOrder)}
        showColumnRightBorder
        showCellRightBorder
      />
    </>
  );
};
