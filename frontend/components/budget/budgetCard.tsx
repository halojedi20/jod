import {IBudgetCardProps} from "./budget";
import {Link} from "react-router";
const moment = require("moment-timezone");

class BudgetCard extends React.Component<IBudgetCardProps, {}> {

  constructor(props: IBudgetCardProps) {
    super(props);

  }

  public render() {
    return (
      <div className="card">
        <Link to={`/admin/budget/${this.props.budget.budgetId}`}>
          <div className="card-content card-common">
            <span className="card-title">{ this.props.budget.budgetName }</span><br />
            <span>Created { moment(this.props.budget.created, "YYYY-MM-DD'T'HH:mm:ssSSSZ").local().fromNow() }</span>
          </div>
        </Link>
        <div className="card-action">
          <a onClick={() => { this.props.del(); }}>Delete</a>
          <a onClick={() => { this.props.edit(); }}>Edit</a>
        </div>
      </div>
    );
  }

}

export {BudgetCard};