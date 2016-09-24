import {IBudgetActionProps} from "./budget";

class BudgetActions extends React.Component<IBudgetActionProps, {}> {

  constructor(props: IBudgetActionProps) {
    super(props);
  }

  public render() {
    return (
      <div
        className="fixed-action-btn tooltipped"
        data-position="left"
        data-delay="50"
        data-tooltip="New Budget Item"
        onClick={() => { $("#budgetItemModal").openModal(); }}
        style={{ bottom: "45px", right: "24px" }}
      >
        <a className="btn-floating btn-large" style={{ backgroundColor: "#7094DE" }} >
          <i className="fa fa-plus fa-3x" />
        </a>
        <ul>
          <li>
            <a className="btn-floating tooltipped"
               data-position="left"
               data-delay="50"
               data-tooltip="Tags"
            >
              <i className="fa fa-tags" />
            </a>
          </li>
          <li>
            <a className="btn-floating tooltipped"
               data-position="left"
               data-delay="50"
               data-tooltip="Budget"
            >
              <i className="fa fa-money" />
            </a>
          </li>
          <li>
            <a className="btn-floating tooltipped"
               data-position="left"
               data-delay="50"
               data-tooltip="Invoice"
            >
              <i className="fa fa-dollar" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating tooltipped"
              data-position="left"
              data-delay="50"
              data-tooltip="Filter"
            >
              <i className="fa fa-sort-alpha-asc" />
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

export {BudgetActions};