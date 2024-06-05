export enum DemandStatusFilter {
  ALL = 'All',
  DRAFT = 'Draft',
  PENDING_WITH_DM = 'Pending with Demand Manager',
  DM_HOLD = 'Demand Manager kept on Hold',
  PENDING_WITH_CCB = 'Pending with CCB',
  CCB_HOLD = 'CCB Member kept on Hold',
  ACCEPTED = 'Accepted',
  DM_REJECTED = 'Rejected By Demand Manager',
  CCB_REJECTED = 'Reject By CCB Member',
  DM_MODIFICATION = 'Modification Requested by DM',
  CCB_MODIFICATION = 'Modification Requested by CCB'
}
