import {IFullUser, IBudget, IBudgetItem, ITagGroup, ITag} from "../../common/models/models";

interface IHomeProps {
}
interface IHomeState {
}

interface IAdminProps {
}
interface IAdminState {
}

interface IAccountsProps {
}
interface IAccountsState {
  users?: Array<[IFullUser, Array<IBudget>]>;
}

interface IUsersProps {
}
interface IUsersState {
  users: Array<IFullUser>;
  user?: IFullUser;
}

interface IBudgetProps {
  params: any;
}
interface IBudgetFilters {
  tags?: Array<ITag>;
  searchText?: string;
  fromDateRange?: string;
  toDateRange?: string;
  fromTotalAmount?: number;
  toTotalAmount?: number;
}
interface IBudgetState {
  budget?: IBudget;
  budgetItems?: Array<IBudgetItem>;
  tagGroups?: Array<ITagGroup>;
  selectedHeader?: string;
  sortDirection?: string;
  filters?: IBudgetFilters;
}