export interface CompanyDetail {
  CompanyProfileId: string;
  CompanyID: string;
  StartDate: Date;
  StopDate: Date;
  ActiveAsOf: Date;
  CompanyName: string;
  AllowBlindSignups: boolean;
  LoginRestrictedCompletely: boolean;
  LoginRestrictedToAdmins: boolean;
  IsDemoCompany: boolean;
  LoginRestrictedToSso: boolean;
  LoginRestrictedToSsoAndAdmin: boolean;
}
