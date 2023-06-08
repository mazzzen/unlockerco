import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  ConnectionLimitInt: any;
  Date: any;
  DateTime: any;
  Email: any;
  HTML: any;
  JSONObject: any;
  URL: any;
};

export type AboutInput = {
  content?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  locale: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
};

export type AboutTranslationInput = {
  content?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
};

export type AboutType = {
  __typename?: "AboutType";
  content?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreAboutTranslation>>>;
};

export enum ActiveFooter {
  Custom = "CUSTOM",
  Splitted = "SPLITTED",
}

export type AddCustomerAddressInput = {
  addressLine1: Scalars["String"];
  addressLine2?: InputMaybe<Scalars["String"]>;
  cityId?: InputMaybe<Scalars["String"]>;
  cityName?: InputMaybe<Scalars["String"]>;
  countryId?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  regionId?: InputMaybe<Scalars["String"]>;
  regionName?: InputMaybe<Scalars["String"]>;
  secondPhone?: InputMaybe<Scalars["String"]>;
  stateId?: InputMaybe<Scalars["String"]>;
};

export type Address = {
  __typename?: "Address";
  addressLine1: Scalars["String"];
  addressLine2?: Maybe<Scalars["String"]>;
  areaSnapshot?: Maybe<AreaSnapshot>;
  notes?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  secondPhone?: Maybe<Scalars["String"]>;
};

export type AddressAreaInput = {
  cityId?: InputMaybe<Scalars["String"]>;
  countryId?: InputMaybe<Scalars["String"]>;
  regionId?: InputMaybe<Scalars["String"]>;
  stateId?: InputMaybe<Scalars["String"]>;
};

export type AddressInput = {
  addressLine1: Scalars["String"];
  addressLine2?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<AddressAreaInput>;
  notes?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  secondPhone?: InputMaybe<Scalars["String"]>;
};

export type AnalyticalAccount = {
  __typename?: "AnalyticalAccount";
  id: Scalars["String"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
};

export type AnalyticalAccountInput = {
  id: Scalars["String"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
};

export type ArchiveProductsInput = {
  productIds: Array<InputMaybe<Scalars["ID"]>>;
  storeId: Scalars["ID"];
};

export type ArchiveProductsPayload = {
  __typename?: "ArchiveProductsPayload";
  products: Array<Maybe<Product>>;
};

export type AreaSnapshot = {
  __typename?: "AreaSnapshot";
  cityName?: Maybe<Scalars["String"]>;
  countryName?: Maybe<Scalars["String"]>;
  regionName?: Maybe<Scalars["String"]>;
  stateName?: Maybe<Scalars["String"]>;
};

export type AssignOptionsToProductInput = {
  id: Scalars["ID"];
  options: Array<InputMaybe<OptionsToAssignInput>>;
  storeId: Scalars["ID"];
};

export type Attribute = {
  attributeId: Scalars["ID"];
  valuesIds: Array<Scalars["ID"]>;
};

export type AttributeProductsCount = {
  __typename?: "AttributeProductsCount";
  attributeValue?: Maybe<ProductAttributeValue>;
  attributeValueId?: Maybe<Scalars["ID"]>;
  count?: Maybe<Scalars["Int"]>;
};

export type Banner = {
  __typename?: "Banner";
  bannerLink?: Maybe<Link>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
  mobileImage?: Maybe<Image>;
};

export type BaseItem = {
  discount?: Maybe<OrderItemDiscountDetails>;
  fulfilledItems?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  price?: Maybe<Money>;
  product: Product;
  productSnapshot?: Maybe<ProductSnapshot>;
  quantity: Scalars["Int"];
  sourceType: OrderItemSourceType;
  subtotal?: Maybe<Money>;
  title?: Maybe<Scalars["String"]>;
};

export type BillingDataInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type BulkCustomProductCategoryTranslationInput = {
  id: Array<Scalars["ID"]>;
  translations?: InputMaybe<
    Array<InputMaybe<CustomProductCategoryTranslationInput>>
  >;
};

export type BulkProductAttributeTranslationInput = {
  id: Scalars["ID"];
  translations?: InputMaybe<ProductAttributeTranslationInput>;
};

export type BulkProductAttributeValueTranslationInput = {
  id: Scalars["ID"];
  translations?: InputMaybe<ProductAttributeValueTranslationInput>;
};

export type BulkProductOptionTranslationInput = {
  id: Scalars["ID"];
  translations?: InputMaybe<ProductOptionTranslationInput>;
};

export type BulkProductOptionValueTranslationInput = {
  id: Scalars["ID"];
  translations?: InputMaybe<ProductOptionValueTranslationInput>;
};

export type BulkShippingRateTranslationInput = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<ShippingRateTranslationInput>>>;
};

export type BulkTranslatePreviewResult = {
  __typename?: "BulkTranslatePreviewResult";
  errors?: Maybe<Array<Maybe<UserRequestError>>>;
  resourcesToBeTranslated?: Maybe<Scalars["Int"]>;
  resourcesToBeUpdated?: Maybe<Scalars["Int"]>;
  sheetRecords?: Maybe<Scalars["Int"]>;
  warnings?: Maybe<Array<Maybe<UserRequestWarning>>>;
};

export type BulkUploadPreviewResult = {
  __typename?: "BulkUploadPreviewResult";
  errors?: Maybe<Array<Maybe<UserRequestError>>>;
  previewProduct?: Maybe<ProductPreview>;
  uploadStatistics?: Maybe<BulkUploadStatistics>;
};

export type BulkUploadStatistics = {
  __typename?: "BulkUploadStatistics";
  ImagesCount?: Maybe<Scalars["Int"]>;
  editedProductsCount?: Maybe<Scalars["Int"]>;
  editedVariantsCount?: Maybe<Scalars["Int"]>;
  newProductsCount?: Maybe<Scalars["Int"]>;
  newVariantsCount?: Maybe<Scalars["Int"]>;
  skuCount?: Maybe<Scalars["Int"]>;
};

export type Button = {
  __typename?: "Button";
  align?: Maybe<Scalars["String"]>;
  link?: Maybe<Link>;
  text?: Maybe<Scalars["String"]>;
};

export type ButtonInput = {
  align?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<LinkInput>;
  text?: InputMaybe<Scalars["String"]>;
};

export type ButtonTranslationItem = {
  __typename?: "ButtonTranslationItem";
  text?: Maybe<Scalars["String"]>;
};

export type ButtonTranslationItemInput = {
  text?: InputMaybe<Scalars["String"]>;
};

export type BuyXGetYDiscount = {
  __typename?: "BuyXGetYDiscount";
  customerBuys: CustomerBuys;
  customerGets: CustomerGets;
};

export type BuyXGetYDiscountInput = {
  customerBuys: CustomerBuysInput;
  customerGets: CustomerGetsInput;
};

export type CancelFulfillInput = {
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type Card = {
  __typename?: "Card";
  brand: Scalars["String"];
  expMonth: Scalars["String"];
  expYear: Scalars["String"];
  last4: Scalars["String"];
  name: Scalars["String"];
};

export type CardSourceInput = {
  cvc: Scalars["String"];
  expMonth: Scalars["Int"];
  expYear: Scalars["Int"];
  number: Scalars["String"];
};

export type CatalogFilters = {
  __typename?: "CatalogFilters";
  attributeValues?: Maybe<Array<Maybe<ProductAttributeValue>>>;
  collections?: Maybe<Array<Maybe<ProductCollection>>>;
  optionValues?: Maybe<Array<Maybe<ProductOptionValue>>>;
};

export type CatalogSearchFilters = {
  attributeValueSelectors?: InputMaybe<
    Array<InputMaybe<AttributeValueSelector>>
  >;
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  optionValueSelectors?: InputMaybe<Array<InputMaybe<OptionValueSelector>>>;
  priceRange?: InputMaybe<PriceRange>;
  search?: InputMaybe<Scalars["String"]>;
};

export type CatalogSearchMetaData = {
  __typename?: "CatalogSearchMetaData";
  attributesProductsDistribution?: Maybe<Array<Maybe<AttributeProductsCount>>>;
  collectionsProductsDistribution?: Maybe<
    Array<Maybe<CollectionProductsCount>>
  >;
  optionsProductsDistribution?: Maybe<Array<Maybe<OptionProductsCount>>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type CatalogSearchResults = {
  __typename?: "CatalogSearchResults";
  metaData?: Maybe<CatalogSearchMetaData>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type CatalogSectionBody =
  | SectionAttributesRowBody
  | SectionCollectionsRowBody
  | SectionProductsRowBody;

export enum CategoryType {
  Multiple = "MULTIPLE",
  Single = "SINGLE",
}

export type Checkout = {
  __typename?: "Checkout";
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  successMessage?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreCheckoutTranslation>>>;
};

export type CheckoutError = {
  __typename?: "CheckoutError";
  code: ErrorCode;
  params?: Maybe<Params>;
  resourceId?: Maybe<Scalars["String"]>;
};

export enum CheckoutFieldOptions {
  Inactive = "INACTIVE",
  Mandatory = "MANDATORY",
  Optional = "OPTIONAL",
}

export type CheckoutNote = {
  __typename?: "CheckoutNote";
  content: Scalars["String"];
  enabled: Scalars["Boolean"];
  placement: CheckoutNotePlacement;
};

export type CheckoutNoteInput = {
  content: Scalars["String"];
  enabled: Scalars["Boolean"];
  placement: CheckoutNotePlacement;
};

export enum CheckoutNotePlacement {
  AfterPaymentMethods = "AFTER_PAYMENT_METHODS",
  BeforePaymentMethods = "BEFORE_PAYMENT_METHODS",
}

export type CheckoutTranslationInput = {
  locale: Scalars["String"];
  successMessage?: InputMaybe<Scalars["String"]>;
};

export type City = {
  __typename?: "City";
  code?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  region?: Maybe<Region>;
  regions?: Maybe<RegionConnection>;
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type CityRegionArgs = {
  id: Scalars["ID"];
};

export type CityConnection = {
  __typename?: "CityConnection";
  edges?: Maybe<Array<Maybe<CityEdge>>>;
  nodes?: Maybe<Array<Maybe<City>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CityEdge = {
  __typename?: "CityEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<City>;
};

export type CityInput = {
  id: Scalars["ID"];
  regions?: InputMaybe<Array<InputMaybe<RegionInput>>>;
};

export type CityUnion = CityConnection | ZoneCityConnection;

export type ClaimDomainInput = {
  claimId: Scalars["ID"];
  contact: ContactInput;
  domainName: Scalars["String"];
  resourceId: Scalars["ID"];
};

export type ClientData = {
  __typename?: "ClientData";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CollectionAddProductsPayload = {
  __typename?: "CollectionAddProductsPayload";
  collection?: Maybe<ProductCollection>;
};

export type CollectionInput = {
  descriptionHtml?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<ImageInput>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]>;
  productsToAdd?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  seo?: InputMaybe<ProductCollectionSeoInput>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  translations?: InputMaybe<Array<InputMaybe<CollectionTranslationInput>>>;
};

export type CollectionProductsConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<CollectionProductsSortBy>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CollectionProductsCount = {
  __typename?: "CollectionProductsCount";
  collection?: Maybe<ProductCollection>;
  collectionId?: Maybe<Scalars["ID"]>;
  count?: Maybe<Scalars["Int"]>;
};

export enum CollectionProductsSortBy {
  CreatedAt = "createdAt",
  Id = "id",
  Manual = "manual",
  Price = "price",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type CollectionRemoveProductsPayload = {
  __typename?: "CollectionRemoveProductsPayload";
  collection?: Maybe<ProductCollection>;
};

export type CollectionTranslationInput = {
  descriptionHtml?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  seo?: InputMaybe<ProductCollectionSeoInput>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type Comment = {
  __typename?: "Comment";
  body?: Maybe<Scalars["String"]>;
};

export type ContactInfo = {
  __typename?: "ContactInfo";
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type ContactInfoInput = {
  email?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type ContactInput = {
  addressLine1: Scalars["String"];
  addressLine2: Scalars["String"];
  city: Scalars["String"];
  country: Scalars["String"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  organization: Scalars["String"];
  phone: Scalars["String"];
  postalCode: Scalars["String"];
  state: Scalars["String"];
};

export type Country = ICountry & {
  __typename?: "Country";
  code2: Scalars["String"];
  code3: Scalars["String"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  state?: Maybe<State>;
  states?: Maybe<StateConnection>;
  storeId?: Maybe<Scalars["ID"]>;
};

export type CountryStateArgs = {
  id: Scalars["ID"];
};

export type CountryConnection = {
  __typename?: "CountryConnection";
  edges?: Maybe<Array<Maybe<CountryEdge>>>;
  nodes?: Maybe<Array<Maybe<Country>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CountryEdge = {
  __typename?: "CountryEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<Country>;
};

export type Coupon = {
  __typename?: "Coupon";
  amount_off: Scalars["Float"];
  created?: Maybe<Scalars["Int"]>;
  currency?: Maybe<Scalars["String"]>;
  duration: Scalars["String"];
  duration_in_months?: Maybe<Scalars["Int"]>;
  max_redemptions?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  percent_off: Scalars["Float"];
  redeem_by?: Maybe<Scalars["Int"]>;
  times_redeemed?: Maybe<Scalars["Int"]>;
  valid: Scalars["Boolean"];
};

export type CreateCollectionPayload = {
  __typename?: "CreateCollectionPayload";
  collection?: Maybe<ProductCollection>;
};

export type CreateCustomBuildItemInput = {
  options?: InputMaybe<Array<InputMaybe<OrderSelectedOptionInput>>>;
  price: MoneyInput;
  quantity: Scalars["Int"];
  variantId: Scalars["ID"];
};

export type CreateCustomItemInput = {
  categories: Array<CustomItemCategoryInput>;
  discount?: InputMaybe<OrderItemDiscountDetailsInput>;
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
  sourceType: OrderItemSourceType;
  title: Scalars["String"];
};

export type CreateIntegrationInput = {
  about?: InputMaybe<Scalars["HTML"]>;
  authType: IntegrationAuthType;
  category?: InputMaybe<IntegrationCategory>;
  connectAccountInstructions?: InputMaybe<Scalars["HTML"]>;
  createAccountInstructions?: InputMaybe<Scalars["HTML"]>;
  description?: InputMaybe<Scalars["String"]>;
  features?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  icon?: InputMaybe<LogoInput>;
  isPaginated: Scalars["Boolean"];
  links?: InputMaybe<IntegrationLinksInput>;
  locale: Scalars["String"];
  logo?: InputMaybe<LogoInput>;
  name: Scalars["String"];
  provider: ProviderName;
  searchingMechanism?: InputMaybe<Array<SearchingMechanism>>;
  type?: InputMaybe<IntegrationType>;
};

export type CreateIntegrationPayload = {
  __typename?: "CreateIntegrationPayload";
  integration: Integration;
};

export type CreateItemInput = {
  customItem?: InputMaybe<CreateCustomItemInput>;
  simpleItem?: InputMaybe<CreateSimpleItemInput>;
};

export type CreateMediaInput = {
  alt?: InputMaybe<Scalars["String"]>;
  originalSource: Scalars["String"];
};

export type CreateMenuItemInput = {
  clientId?: InputMaybe<Scalars["ID"]>;
  icon?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<MenuLinkInput>;
  locale: Scalars["String"];
  parentId?: InputMaybe<Scalars["ID"]>;
  title: Scalars["String"];
  type: MenuItemType;
};

export type CreateOrderCustomerInput = {
  email?: InputMaybe<Scalars["String"]>;
  isSubscribedToNewsLetter: Scalars["Boolean"];
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
};

export type CreateOrderInput = {
  billingAddress: AddressInput;
  customer?: InputMaybe<CreateOrderCustomerInput>;
  customerId?: InputMaybe<Scalars["String"]>;
  items: Array<CreateItemInput>;
  locale?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  promoCode?: InputMaybe<Scalars["String"]>;
  refCode?: InputMaybe<Scalars["String"]>;
  shippingAddress: AddressInput;
  shippingRateId: Scalars["ID"];
  storeData?: InputMaybe<StoreDataInput>;
  storeId: Scalars["ID"];
};

export type CreateProductAttributeInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
  storeId: Scalars["ID"];
  type?: InputMaybe<ProductAttributeType>;
};

export type CreateProductAttributeValueInput = {
  attributeId: Scalars["ID"];
  image?: InputMaybe<CreateMediaInput>;
  locale: Scalars["String"];
  name: Scalars["String"];
  storeId: Scalars["ID"];
};

export type CreateProductMediaPayload = {
  __typename?: "CreateProductMediaPayload";
  product?: Maybe<Product>;
};

export type CreateProductPayload = {
  __typename?: "CreateProductPayload";
  product: Product;
};

export type CreateProductReviewInput = {
  content?: InputMaybe<Scalars["String"]>;
  headline: Scalars["String"];
  orderId?: InputMaybe<Scalars["ID"]>;
  productId: Scalars["ID"];
  rating: Scalars["Int"];
  showName: Scalars["Boolean"];
};

export type CreateSimpleItemInput = {
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  options?: InputMaybe<Array<InputMaybe<OrderSelectedOptionInput>>>;
  price: MoneyInput;
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
  sourceType: OrderItemSourceType;
  title: Scalars["String"];
  variantId: Scalars["ID"];
};

export type CreateStoreBannerSectionInput = {
  banners: Array<StoreBannerInput>;
};

export type CreateStoreEmbedSectionInput = {
  content: Scalars["String"];
};

export type CreateStoreInput = {
  currencyCode?: InputMaybe<Scalars["String"]>;
  industry?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  timezone?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type CreateStoreMenuInput = {
  items?: InputMaybe<Array<InputMaybe<CreateMenuItemInput>>>;
  title: Scalars["String"];
};

export type CreateStorePageCatalogSectionInput = {
  AttributesInput?: InputMaybe<CreateStorePageSectionAttributesInput>;
  CollectionsInput?: InputMaybe<CreateStorePageSectionCollectionsInput>;
  CommonInput: CreateStorePageSectionCatalogCommonInput;
  ProductsInput?: InputMaybe<CreateStorePageSectionProductsInput>;
};

export type CreateStorePageInput = {
  handle?: InputMaybe<Scalars["String"]>;
  locale: Locale;
  name: Scalars["String"];
  pageType?: InputMaybe<StorePageTypeEnum>;
  seo?: InputMaybe<SeoInput>;
  status?: InputMaybe<PageStatusEnum>;
};

export type CreateStorePageSectionAttributesInput = {
  attributeValuesIds: Array<Scalars["ID"]>;
};

export type CreateStorePageSectionCatalogCommonInput = {
  background?: InputMaybe<BackgroundInput>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  header?: InputMaybe<Scalars["String"]>;
  itemsPerRow?: InputMaybe<Scalars["Int"]>;
  locale: Scalars["String"];
  showItemName?: InputMaybe<Scalars["Boolean"]>;
  showSectionHeader?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
  type: SectionTypeEnum;
};

export type CreateStorePageSectionCollectionsInput = {
  collectionsIds: Array<Scalars["ID"]>;
};

export type CreateStorePageSectionCommonInput = {
  background?: InputMaybe<BackgroundInput>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  header?: InputMaybe<Scalars["String"]>;
  itemsPerRow?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  showSectionHeader?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
  type: SectionTypeEnum;
};

export type CreateStorePageSectionInput = {
  BannerInput?: InputMaybe<CreateStoreBannerSectionInput>;
  CommonInput: CreateStorePageSectionCommonInput;
  EmbedInput?: InputMaybe<CreateStoreEmbedSectionInput>;
  TextInput?: InputMaybe<CreateStoreTextSectionInput>;
  VideoInput?: InputMaybe<CreateStoreVideoSectionInput>;
};

export type CreateStorePageSectionProductsInput = {
  fromCollectionId: Scalars["ID"];
  productsDisplayNumber?: InputMaybe<Scalars["Int"]>;
};

export type CreateStorePayload = {
  __typename?: "CreateStorePayload";
  store: Store;
};

export type CreateStoreTextSectionInput = {
  content: Scalars["String"];
};

export type CreateStoreVideoSectionInput = {
  videosUrls: Array<Scalars["String"]>;
};

export type CreateTemplateInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Credentials =
  | IntegrationApiAuthCredentials
  | IntegrationBasicAuthCredentials
  | IntegrationNoAuthCredentials
  | IntegrationTokenAuthCredentials;

/** Currency codes. */
export enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = "AED",
  /** Afghan Afghani (AFN). */
  Afn = "AFN",
  /** Albanian Lek (ALL). */
  All = "ALL",
  /** Armenian Dram (AMD). */
  Amd = "AMD",
  /** Netherlands Antillean Guilder. */
  Ang = "ANG",
  /** Angolan Kwanza (AOA). */
  Aoa = "AOA",
  /** Argentine Pesos (ARS). */
  Ars = "ARS",
  /** Australian Dollars (AUD). */
  Aud = "AUD",
  /** Aruban Florin (AWG). */
  Awg = "AWG",
  /** Azerbaijani Manat (AZN). */
  Azn = "AZN",
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = "BAM",
  /** Barbadian Dollar (BBD). */
  Bbd = "BBD",
  /** Bangladesh Taka (BDT). */
  Bdt = "BDT",
  /** Bulgarian Lev (BGN). */
  Bgn = "BGN",
  /** Bahraini Dinar (BHD). */
  Bhd = "BHD",
  /** Burundian Franc (BIF). */
  Bif = "BIF",
  /** Bermudian Dollar (BMD). */
  Bmd = "BMD",
  /** Brunei Dollar (BND). */
  Bnd = "BND",
  /** Bolivian Boliviano (BOB). */
  Bob = "BOB",
  /** Brazilian Real (BRL). */
  Brl = "BRL",
  /** Bahamian Dollar (BSD). */
  Bsd = "BSD",
  /** Bhutanese Ngultrum (BTN). */
  Btn = "BTN",
  /** Botswana Pula (BWP). */
  Bwp = "BWP",
  /** Belize Dollar (BZD). */
  Bzd = "BZD",
  /** Canadian Dollars (CAD). */
  Cad = "CAD",
  /** Congolese franc (CDF). */
  Cdf = "CDF",
  /** Swiss Francs (CHF). */
  Chf = "CHF",
  /** Chilean Peso (CLP). */
  Clp = "CLP",
  /** Chinese Yuan Renminbi (CNY). */
  Cny = "CNY",
  /** Colombian Peso (COP). */
  Cop = "COP",
  /** Costa Rican Colones (CRC). */
  Crc = "CRC",
  /** Cape Verdean escudo (CVE). */
  Cve = "CVE",
  /** Czech Koruny (CZK). */
  Czk = "CZK",
  /** Djiboutian Franc (DJF). */
  Djf = "DJF",
  /** Danish Kroner (DKK). */
  Dkk = "DKK",
  /** Dominican Peso (DOP). */
  Dop = "DOP",
  /** Algerian Dinar (DZD). */
  Dzd = "DZD",
  /** Egyptian Pound (EGP). */
  Egp = "EGP",
  /** Ethiopian Birr (ETB). */
  Etb = "ETB",
  /** Euro (EUR). */
  Eur = "EUR",
  /** Fijian Dollars (FJD). */
  Fjd = "FJD",
  /** Falkland Islands Pounds (FKP). */
  Fkp = "FKP",
  /** United Kingdom Pounds (GBP). */
  Gbp = "GBP",
  /** Georgian Lari (GEL). */
  Gel = "GEL",
  /** Ghanaian Cedi (GHS). */
  Ghs = "GHS",
  /** Gibraltar Pounds (GIP). */
  Gip = "GIP",
  /** Gambian Dalasi (GMD). */
  Gmd = "GMD",
  /** Guinean Franc (GNF). */
  Gnf = "GNF",
  /** Guatemalan Quetzal (GTQ). */
  Gtq = "GTQ",
  /** Guyanese Dollar (GYD). */
  Gyd = "GYD",
  /** Hong Kong Dollars (HKD). */
  Hkd = "HKD",
  /** Honduran Lempira (HNL). */
  Hnl = "HNL",
  /** Croatian Kuna (HRK). */
  Hrk = "HRK",
  /** Haitian Gourde (HTG). */
  Htg = "HTG",
  /** Hungarian Forint (HUF). */
  Huf = "HUF",
  /** Indonesian Rupiah (IDR). */
  Idr = "IDR",
  /** Israeli New Shekel (NIS). */
  Ils = "ILS",
  /** Indian Rupees (INR). */
  Inr = "INR",
  /** Iraqi Dinar (IQD). */
  Iqd = "IQD",
  /** Iranian Rial (IRR). */
  Irr = "IRR",
  /** Icelandic Kronur (ISK). */
  Isk = "ISK",
  /** Jersey Pound. */
  Jep = "JEP",
  /** Jamaican Dollars (JMD). */
  Jmd = "JMD",
  /** Jordanian Dinar (JOD). */
  Jod = "JOD",
  /** Japanese Yen (JPY). */
  Jpy = "JPY",
  /** Kenyan Shilling (KES). */
  Kes = "KES",
  /** Kyrgyzstani Som (KGS). */
  Kgs = "KGS",
  /** Cambodian Riel. */
  Khr = "KHR",
  /** Comorian Franc (KMF). */
  Kmf = "KMF",
  /** South Korean Won (KRW). */
  Krw = "KRW",
  /** Kuwaiti Dinar (KWD). */
  Kwd = "KWD",
  /** Cayman Dollars (KYD). */
  Kyd = "KYD",
  /** Kazakhstani Tenge (KZT). */
  Kzt = "KZT",
  /** Laotian Kip (LAK). */
  Lak = "LAK",
  /** Lebanese Pounds (LBP). */
  Lbp = "LBP",
  /** Sri Lankan Rupees (LKR). */
  Lkr = "LKR",
  /** Liberian Dollar (LRD). */
  Lrd = "LRD",
  /** Lesotho Loti (LSL). */
  Lsl = "LSL",
  /** Lithuanian Litai (LTL). */
  Ltl = "LTL",
  /** Latvian Lati (LVL). */
  Lvl = "LVL",
  /** Libyan Dinar (LYD). */
  Lyd = "LYD",
  /** Moroccan Dirham. */
  Mad = "MAD",
  /** Moldovan Leu (MDL). */
  Mdl = "MDL",
  /** Malagasy Ariary (MGA). */
  Mga = "MGA",
  /** Macedonia Denar (MKD). */
  Mkd = "MKD",
  /** Burmese Kyat (MMK). */
  Mmk = "MMK",
  /** Mongolian Tugrik. */
  Mnt = "MNT",
  /** Macanese Pataca (MOP). */
  Mop = "MOP",
  /** Mauritanian Ougiya (MRO). */
  Mro = "MRO",
  /** Mauritanian Ouguiya (MRU). */
  Mru = "MRU",
  /** Mauritian Rupee (MUR). */
  Mur = "MUR",
  /** Maldivian Rufiyaa (MVR). */
  Mvr = "MVR",
  /** Malawian Kwacha (MWK). */
  Mwk = "MWK",
  /** Mexican Pesos (MXN). */
  Mxn = "MXN",
  /** Malaysian Ringgits (MYR). */
  Myr = "MYR",
  /** Mozambican Metical. */
  Mzn = "MZN",
  /** Namibian Dollar. */
  Nad = "NAD",
  /** Nigerian Naira (NGN). */
  Ngn = "NGN",
  /** Nicaraguan Córdoba (NIO). */
  Nio = "NIO",
  /** Norwegian Kroner (NOK). */
  Nok = "NOK",
  /** Nepalese Rupee (NPR). */
  Npr = "NPR",
  /** New Zealand Dollars (NZD). */
  Nzd = "NZD",
  /** Omani Rial (OMR). */
  Omr = "OMR",
  /** Panamian Balboa (PAB). */
  Pab = "PAB",
  /** Peruvian Nuevo Sol (PEN). */
  Pen = "PEN",
  /** Papua New Guinean Kina (PGK). */
  Pgk = "PGK",
  /** Philippine Peso (PHP). */
  Php = "PHP",
  /** Pakistani Rupee (PKR). */
  Pkr = "PKR",
  /** Polish Zlotych (PLN). */
  Pln = "PLN",
  /** Paraguayan Guarani (PYG). */
  Pyg = "PYG",
  /** Qatari Rial (QAR). */
  Qar = "QAR",
  /** Romanian Lei (RON). */
  Ron = "RON",
  /** Serbian dinar (RSD). */
  Rsd = "RSD",
  /** Russian Rubles (RUB). */
  Rub = "RUB",
  /** Rwandan Franc (RWF). */
  Rwf = "RWF",
  /** Saudi Riyal (SAR). */
  Sar = "SAR",
  /** Solomon Islands Dollar (SBD). */
  Sbd = "SBD",
  /** Seychellois Rupee (SCR). */
  Scr = "SCR",
  /** Sudanese Pound (SDG). */
  Sdg = "SDG",
  /** Swedish Kronor (SEK). */
  Sek = "SEK",
  /** Singapore Dollars (SGD). */
  Sgd = "SGD",
  /** Saint Helena Pounds (SHP). */
  Shp = "SHP",
  /** Sierra Leonean Leone (SLL). */
  Sll = "SLL",
  /** Surinamese Dollar (SRD). */
  Srd = "SRD",
  /** South Sudanese Pound (SSP). */
  Ssp = "SSP",
  /** Sao Tome And Principe Dobra (STD). */
  Std = "STD",
  /** Syrian Pound (SYP). */
  Syp = "SYP",
  /** Swazi Lilangeni (SZL). */
  Szl = "SZL",
  /** Thai baht (THB). */
  Thb = "THB",
  /** Tajikistani Somoni (TJS). */
  Tjs = "TJS",
  /** Turkmenistani Manat (TMT). */
  Tmt = "TMT",
  /** Tunisian Dinar (TND). */
  Tnd = "TND",
  /** Tongan Pa'anga (TOP). */
  Top = "TOP",
  /** Turkish Lira (TRY). */
  Try = "TRY",
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = "TTD",
  /** Taiwan Dollars (TWD). */
  Twd = "TWD",
  /** Tanzanian Shilling (TZS). */
  Tzs = "TZS",
  /** Ukrainian Hryvnia (UAH). */
  Uah = "UAH",
  /** Ugandan Shilling (UGX). */
  Ugx = "UGX",
  /** United States Dollars (USD). */
  Usd = "USD",
  /** Uruguayan Pesos (UYU). */
  Uyu = "UYU",
  /** Uzbekistan som (UZS). */
  Uzs = "UZS",
  /** Venezuelan Bolivares (VEF). */
  Vef = "VEF",
  /** Vietnamese đồng (VND). */
  Vnd = "VND",
  /** Vanuatu Vatu (VUV). */
  Vuv = "VUV",
  /** Samoan Tala (WST). */
  Wst = "WST",
  /** Central African CFA Franc (XAF). */
  Xaf = "XAF",
  /** East Caribbean Dollar (XCD). */
  Xcd = "XCD",
  /** West African CFA franc (XOF). */
  Xof = "XOF",
  /** CFP Franc (XPF). */
  Xpf = "XPF",
  /** Yemeni Rial (YER). */
  Yer = "YER",
  /** South African Rand (ZAR). */
  Zar = "ZAR",
  /** Zambian Kwacha (ZMW). */
  Zmw = "ZMW",
}

export type CurrencyRate = {
  __typename?: "CurrencyRate";
  currency: Scalars["String"];
  rate: Scalars["Float"];
};

export type CustomBuildCategory = {
  __typename?: "CustomBuildCategory";
  category: CustomProductCategory;
  selectedVariants: Array<SelectedVariant>;
};

export type CustomCheckoutSetting = {
  __typename?: "CustomCheckoutSetting";
  checkoutNote?: Maybe<CheckoutNote>;
  identifier?: Maybe<CustomerIdentifier>;
  name?: Maybe<NameInputOptions>;
  notesToSeller?: Maybe<CheckoutFieldOptions>;
  postalCode?: Maybe<CheckoutFieldOptions>;
  secondaryPhone?: Maybe<CheckoutFieldOptions>;
  storeId?: Maybe<Scalars["String"]>;
};

export type CustomCityInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  name: Scalars["String"];
};

export type CustomCountryInput = {
  code2: Scalars["String"];
  code3: Scalars["String"];
  id?: InputMaybe<Scalars["ID"]>;
  name: Scalars["String"];
};

export type CustomItem = BaseItem & {
  __typename?: "CustomItem";
  categories: Array<CustomBuildCategory>;
  discount?: Maybe<OrderItemDiscountDetails>;
  fulfilledItems?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  price?: Maybe<Money>;
  product: Product;
  productSnapshot?: Maybe<ProductSnapshot>;
  quantity: Scalars["Int"];
  sourceType: OrderItemSourceType;
  subtotal?: Maybe<Money>;
  title?: Maybe<Scalars["String"]>;
};

export type CustomItemCategoryInput = {
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  categoryType: CategoryType;
  selectedVariants: Array<CreateCustomBuildItemInput>;
};

export type CustomProductCategory = {
  __typename?: "CustomProductCategory";
  categoryType: CategoryType;
  id: Scalars["ID"];
  image?: Maybe<Image>;
  isRequired: Scalars["Boolean"];
  name: Scalars["String"];
  settings?: Maybe<CustomProductCategorySettings>;
  translations?: Maybe<Array<CustomProductCategoryTranslation>>;
  variants?: Maybe<Array<Maybe<CustomProductCategoryVariant>>>;
};

export type CustomProductCategoryInput = {
  categoryType: CategoryType;
  id?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<ImageInput>;
  isRequired: Scalars["Boolean"];
  name: Scalars["String"];
  settings: CustomProductCategorySettingsInput;
  translations?: InputMaybe<Array<CustomProductCategoryTranslationInput>>;
  variants: Array<InputMaybe<CustomProductCategoryVariantInput>>;
};

export type CustomProductCategorySettings = {
  __typename?: "CustomProductCategorySettings";
  maxQuantity?: Maybe<Scalars["Int"]>;
  maxSelect?: Maybe<Scalars["Int"]>;
};

export type CustomProductCategorySettingsInput = {
  maxQuantity?: InputMaybe<Scalars["Int"]>;
  maxSelect?: InputMaybe<Scalars["Int"]>;
};

export type CustomProductCategoryTranslation = {
  __typename?: "CustomProductCategoryTranslation";
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type CustomProductCategoryTranslationInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type CustomProductCategoryVariant = {
  __typename?: "CustomProductCategoryVariant";
  isRecommended?: Maybe<Scalars["Boolean"]>;
  preselected?: Maybe<Scalars["Boolean"]>;
  variant?: Maybe<ProductVariant>;
};

export type CustomProductCategoryVariantInput = {
  isRecommended?: InputMaybe<Scalars["Boolean"]>;
  preselected: Scalars["Boolean"];
  variantId: Scalars["String"];
};

export type CustomProductDiscount = {
  __typename?: "CustomProductDiscount";
  fixed?: Maybe<Money>;
  percent?: Maybe<Scalars["Float"]>;
};

export type CustomProductDiscountInput = {
  fixed?: InputMaybe<MoneyInput>;
  percent?: InputMaybe<Scalars["Float"]>;
};

export type CustomProductSnapshotCategory = {
  __typename?: "CustomProductSnapshotCategory";
  categoryType: CustomProductSnapshotCategoryType;
  id: Scalars["ID"];
  image?: Maybe<Image>;
  isRequired: Scalars["Boolean"];
  name: Scalars["String"];
  settings?: Maybe<CustomProductSnapshotCategorySettings>;
  variants?: Maybe<Array<Maybe<CustomProductSnapshotCategoryVariant>>>;
};

export type CustomProductSnapshotCategorySettings = {
  __typename?: "CustomProductSnapshotCategorySettings";
  maxQuantity?: Maybe<Scalars["Int"]>;
  maxSelect?: Maybe<Scalars["Int"]>;
};

export enum CustomProductSnapshotCategoryType {
  Multiple = "MULTIPLE",
  Single = "SINGLE",
}

export type CustomProductSnapshotCategoryVariant = {
  __typename?: "CustomProductSnapshotCategoryVariant";
  isRecommended?: Maybe<Scalars["Boolean"]>;
  preselected?: Maybe<Scalars["Boolean"]>;
  variantId?: Maybe<Scalars["ID"]>;
};

export type CustomProductSnapshotDiscount = {
  __typename?: "CustomProductSnapshotDiscount";
  fixed?: Maybe<Money>;
  percent?: Maybe<Scalars["Float"]>;
};

export type CustomRegionInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  name: Scalars["String"];
};

export type CustomStateInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  name: Scalars["String"];
};

export type Customer = {
  __typename?: "Customer";
  email?: Maybe<Scalars["String"]>;
  isSubscribedToNewsLetter?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type CustomerAddress = {
  __typename?: "CustomerAddress";
  addressLine1: Scalars["String"];
  addressLine2?: Maybe<Scalars["String"]>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  notes?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  region?: Maybe<Region>;
  secondPhone?: Maybe<Scalars["String"]>;
  state?: Maybe<State>;
};

export type CustomerBuys = {
  __typename?: "CustomerBuys";
  items?: Maybe<CustomerBuysItems>;
  itemsType?: Maybe<DiscountItemsType>;
  quantity?: Maybe<Scalars["Int"]>;
  value?: Maybe<Money>;
};

export type CustomerBuysInput = {
  items?: InputMaybe<CustomerBuysItemsInput>;
  itemsType?: InputMaybe<DiscountItemsType>;
  quantity?: InputMaybe<Scalars["Int"]>;
  value?: InputMaybe<MoneyInput>;
};

export type CustomerBuysItems = {
  __typename?: "CustomerBuysItems";
  collectionIds?: Maybe<Array<Scalars["ID"]>>;
  collections?: Maybe<Array<ProductCollection>>;
  productVariantIds?: Maybe<Array<Scalars["ID"]>>;
  productVariants?: Maybe<Array<ProductVariant>>;
};

export type CustomerBuysItemsInput = {
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  productVariants?: InputMaybe<Array<Scalars["ID"]>>;
};

export type CustomerCountryInput = {
  code2: Scalars["String"];
  name: Scalars["String"];
};

export type CustomerGets = {
  __typename?: "CustomerGets";
  items: CustomerGetsItems;
  itemsType: DiscountItemsType;
  percentage: Scalars["Float"];
  quantity?: Maybe<Scalars["Int"]>;
};

export type CustomerGetsInput = {
  items: CustomerGetsItemsInput;
  itemsType: DiscountItemsType;
  percentage: Scalars["Float"];
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type CustomerGetsItems = {
  __typename?: "CustomerGetsItems";
  collectionIds?: Maybe<Array<Scalars["ID"]>>;
  collections?: Maybe<Array<ProductCollection>>;
  productVariantIds?: Maybe<Array<Scalars["ID"]>>;
  productVariants?: Maybe<Array<ProductVariant>>;
};

export type CustomerGetsItemsInput = {
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  productVariants?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum CustomerIdentifier {
  Email = "EMAIL",
  EmailAndPhone = "EMAIL_AND_PHONE",
  Phone = "PHONE",
}

export type CustomerSchemaFilterInput = {
  hasOrders?: InputMaybe<Scalars["Boolean"]>;
  searchQuery?: InputMaybe<Scalars["String"]>;
};

export enum CustomerSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type CustomerState = {
  __typename?: "CustomerState";
  code: Scalars["String"];
  name: Scalars["String"];
};

export type CustomerStateInput = {
  code: Scalars["String"];
  name: Scalars["String"];
};

export type CustomerUser = Node & {
  __typename?: "CustomerUser";
  addresses?: Maybe<Array<CustomerAddress>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isGuest?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  orders?: Maybe<OrderConnection>;
  phone?: Maybe<Scalars["String"]>;
  reviews: Array<ProductReview>;
  storeId?: Maybe<Scalars["String"]>;
  totalSpending?: Maybe<Money>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CustomerUserOrdersArgs = {
  connection?: InputMaybe<OrdersConnectionInput>;
};

export type CustomerUserReviewsArgs = {
  connection?: InputMaybe<ReviewsConnectionInput>;
};

export type CustomerUserConnection = {
  __typename?: "CustomerUserConnection";
  nodes?: Maybe<Array<Maybe<CustomerUser>>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type CustomersConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset: Scalars["Int"];
  sortBy?: InputMaybe<CustomerSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CustomizeCheckoutInput = {
  checkoutNote?: InputMaybe<CheckoutNoteInput>;
  identifier?: InputMaybe<CustomerIdentifier>;
  name?: InputMaybe<NameInputOptions>;
  notesToSeller?: InputMaybe<CheckoutFieldOptions>;
  postalCode?: InputMaybe<CheckoutFieldOptions>;
  secondaryPhone?: InputMaybe<CheckoutFieldOptions>;
  storeId?: InputMaybe<Scalars["String"]>;
};

export type DateInput = {
  from?: InputMaybe<Scalars["DateTime"]>;
  to?: InputMaybe<Scalars["DateTime"]>;
};

export type Deletable = {
  isDeleted: Scalars["Boolean"];
};

export type DeleteProductMediaPayload = {
  __typename?: "DeleteProductMediaPayload";
  product?: Maybe<Product>;
};

export type DeleteProductPayload = {
  __typename?: "DeleteProductPayload";
  deleted?: Maybe<Scalars["Boolean"]>;
};

export type Discount = {
  __typename?: "Discount";
  BuyXGetYDiscount?: Maybe<BuyXGetYDiscount>;
  amount?: Maybe<Money>;
  appliedOn?: Maybe<DiscountAppliedOnType>;
  createdAt?: Maybe<Scalars["Date"]>;
  customerBuys?: Maybe<CustomerBuys>;
  id: Scalars["ID"];
  percentage?: Maybe<Scalars["Float"]>;
  status?: Maybe<DiscountStatus>;
  title?: Maybe<Scalars["String"]>;
};

export enum DiscountAppliedOnType {
  All = "ALL",
  BuyXGetY = "BUY_X_GET_Y",
  Shipping = "SHIPPING",
}

export type DiscountInput = {
  BuyXGetYDiscount?: InputMaybe<BuyXGetYDiscountInput>;
  amount?: InputMaybe<MoneyInput>;
  appliedOn?: InputMaybe<DiscountAppliedOnType>;
  customerBuys?: InputMaybe<CustomerBuysInput>;
  percentage?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<DiscountStatus>;
  title?: InputMaybe<Scalars["String"]>;
};

export enum DiscountItemsType {
  Collections = "COLLECTIONS",
  Products = "PRODUCTS",
}

export type DiscountSnapshot = {
  __typename?: "DiscountSnapshot";
  BuyXGetYDiscount?: Maybe<BuyXGetYDiscount>;
  amount?: Maybe<Money>;
  appliedOn?: Maybe<DiscountAppliedOnType>;
  id?: Maybe<Scalars["String"]>;
  percentage?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<DiscountType>;
};

export enum DiscountSource {
  BuyXGetY = "BUY_X_GET_Y",
  CustomDiscount = "CUSTOM_DISCOUNT",
}

export enum DiscountStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Expired = "EXPIRED",
}

export enum DiscountType {
  Automatic = "AUTOMATIC",
  Manual = "MANUAL",
}

export enum DisplayAsEnum {
  Grid = "Grid",
  Slider = "Slider",
}

export type DnsRecord = {
  __typename?: "DnsRecord";
  host?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  ttl?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type Domain = {
  __typename?: "Domain";
  createdAt?: Maybe<Scalars["String"]>;
  domainName: Scalars["String"];
  id: Scalars["ID"];
  store?: Maybe<Store>;
  type?: Maybe<DomainType>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type DomainClaim = {
  __typename?: "DomainClaim";
  createdAt: Scalars["String"];
  id: Scalars["ID"];
};

export type DomainInput = {
  domainName: Scalars["String"];
  storeId: Scalars["ID"];
  type?: InputMaybe<DomainType>;
};

export type DomainSearchResult = {
  __typename?: "DomainSearchResult";
  available: Scalars["Boolean"];
  domainName: Scalars["String"];
  premium: Scalars["Boolean"];
  price?: Maybe<Scalars["Float"]>;
};

export type DropshippingCategory = {
  __typename?: "DropshippingCategory";
  meta?: Maybe<DropshippingCategoryMeta>;
  name: Scalars["String"];
};

export type DropshippingCategoryMeta = {
  __typename?: "DropshippingCategoryMeta";
  text?: Maybe<Scalars["String"]>;
};

export type DropshippingProduct = {
  __typename?: "DropshippingProduct";
  category?: Maybe<Scalars["String"]>;
  cost?: Maybe<Money>;
  description: Scalars["String"];
  id: Scalars["ID"];
  images?: Maybe<Array<Scalars["String"]>>;
  meta?: Maybe<DropshippingProductMeta>;
  name: Scalars["String"];
  price: Money;
  profit?: Maybe<Money>;
  variationsCount?: Maybe<Scalars["Int"]>;
};

export type DropshippingProductConnection = {
  __typename?: "DropshippingProductConnection";
  nodes: Array<DropshippingProduct>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DropshippingProductConnectionInput = {
  itemsPerPage?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  pageNumber?: InputMaybe<Scalars["Int"]>;
};

export type DropshippingProductMeta = {
  __typename?: "DropshippingProductMeta";
  howToUse?: Maybe<Scalars["String"]>;
  isExpired?: Maybe<Scalars["Boolean"]>;
  productAvailability?: Maybe<Scalars["String"]>;
  specifications?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
};

export type EmailRecord = {
  __typename?: "EmailRecord";
  address?: Maybe<Scalars["Email"]>;
  verified?: Maybe<Scalars["Boolean"]>;
};

export type EmailRecordInput = {
  address?: InputMaybe<Scalars["Email"]>;
  verified?: InputMaybe<Scalars["Boolean"]>;
};

export type EnableProductReviewsInput = {
  enableGuestReviews: Scalars["Boolean"];
  showCustomerAvatar: Scalars["Boolean"];
  showOverAllRating: Scalars["Boolean"];
  showReviewDate: Scalars["Boolean"];
  showReviewsCount: Scalars["Boolean"];
  showStars: Scalars["Boolean"];
  starsColor: Scalars["String"];
  storeId: Scalars["String"];
};

export enum ErrorCode {
  ActionLimitReached = "ACTION_LIMIT_REACHED",
  BulkUploadOverwriteMustBeEnabled = "BULK_UPLOAD_OVERWRITE_MUST_BE_ENABLED",
  CheckoutTimeout = "CHECKOUT_TIMEOUT",
  CollectionNotFound = "COLLECTION_NOT_FOUND",
  CurrencyChanged = "CURRENCY_CHANGED",
  CustomerCreationError = "CUSTOMER_CREATION_ERROR",
  DocumentSizeTooLarge = "DOCUMENT_SIZE_TOO_LARGE",
  DuplicateSku = "DUPLICATE_SKU",
  DuplicateVariants = "DUPLICATE_VARIANTS",
  ExtraHeaders = "EXTRA_HEADERS",
  InconsistentVariation = "INCONSISTENT_VARIATION",
  InsufficientQuantity = "INSUFFICIENT_QUANTITY",
  IntegratedItemsQuantityValidationError = "INTEGRATED_ITEMS_QUANTITY_VALIDATION_ERROR",
  InvalidCustomerCheckoutData = "INVALID_CUSTOMER_CHECKOUT_DATA",
  InvalidFieldValue = "INVALID_FIELD_VALUE",
  InvalidFileExtension = "INVALID_FILE_EXTENSION",
  InvalidHandle = "INVALID_HANDLE",
  InvalidRecord = "INVALID_RECORD",
  InvalidSlug = "INVALID_SLUG",
  InvalidTranslationLocale = "INVALID_TRANSLATION_LOCALE",
  MaxQuantityExceeded = "MAX_QUANTITY_EXCEEDED",
  MinQuantityNotMet = "MIN_QUANTITY_NOT_MET",
  MissingHeaders = "MISSING_HEADERS",
  NoPaymentMethods = "NO_PAYMENT_METHODS",
  OptionMustHaveValidValue = "OPTION_MUST_HAVE_VALID_VALUE",
  OrderCanceledByCustomer = "ORDER_CANCELED_BY_CUSTOMER",
  OrderRestorationFailed = "ORDER_RESTORATION_FAILED",
  PaymentError = "PAYMENT_ERROR",
  PlanLimitExceeded = "PLAN_LIMIT_EXCEEDED",
  PriceCalculationError = "PRICE_CALCULATION_ERROR",
  PriceChanged = "PRICE_CHANGED",
  ProductNotActive = "PRODUCT_NOT_ACTIVE",
  ProductNotAvailable = "PRODUCT_NOT_AVAILABLE",
  ProductNotFound = "PRODUCT_NOT_FOUND",
  RecordNotFound = "RECORD_NOT_FOUND",
  ShippingError = "SHIPPING_ERROR",
  UnexpectedError = "UNEXPECTED_ERROR",
  UnverifiedJwtToken = "UNVERIFIED_JWT_TOKEN",
  VariantNotAvailable = "VARIANT_NOT_AVAILABLE",
}

export type ExportOptions = {
  attributes: Scalars["Boolean"];
  collections: Scalars["Boolean"];
  options: Scalars["Boolean"];
  products: Scalars["Boolean"];
};

export type ExportOrdersInput = {
  email: Scalars["String"];
  filter?: InputMaybe<OrdersFilterInput>;
  storeId: Scalars["ID"];
  storeName: Scalars["String"];
  timeDifference: Scalars["String"];
};

export type ExportOrdersPayload = {
  __typename?: "ExportOrdersPayload";
  message: Scalars["String"];
  statusCode: Scalars["Int"];
};

export type ExportProductsInput = {
  email: Scalars["String"];
  filter?: InputMaybe<ProductsFilterInput>;
  locale: Scalars["String"];
  storeDomain: Scalars["String"];
  storeId: Scalars["ID"];
  storeName: Scalars["String"];
  timeDifference: Scalars["String"];
};

export type ExportProductsPayload = {
  __typename?: "ExportProductsPayload";
  message: Scalars["String"];
  statusCode: Scalars["Int"];
};

export type FacebookSalesChannelSettings = {
  __typename?: "FacebookSalesChannelSettings";
  password: Scalars["String"];
  provider: ProviderName;
  title: Scalars["String"];
  username: Scalars["String"];
};

export enum FatooraConfigurationAction {
  Activate = "Activate",
  RenewCertificate = "RenewCertificate",
  RevokeCertificate = "RevokeCertificate",
  Save = "Save",
}

export type FatooraConfigurationInput = {
  CRNid?: InputMaybe<Scalars["String"]>;
  VATnumber: Scalars["String"];
  action: FatooraConfigurationAction;
  branchName: Scalars["String"];
  buildingNumber: Scalars["String"];
  cityName: Scalars["String"];
  citySubdivisionName: Scalars["String"];
  country: Scalars["String"];
  domainName: Scalars["String"];
  industry: Scalars["String"];
  installationId: Scalars["ID"];
  otp?: InputMaybe<Scalars["String"]>;
  plotIdentification: Scalars["String"];
  postalZone: Scalars["String"];
  storeId: Scalars["ID"];
  streetName: Scalars["String"];
  taxPayerProvidedId: Scalars["String"];
  taxpayerName: Scalars["String"];
};

export type FatooraSettings = {
  __typename?: "FatooraSettings";
  CRNid?: Maybe<Scalars["String"]>;
  VATnumber: Scalars["String"];
  branchName: Scalars["String"];
  buildingNumber: Scalars["String"];
  cityName: Scalars["String"];
  citySubdivisionName: Scalars["String"];
  domainName: Scalars["String"];
  isActivated: Scalars["Boolean"];
  plotIdentification: Scalars["String"];
  postalZone: Scalars["String"];
  provider: ProviderName;
  streetName: Scalars["String"];
  taxPayerProvidedId: Scalars["String"];
  taxpayerName: Scalars["String"];
};

export type Feature = {
  __typename?: "Feature";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type FilterInput = {
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<IntegrationType>;
};

export type FontInput = {
  category?: InputMaybe<Scalars["String"]>;
  fontFamily?: InputMaybe<Scalars["String"]>;
  isItalic?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<FontTypeEnum>;
  typeFace?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["String"]>;
};

export type FontType = {
  __typename?: "FontType";
  category?: Maybe<Scalars["String"]>;
  fontFamily?: Maybe<Scalars["String"]>;
  isItalic?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  translations?: Maybe<Array<Maybe<FontTypeTranslation>>>;
  type?: Maybe<FontTypeEnum>;
  typeFace?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["String"]>;
};

export enum FontTypeEnum {
  Body = "Body",
  Headers = "Headers",
}

export type FontTypeTranslation = {
  __typename?: "FontTypeTranslation";
  category?: Maybe<Scalars["String"]>;
  fontFamily?: Maybe<Scalars["String"]>;
  isItalic?: Maybe<Scalars["Boolean"]>;
  locale: Scalars["String"];
  type?: Maybe<FontTypeEnum>;
  typeFace?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["String"]>;
};

export type FooterInput = {
  activeFooter: ActiveFooter;
  customPart?: InputMaybe<Scalars["String"]>;
  endPart?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  startPart?: InputMaybe<Scalars["String"]>;
};

export type FooterTranslationInput = {
  customPart?: InputMaybe<Scalars["String"]>;
  endPart?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  startPart?: InputMaybe<Scalars["String"]>;
};

export type FooterType = {
  __typename?: "FooterType";
  activeFooter?: Maybe<ActiveFooter>;
  customPart?: Maybe<Scalars["String"]>;
  endPart?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  startPart?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreFooterTranslation>>>;
};

export type FulfillInput = {
  items: Array<InputMaybe<FulfillItemsInput>>;
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type FulfillItemsInput = {
  fulfilledItems: Scalars["Int"];
  id: Scalars["ID"];
};

export enum FulfillStatusEnum {
  Fulfilled = "FULFILLED",
  PartiallyFulfilled = "PARTIALLY_FULFILLED",
  Unfulfilled = "UNFULFILLED",
}

export type GenerateStoreLegalPageInput = {
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type GenerateStoreStaticPageInput = {
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type GoogleMerchantSalesChannelSettings = {
  __typename?: "GoogleMerchantSalesChannelSettings";
  password: Scalars["String"];
  provider: ProviderName;
  title: Scalars["String"];
  username: Scalars["String"];
};

export enum HandleType {
  Attribute = "attribute",
  AttributesValue = "attributesValue",
  Collection = "collection",
  Option = "option",
  OptionsValue = "optionsValue",
  Product = "product",
}

export type ICity = {
  code?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  regions?: Maybe<RegionUnion>;
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type ICountry = {
  code2: Scalars["String"];
  code3: Scalars["String"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type IRegion = {
  cityId: Scalars["ID"];
  code?: Maybe<Scalars["String"]>;
  countryId: Scalars["ID"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type IState = {
  cities?: Maybe<CityUnion>;
  code?: Maybe<Scalars["String"]>;
  countryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  numOfCities?: Maybe<Scalars["Int"]>;
};

export type Image = Node & {
  __typename?: "Image";
  altText?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  originalSrc?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  status?: Maybe<MediaStatus>;
  tranformedSrc?: Maybe<Scalars["URL"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ImageTranformedSrcArgs = {
  preferredContentType?: InputMaybe<ImageContentType>;
};

export enum ImageContentType {
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP",
}

export type ImageInput = {
  altText?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  src?: InputMaybe<Scalars["String"]>;
};

export type ImageSnapshot = {
  __typename?: "ImageSnapshot";
  altText?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
};

export type ImportProductsInput = {
  category?: InputMaybe<Scalars["String"]>;
  installationId?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  productIds: Array<Scalars["String"]>;
  storeCurrency?: InputMaybe<CurrencyCode>;
  storeId: Scalars["ID"];
};

export type InfoBar = {
  __typename?: "InfoBar";
  background: Scalars["String"];
  isActive?: Maybe<Scalars["Boolean"]>;
  isDismissible?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text: Scalars["HTML"];
  translations?: Maybe<Array<Maybe<InfoBarTranslation>>>;
};

export type InfoBarInput = {
  background: Scalars["String"];
  isActive: Scalars["Boolean"];
  isDismissible: Scalars["Boolean"];
  locale: Scalars["String"];
  text: Scalars["HTML"];
};

export type InfoBarTranslation = {
  __typename?: "InfoBarTranslation";
  locale: Scalars["String"];
  text: Scalars["HTML"];
};

export type InfoBarTranslationInput = {
  locale: Scalars["String"];
  text: Scalars["HTML"];
};

export type Integration = Node & {
  __typename?: "Integration";
  about?: Maybe<Scalars["HTML"]>;
  authType: IntegrationAuthType;
  category?: Maybe<IntegrationCategory>;
  connectAccountInstructions?: Maybe<Scalars["HTML"]>;
  createAccountInstructions?: Maybe<Scalars["HTML"]>;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  features?: Maybe<Array<Maybe<Scalars["String"]>>>;
  icon?: Maybe<Logo>;
  id: Scalars["ID"];
  installationId?: Maybe<Scalars["ID"]>;
  isPaginated: Scalars["Boolean"];
  links?: Maybe<IntegrationLinks>;
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  logo?: Maybe<Logo>;
  name: Scalars["String"];
  provider?: Maybe<ProviderName>;
  searchingMechanism?: Maybe<Array<SearchingMechanism>>;
  shippingLevels?: Maybe<Array<Maybe<Scalars["String"]>>>;
  translations: Array<IntegrationTranslation>;
  type?: Maybe<IntegrationType>;
  updatedAt: Scalars["DateTime"];
};

export type IntegrationInstallationIdArgs = {
  storeId?: InputMaybe<Scalars["String"]>;
};

export type IntegrationApiAuthCredentials = {
  __typename?: "IntegrationApiAuthCredentials";
  key: Scalars["String"];
  secret: Scalars["String"];
};

export type IntegrationApiAuthCredentialsInput = {
  key: Scalars["String"];
  secret: Scalars["String"];
};

export enum IntegrationAuthType {
  Api = "Api",
  Basic = "Basic",
  Custom = "Custom",
  NoAuth = "NoAuth",
  Token = "Token",
}

export type IntegrationBasicAuthCredentials = {
  __typename?: "IntegrationBasicAuthCredentials";
  password: Scalars["String"];
  username: Scalars["String"];
};

export type IntegrationBasicAuthCredentialsInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export enum IntegrationCategory {
  Dropshipping = "Dropshipping",
  EInvoice = "EInvoice",
  Shipping = "Shipping",
  SocialMediaSalesChannel = "SocialMediaSalesChannel",
}

export type IntegrationConnection = {
  __typename?: "IntegrationConnection";
  nodes?: Maybe<Array<Maybe<Integration>>>;
  totalCount: Scalars["Int"];
};

export type IntegrationConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IntegrationSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type IntegrationInstallation = {
  __typename?: "IntegrationInstallation";
  credentials?: Maybe<Credentials>;
  id: Scalars["ID"];
  integrationAuthType: IntegrationAuthType;
  integrationId: Scalars["ID"];
  settings?: Maybe<Settings>;
  storeId: Scalars["ID"];
};

export type IntegrationInstallationInput = {
  apiCredentials?: InputMaybe<IntegrationApiAuthCredentialsInput>;
  basicCredentials?: InputMaybe<IntegrationBasicAuthCredentialsInput>;
  integrationId: Scalars["ID"];
  settings?: InputMaybe<IntegrationInstallationSettings>;
  storeId: Scalars["ID"];
  tokenCredentials?: InputMaybe<IntegrationTokenAuthCredentialsInput>;
};

export type IntegrationInstallationSettings = {
  password?: InputMaybe<Scalars["String"]>;
  storeUrl?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type IntegrationLinks = {
  __typename?: "IntegrationLinks";
  createAccount?: Maybe<Scalars["String"]>;
  dashboard?: Maybe<Scalars["String"]>;
  support?: Maybe<Scalars["String"]>;
  websiteLink?: Maybe<Scalars["String"]>;
};

export type IntegrationLinksInput = {
  createAccount?: InputMaybe<Scalars["String"]>;
  support?: InputMaybe<Scalars["String"]>;
  websiteLink?: InputMaybe<Scalars["String"]>;
};

export type IntegrationNoAuthCredentials = {
  __typename?: "IntegrationNoAuthCredentials";
  authType?: Maybe<Scalars["String"]>;
};

export type IntegrationProviderDetails = {
  __typename?: "IntegrationProviderDetails";
  icon?: Maybe<IntegrationProviderImage>;
  name?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  websiteLink?: Maybe<Scalars["String"]>;
};

export type IntegrationProviderDetailsInput = {
  icon?: InputMaybe<IntegrationProviderImageInput>;
  name?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  websiteLink?: InputMaybe<Scalars["String"]>;
};

export type IntegrationProviderDetailsSnapshot = {
  __typename?: "IntegrationProviderDetailsSnapshot";
  icon?: Maybe<ImageSnapshot>;
  name?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  websiteLink?: Maybe<Scalars["String"]>;
};

export type IntegrationProviderImage = {
  __typename?: "IntegrationProviderImage";
  altText?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
};

export type IntegrationProviderImageInput = {
  altText?: InputMaybe<Scalars["String"]>;
  src: Scalars["String"];
};

export type IntegrationProviderNoSettings = {
  __typename?: "IntegrationProviderNoSettings";
  provider: ProviderName;
};

export enum IntegrationSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type IntegrationTokenAuthCredentials = {
  __typename?: "IntegrationTokenAuthCredentials";
  token: Scalars["String"];
};

export type IntegrationTokenAuthCredentialsInput = {
  token: Scalars["String"];
};

export type IntegrationTranslation = {
  __typename?: "IntegrationTranslation";
  about?: Maybe<Scalars["HTML"]>;
  connectAccountInstructions?: Maybe<Scalars["HTML"]>;
  createAccountInstructions?: Maybe<Scalars["HTML"]>;
  description?: Maybe<Scalars["String"]>;
  features?: Maybe<Array<Maybe<Scalars["String"]>>>;
  links?: Maybe<IntegrationLinks>;
  locale: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
};

export type IntegrationTranslationInput = {
  about?: InputMaybe<Scalars["HTML"]>;
  connectAccountInstructions?: InputMaybe<Scalars["HTML"]>;
  createAccountInstructions?: InputMaybe<Scalars["HTML"]>;
  description?: InputMaybe<Scalars["String"]>;
  features?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  links?: InputMaybe<IntegrationLinksInput>;
  locale: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
};

export enum IntegrationType {
  Dropshipping = "Dropshipping",
  EInvoice = "EInvoice",
  Shipping = "Shipping",
  SocialMediaSalesChannel = "SocialMediaSalesChannel",
}

export type Invoice = {
  __typename?: "Invoice";
  amount: Scalars["Float"];
  description?: Maybe<Scalars["String"]>;
  discount: Scalars["Float"];
  dueDate: Scalars["DateTime"];
  id: Scalars["ID"];
  notes?: Maybe<Scalars["String"]>;
  paid: Scalars["Boolean"];
  periodEnd: Scalars["DateTime"];
  periodStart: Scalars["DateTime"];
  promotionCode?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  subscription: PlanSubscription;
  totalAmount: Scalars["Float"];
};

export type ItemsQuantityInput = {
  id: Scalars["ID"];
  quantity: Scalars["Int"];
};

export type KanwatIntegrationSettings = {
  __typename?: "KanwatIntegrationSettings";
  provider: ProviderName;
  storeUrl?: Maybe<Scalars["String"]>;
};

export type LegalPageStoreByHandleInput = {
  handle?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["String"]>;
};

export type Link = {
  __typename?: "Link";
  resource?: Maybe<LinkResource>;
  resourceId?: Maybe<Scalars["String"]>;
  type: LinkType;
  url?: Maybe<Scalars["String"]>;
};

export type LinkInput = {
  resourceId?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
  url?: InputMaybe<Scalars["String"]>;
};

export type LinkResource =
  | Product
  | ProductCollection
  | StoreLegalPage
  | StorePage
  | StoreStaticPage;

export enum LinkType {
  Collection = "Collection",
  ExternalLink = "ExternalLink",
  None = "None",
  Page = "Page",
  Product = "Product",
  Shop = "SHOP",
}

export type ListReviewsConnection = {
  __typename?: "ListReviewsConnection";
  count: Scalars["Int"];
  reviews: Array<ProductReview>;
};

export enum Locale {
  Ar = "ar",
  En = "en",
  Fr = "fr",
  Tr = "tr",
}

export type Location = {
  __typename?: "Location";
  address: Scalars["String"];
  lat?: Maybe<Scalars["String"]>;
  long?: Maybe<Scalars["String"]>;
};

export type Logo = {
  __typename?: "Logo";
  altText?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
};

export type LogoInput = {
  altText?: InputMaybe<Scalars["String"]>;
  src: Scalars["String"];
};

export type MappedShippingAddress = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
};

export type MarkOrdersPaidInput = {
  orderIds: Array<InputMaybe<Scalars["ID"]>>;
  paidAmount: MoneyInput;
  storeId: Scalars["ID"];
};

export enum MediaStatus {
  Failed = "FAILED",
  Processing = "PROCESSING",
  Ready = "READY",
  Uploaded = "UPLOADED",
}

export enum MenuItemType {
  Collection = "Collection",
  EmailAddress = "EmailAddress",
  ExternalLink = "ExternalLink",
  Folder = "Folder",
  LegalPage = "LegalPage",
  Page = "Page",
  PhoneNumber = "PhoneNumber",
  Product = "Product",
  StaticPage = "StaticPage",
}

export type MenuLink = {
  __typename?: "MenuLink";
  openInNewTab?: Maybe<Scalars["Boolean"]>;
  resource?: Maybe<LinkResource>;
  resourceId?: Maybe<Scalars["String"]>;
  staticPageType?: Maybe<StaticPageEnum>;
  type: MenuItemType;
  url?: Maybe<Scalars["String"]>;
};

export type MenuLinkInput = {
  openInNewTab?: InputMaybe<Scalars["Boolean"]>;
  resourceId?: InputMaybe<Scalars["String"]>;
  staticPageType?: InputMaybe<StaticPageEnum>;
  type?: InputMaybe<MenuItemType>;
  url?: InputMaybe<Scalars["String"]>;
};

export type Money = {
  __typename?: "Money";
  amount: Scalars["Float"];
  currencyCode: CurrencyCode;
};

export type MoneyInput = {
  amount: Scalars["Float"];
  currencyCode: CurrencyCode;
};

export type MoveInput = {
  id: Scalars["ID"];
  newPosition: Scalars["Int"];
};

export type MoveSectionItemsInput = {
  newIndex: Scalars["Int"];
  oldIndex: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  addCustomerAddress: CustomerAddress;
  addProductsToCollection: CollectionAddProductsPayload;
  adjustItemsQuantity: Order;
  archiveProducts: ArchiveProductsPayload;
  archivePromoCode: PromoCode;
  archiveShippingRate: ShippingRate;
  archiveShippingZone: ShippingZone;
  assignOptionsToProduct?: Maybe<Product>;
  bulkUpload?: Maybe<UserRequestStatus>;
  cancelItemsFulfillment: Order;
  cancelPayment?: Maybe<PaymentIntent>;
  cancelSubscription: PlanSubscription;
  changeStoreCurrency?: Maybe<Store>;
  claimDomain: RegisteredDomain;
  confirmPaymentIntent?: Maybe<PaymentIntent>;
  createAutomaticDiscount: Discount;
  createCollection: CreateCollectionPayload;
  createCustomer?: Maybe<CustomerUser>;
  createIntegration?: Maybe<Integration>;
  createOrder: Order;
  createOrderByAdmin: Order;
  createOrderHistory: OrderHistory;
  createPaymentSource: PaymentSource;
  createProduct: CreateProductPayload;
  createProductAttribute?: Maybe<ProductAttribute>;
  createProductAttributeValue?: Maybe<ProductAttributeValue>;
  createProductMedia?: Maybe<CreateProductMediaPayload>;
  createProductOption?: Maybe<ProductOption>;
  createProductOptionValue?: Maybe<ProductOptionValue>;
  createProductVariant: ProductVariant;
  createPromoCode: PromoCode;
  createShippingRate: ShippingRate;
  createShippingZone: ShippingZone;
  createShippingZoneV2: ShippingZone;
  createSiteSubscription: PlanSubscription;
  createStore: CreateStorePayload;
  createStoreDomain?: Maybe<Domain>;
  createStoreLegalPage?: Maybe<StoreLegalPage>;
  createStoreMenu: StoreMenu;
  createStorePage: StorePage;
  createStorePageCatalogSection?: Maybe<StorePageCatalogSection>;
  createStorePageSection: StorePageSection;
  createStoreRedirect: Scalars["Boolean"];
  createStoreRobotsTxt: Scalars["Boolean"];
  /** @deprecated Use createStoreLegalPage instead */
  createStoreStaticPage?: Maybe<StoreStaticPage>;
  createStoreStaticTemplate?: Maybe<StoreStaticTemplate>;
  createStoreSubscription: PlanSubscription;
  createSubscription: PlanSubscription;
  createSubscriptionByVodafoneHub: PlanSubscription;
  createUser: User;
  createUserByVendor: UserVendor;
  customizeCheckoutFormFields?: Maybe<CustomCheckoutSetting>;
  deleteAutomaticDiscount?: Maybe<Scalars["Boolean"]>;
  deleteCustomerAddress: Scalars["Boolean"];
  deleteProduct: DeleteProductPayload;
  deleteProductAttribute?: Maybe<ProductAttribute>;
  deleteProductAttributeValue?: Maybe<ProductAttributeValue>;
  deleteProductMedia?: Maybe<DeleteProductMediaPayload>;
  deleteProductVariant: ProductVariant;
  deleteReview: Scalars["Boolean"];
  deleteShippingRate?: Maybe<Scalars["ID"]>;
  deleteShippingZone?: Maybe<Scalars["ID"]>;
  deleteStoreLegalPage?: Maybe<Scalars["Boolean"]>;
  deleteStoreMenu: Scalars["Int"];
  deleteStorePage: Scalars["Boolean"];
  deleteStorePageCatalogSection?: Maybe<Scalars["Boolean"]>;
  deleteStorePageSection: Scalars["Boolean"];
  deleteStoreRedirect: Scalars["Boolean"];
  deleteStoreRobotsTxt: Scalars["Boolean"];
  /** @deprecated Use deleteStoreLegalPage instead */
  deleteStoreStaticPage?: Maybe<Scalars["Boolean"]>;
  deleteStoreStaticTemplate?: Maybe<Scalars["Boolean"]>;
  disableProductReviews: Scalars["Boolean"];
  disableStorePaymentMethod?: Maybe<Array<Maybe<StorePaymentMethod>>>;
  editReview: ProductReview;
  enableProductReviews: StoreReviewsSettings;
  enableStorePaymentMethod?: Maybe<Array<Maybe<StorePaymentMethod>>>;
  exportBulkTranslateCSV?: Maybe<ExportProductsPayload>;
  exportOrders?: Maybe<ExportOrdersPayload>;
  exportProducts?: Maybe<ExportProductsPayload>;
  forgetCustomerPassword: Scalars["Boolean"];
  generateApiKey: PermissionDetails;
  generateStoreLegalPage?: Maybe<Scalars["String"]>;
  /** @deprecated Use generateStoreLegalPage instead */
  generateStoreStaticPage?: Maybe<Scalars["String"]>;
  importProducts: Scalars["Boolean"];
  installIntegration: IntegrationInstallation;
  installTheme: Template;
  makeDefaultAddress: CustomerAddress;
  manageCustomerReviews: Scalars["Boolean"];
  manageFatooraIntegration: IntegrationInstallation;
  markOrdersAsArchived: Array<Maybe<Order>>;
  markOrdersAsCanceled: Array<Maybe<Order>>;
  markOrdersAsPaid?: Maybe<Array<Maybe<OrderPayment>>>;
  markOrdersAsViewed: Array<Maybe<Order>>;
  markOrdersPaymentAsRefunded?: Maybe<Array<Maybe<OrderPayment>>>;
  purchaseDomainRequest: PurchaseDomainResult;
  refetchParagonDetails?: Maybe<Scalars["Boolean"]>;
  removeIntegrationInstallation: Scalars["ID"];
  removeItems: Order;
  removeLocalesFromStore: UpdateStorePayload;
  removeProductVariantImage: ProductVariant;
  removeProductsFromCollection: CollectionRemoveProductsPayload;
  removeStoreDomain?: Maybe<Scalars["Boolean"]>;
  reorderOptionsInProduct?: Maybe<ReorderOptionsInProductPayload>;
  reorderPageSections: StorePage;
  reorderProductMedia?: Maybe<ReorderProductMediaPayload>;
  reorderProductsInCollection: ReorderProductsInCollectionPayload;
  reorderSectionItems: StorePageSection;
  reorderValuesInOption?: Maybe<Scalars["Boolean"]>;
  requestOrderPaymentIntent?: Maybe<Scalars["Boolean"]>;
  resetCustomerPassword: Scalars["String"];
  restoreArchivedOrders: Array<Maybe<Order>>;
  restoreCanceledOrders: Array<Maybe<Order>>;
  restorePromoCode: PromoCode;
  restoreShippingRate: ShippingRate;
  restoreShippingZone: ShippingZone;
  revokeApiKey?: Maybe<Scalars["Boolean"]>;
  revokeUserStorePermissions?: Maybe<Scalars["Boolean"]>;
  setItemsFulfillment: Order;
  setStoreLocales: UpdateStorePayload;
  shipOrders: Scalars["Boolean"];
  signup?: Maybe<Scalars["String"]>;
  stagedUploadsCreate?: Maybe<StagedUploadsCreatePayload>;
  submitReview: ProductReview;
  submitStoreContactForm: SubmitStoreContactFormPayload;
  translateIntegration: Integration;
  translateStore: UpdateStorePayload;
  translateStoreAbout: UpdateStorePayload;
  translateStoreCheckout: UpdateStorePayload;
  translateStoreFonts: UpdateStorePayload;
  translateStoreFooter: UpdateStorePayload;
  translateStoreHomeAttributes?: Maybe<StoreHomeAttributesRows>;
  translateStoreHomeCollections?: Maybe<StoreHomeCollectionsRows>;
  translateStoreHomeHeroSlider: UpdateStorePayload;
  translateStoreHomeProducts?: Maybe<StoreHomeProductsRows>;
  translateStoreInfoBar: UpdateStorePayload;
  translateStoreLegalPage?: Maybe<StoreLegalPage>;
  translateStoreMenu: StoreMenu;
  translateStorePage: StorePage;
  translateStorePageCatalogSection?: Maybe<StorePageCatalogSection>;
  translateStorePageSection: StorePageSection;
  /** @deprecated Use translateStoreLegalPage instead */
  translateStoreStaticPage?: Maybe<StoreStaticPage>;
  updateApiKeyPermissions: PermissionDetails;
  updateAutomaticDiscount: Discount;
  updateBulkProductAttributeValuesTranslations?: Maybe<
    Array<Maybe<ProductAttributeValue>>
  >;
  updateBulkProductAttributesTranslations?: Maybe<
    Array<Maybe<ProductAttribute>>
  >;
  updateBulkProductOptionValuesTranslations?: Maybe<
    Array<Maybe<ProductOptionValue>>
  >;
  updateBulkProductOptionsTranslations?: Maybe<Array<Maybe<ProductOption>>>;
  updateBulkShippingRateTranslations?: Maybe<Array<Maybe<ShippingRate>>>;
  updateCategoryTranslations?: Maybe<Scalars["Int"]>;
  updateCollection: UpdateCollectionPayload;
  updateCollectionTranslations?: Maybe<ProductCollection>;
  updateCustomer?: Maybe<CustomerUser>;
  updateCustomerAddress: CustomerAddress;
  updateCustomerPassword: Scalars["Boolean"];
  updateIntegrationInstallation: IntegrationInstallation;
  updateOrder: Order;
  updateOrderPaymentMethod?: Maybe<PaymentIntent>;
  updateOrderPromo: Order;
  updateProduct: UpdateProductPayload;
  updateProductAttribute?: Maybe<ProductAttribute>;
  updateProductAttributeValue?: Maybe<ProductAttributeValue>;
  updateProductReviewsSettings: StoreReviewsSettings;
  updateProductTranslations?: Maybe<Product>;
  updateProductVariant: ProductVariant;
  updateProductVariantImage: ProductVariant;
  updateProductsStatus: UpdateProductsStatusPayload;
  updateProductsVisibility: UpdateProductsVisibilityPayload;
  updatePromoCode: PromoCode;
  updateResourceShippingRateCost?: Maybe<ShippingRate>;
  updateShippingRate: ShippingRate;
  updateShippingRateTranslations?: Maybe<ShippingRate>;
  updateShippingZone: ShippingZone;
  updateShippingZoneV2: ShippingZone;
  updateStore: UpdateStorePayload;
  updateStoreAbout: UpdateStorePayload;
  updateStoreAnalyticalAccount: UpdateStorePayload;
  updateStoreCheckout: UpdateStorePayload;
  updateStoreColors: UpdateStorePayload;
  updateStoreCustomCities: Array<City>;
  updateStoreCustomCountries: Array<Country>;
  updateStoreCustomRegions: Array<Region>;
  updateStoreCustomStates: Array<State>;
  updateStoreDomain?: Maybe<Domain>;
  updateStoreFavIcon: UpdateStorePayload;
  updateStoreFonts: UpdateStorePayload;
  updateStoreFooter: UpdateStorePayload;
  updateStoreHero: UpdateStorePayload;
  updateStoreHomeAttributes?: Maybe<StoreHomeAttributesRows>;
  updateStoreHomeCollections?: Maybe<StoreHomeCollectionsRows>;
  updateStoreHomeProducts?: Maybe<StoreHomeProductsRows>;
  updateStoreInfoBar: UpdateStorePayload;
  updateStoreLegalPage?: Maybe<StoreLegalPage>;
  updateStoreLogo: UpdateStorePayload;
  updateStoreMenu: StoreMenu;
  updateStorePage: StorePage;
  updateStorePageCatalogSection?: Maybe<StorePageCatalogSection>;
  updateStorePageSection: StorePageSection;
  updateStoreRedirect: Scalars["Boolean"];
  updateStoreRobotsTxt: Scalars["Boolean"];
  updateStoreSocialMedia: UpdateStorePayload;
  /** @deprecated Use updateStoreLegalPage instead */
  updateStoreStaticPage?: Maybe<StoreStaticPage>;
  updateStoreStaticTemplate?: Maybe<StoreStaticTemplate>;
  updateStoreTax?: Maybe<Tax>;
  updateUser: User;
  updateUserFlags?: Maybe<User>;
  updateUserStorePermissions?: Maybe<Array<StoreUser>>;
  updateZonePaymentMethod?: Maybe<StoreZoneAllowedMethods>;
  uploadTranslations?: Maybe<UserRequestStatus>;
  verifyEmail: User;
};

export type MutationAddCustomerAddressArgs = {
  customerId: Scalars["ID"];
  input: AddCustomerAddressInput;
};

export type MutationAddProductsToCollectionArgs = {
  id: Scalars["ID"];
  productIds: Array<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type MutationAdjustItemsQuantityArgs = {
  input: AdjustItemsQuantityInput;
};

export type MutationArchiveProductsArgs = {
  input: ArchiveProductsInput;
};

export type MutationArchivePromoCodeArgs = {
  input: ArchivePromoCodeInput;
};

export type MutationArchiveShippingRateArgs = {
  input: ArchiveShippingRateInput;
};

export type MutationArchiveShippingZoneArgs = {
  input: ArchiveShippingZoneInput;
};

export type MutationAssignOptionsToProductArgs = {
  input?: InputMaybe<AssignOptionsToProductInput>;
};

export type MutationBulkUploadArgs = {
  productsFileURL: Scalars["String"];
  shouldOverwrite?: InputMaybe<Scalars["Boolean"]>;
  storeId: Scalars["ID"];
};

export type MutationCancelItemsFulfillmentArgs = {
  input: CancelFulfillInput;
};

export type MutationCancelPaymentArgs = {
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationCancelSubscriptionArgs = {
  subscriptionId: Scalars["ID"];
};

export type MutationChangeStoreCurrencyArgs = {
  conversionRate?: InputMaybe<Scalars["Float"]>;
  newCurrencyCode?: InputMaybe<CurrencyCode>;
  precision?: InputMaybe<Scalars["Int"]>;
  storeId: Scalars["ID"];
};

export type MutationClaimDomainArgs = {
  input: ClaimDomainInput;
};

export type MutationConfirmPaymentIntentArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationCreateAutomaticDiscountArgs = {
  input: DiscountInput;
  storeId: Scalars["ID"];
};

export type MutationCreateCollectionArgs = {
  input: CollectionInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateCustomerArgs = {
  input?: InputMaybe<CustomerUserWithoutPasswordInput>;
  storeId: Scalars["ID"];
};

export type MutationCreateIntegrationArgs = {
  input: CreateIntegrationInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOrderByAdminArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOrderHistoryArgs = {
  input: OrderHistoryInput;
};

export type MutationCreatePaymentSourceArgs = {
  input?: InputMaybe<PaymentSourceInput>;
};

export type MutationCreateProductArgs = {
  input: ProductInput;
  locale: Scalars["String"];
  media?: InputMaybe<Array<CreateMediaInput>>;
};

export type MutationCreateProductAttributeArgs = {
  input: CreateProductAttributeInput;
};

export type MutationCreateProductAttributeValueArgs = {
  input: CreateProductAttributeValueInput;
};

export type MutationCreateProductMediaArgs = {
  media: Array<CreateMediaInput>;
  productId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationCreateProductOptionArgs = {
  input?: InputMaybe<ProductOptionInput>;
};

export type MutationCreateProductOptionValueArgs = {
  input?: InputMaybe<ProductOptionValueInput>;
};

export type MutationCreateProductVariantArgs = {
  input: ProductVariantInput;
};

export type MutationCreatePromoCodeArgs = {
  input: PromoCodeInput;
};

export type MutationCreateShippingRateArgs = {
  input: ShippingRateInput;
  locale: Scalars["String"];
};

export type MutationCreateShippingZoneArgs = {
  input: ShippingZoneInput;
};

export type MutationCreateShippingZoneV2Args = {
  input: ShippingZoneInput;
};

export type MutationCreateSiteSubscriptionArgs = {
  paymentSource: PaymentSourceInput;
  planId: Scalars["ID"];
  promotionCode?: InputMaybe<Scalars["String"]>;
  siteId: Scalars["ID"];
};

export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};

export type MutationCreateStoreDomainArgs = {
  input: DomainInput;
};

export type MutationCreateStoreLegalPageArgs = {
  input?: InputMaybe<StoreLegalPageInput>;
};

export type MutationCreateStoreMenuArgs = {
  input?: InputMaybe<CreateStoreMenuInput>;
  storeId: Scalars["ID"];
};

export type MutationCreateStorePageArgs = {
  input: CreateStorePageInput;
  storeId: Scalars["ID"];
};

export type MutationCreateStorePageCatalogSectionArgs = {
  input: CreateStorePageCatalogSectionInput;
  pageId?: InputMaybe<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type MutationCreateStorePageSectionArgs = {
  input: CreateStorePageSectionInput;
  pageId?: InputMaybe<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type MutationCreateStoreRedirectArgs = {
  newUrl: Scalars["String"];
  oldUrl: Scalars["String"];
  storeId: Scalars["ID"];
};

export type MutationCreateStoreRobotsTxtArgs = {
  content: Scalars["String"];
  storeId: Scalars["ID"];
};

export type MutationCreateStoreStaticPageArgs = {
  input?: InputMaybe<StoreStaticPageInput>;
};

export type MutationCreateStoreStaticTemplateArgs = {
  input?: InputMaybe<CreateTemplateInput>;
};

export type MutationCreateStoreSubscriptionArgs = {
  paymentSource: PaymentSourceInput;
  planId: Scalars["ID"];
  promotionCode?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type MutationCreateSubscriptionArgs = {
  paymentSource: PaymentSourceInput;
  planId: Scalars["ID"];
  promotionCode?: InputMaybe<Scalars["String"]>;
  resourceId: Scalars["ID"];
};

export type MutationCreateSubscriptionByVodafoneHubArgs = {
  paymentMethod?: InputMaybe<Scalars["String"]>;
  planId: Scalars["ID"];
  promotionCode?: InputMaybe<Scalars["String"]>;
  resourceId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type MutationCreateUserArgs = {
  input: UserInput;
};

export type MutationCreateUserByVendorArgs = {
  input: UserInput;
};

export type MutationCustomizeCheckoutFormFieldsArgs = {
  input: CustomizeCheckoutInput;
};

export type MutationDeleteAutomaticDiscountArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteCustomerAddressArgs = {
  addressId: Scalars["ID"];
  customerId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteProductAttributeArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteProductAttributeValueArgs = {
  attributeId: Scalars["ID"];
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteProductMediaArgs = {
  mediaIds: Array<Scalars["ID"]>;
  productId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteProductVariantArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteShippingRateArgs = {
  input: DeleteShippingRateInput;
};

export type MutationDeleteShippingZoneArgs = {
  input: DeleteShippingZoneInput;
};

export type MutationDeleteStoreLegalPageArgs = {
  id: Scalars["ID"];
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteStoreMenuArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteStorePageArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteStorePageCatalogSectionArgs = {
  pageId?: InputMaybe<Scalars["ID"]>;
  sectionId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteStorePageSectionArgs = {
  id: Scalars["ID"];
  pageId?: InputMaybe<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type MutationDeleteStoreRedirectArgs = {
  redirectId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationDeleteStoreRobotsTxtArgs = {
  storeId: Scalars["ID"];
};

export type MutationDeleteStoreStaticPageArgs = {
  id: Scalars["ID"];
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteStoreStaticTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationDisableProductReviewsArgs = {
  storeId: Scalars["ID"];
};

export type MutationDisableStorePaymentMethodArgs = {
  paymentMethod?: InputMaybe<StorePaymentMethods>;
  storeId: Scalars["ID"];
};

export type MutationEditReviewArgs = {
  review: UpdateProductReviewInput;
  reviewId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationEnableProductReviewsArgs = {
  input: EnableProductReviewsInput;
};

export type MutationEnableStorePaymentMethodArgs = {
  paymentMethod?: InputMaybe<StorePaymentMethods>;
  storeId: Scalars["ID"];
  storeName?: InputMaybe<Scalars["String"]>;
};

export type MutationExportBulkTranslateCsvArgs = {
  ExportOptions: ExportOptions;
  email: Scalars["String"];
  locale: Scalars["String"];
  storeId: Scalars["ID"];
  storeName: Scalars["String"];
};

export type MutationExportOrdersArgs = {
  input: ExportOrdersInput;
};

export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};

export type MutationForgetCustomerPasswordArgs = {
  email?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  storeUrl?: InputMaybe<Scalars["String"]>;
};

export type MutationGenerateApiKeyArgs = {
  name: Scalars["String"];
  permissions: Array<StoreUserPermissionInput>;
  storeId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type MutationGenerateStoreLegalPageArgs = {
  input?: InputMaybe<GenerateStoreLegalPageInput>;
};

export type MutationGenerateStoreStaticPageArgs = {
  input?: InputMaybe<GenerateStoreStaticPageInput>;
};

export type MutationImportProductsArgs = {
  input?: InputMaybe<ImportProductsInput>;
};

export type MutationInstallIntegrationArgs = {
  input: IntegrationInstallationInput;
};

export type MutationInstallThemeArgs = {
  handle: Scalars["String"];
  storeId: Scalars["ID"];
};

export type MutationMakeDefaultAddressArgs = {
  addressId: Scalars["ID"];
  customerId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationManageCustomerReviewsArgs = {
  reviewIds: Array<Scalars["ID"]>;
  storeId: Scalars["ID"];
  updates: ReviewManagementInput;
};

export type MutationManageFatooraIntegrationArgs = {
  input: FatooraConfigurationInput;
};

export type MutationMarkOrdersAsArchivedArgs = {
  input: StoresOrdersInput;
};

export type MutationMarkOrdersAsCanceledArgs = {
  input: StoresOrdersInput;
};

export type MutationMarkOrdersAsPaidArgs = {
  input: MarkOrdersPaidInput;
};

export type MutationMarkOrdersAsViewedArgs = {
  input: StoresOrdersInput;
};

export type MutationMarkOrdersPaymentAsRefundedArgs = {
  input: StoresOrdersInput;
};

export type MutationPurchaseDomainRequestArgs = {
  input: PurchaseDomainInput;
};

export type MutationRefetchParagonDetailsArgs = {
  storeId: Scalars["ID"];
};

export type MutationRemoveIntegrationInstallationArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationRemoveItemsArgs = {
  input: RemoveItemsInput;
};

export type MutationRemoveLocalesFromStoreArgs = {
  id: Scalars["ID"];
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationRemoveProductVariantImageArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationRemoveProductsFromCollectionArgs = {
  id: Scalars["ID"];
  productIds: Array<Scalars["ID"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRemoveStoreDomainArgs = {
  storeId: Scalars["ID"];
};

export type MutationReorderOptionsInProductArgs = {
  id: Scalars["ID"];
  moves: Array<MoveInput>;
  storeId: Scalars["ID"];
};

export type MutationReorderPageSectionsArgs = {
  id: Scalars["ID"];
  input: ReorderItemsInput;
  storeId: Scalars["ID"];
};

export type MutationReorderProductMediaArgs = {
  moves: Array<MoveInput>;
  productId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationReorderProductsInCollectionArgs = {
  id: Scalars["ID"];
  moves: Array<ProductMove>;
  storeId: Scalars["ID"];
};

export type MutationReorderSectionItemsArgs = {
  id: Scalars["ID"];
  input: ReorderItemsInput;
  storeId: Scalars["ID"];
};

export type MutationReorderValuesInOptionArgs = {
  id: Scalars["ID"];
  moves: Array<MoveInput>;
  storeId: Scalars["ID"];
};

export type MutationRequestOrderPaymentIntentArgs = {
  orderId: Scalars["ID"];
};

export type MutationResetCustomerPasswordArgs = {
  newPassword?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  token?: InputMaybe<Scalars["String"]>;
};

export type MutationRestoreArchivedOrdersArgs = {
  input: StoresOrdersInput;
};

export type MutationRestoreCanceledOrdersArgs = {
  input: StoresOrdersInput;
};

export type MutationRestorePromoCodeArgs = {
  input: RestorePromoCodeInput;
};

export type MutationRestoreShippingRateArgs = {
  input: ArchiveShippingRateInput;
};

export type MutationRestoreShippingZoneArgs = {
  input: ArchiveShippingZoneInput;
};

export type MutationRevokeApiKeyArgs = {
  apiKeyId: Scalars["ID"];
  storeId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type MutationRevokeUserStorePermissionsArgs = {
  storeId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type MutationSetItemsFulfillmentArgs = {
  input: FulfillInput;
};

export type MutationSetStoreLocalesArgs = {
  id: Scalars["ID"];
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationShipOrdersArgs = {
  input: ShipOrdersInput;
};

export type MutationSignupArgs = {
  input: CustomerUserInput;
  storeId: Scalars["ID"];
};

export type MutationStagedUploadsCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<StagedUploadCreateInput>>>;
};

export type MutationSubmitReviewArgs = {
  review: CreateProductReviewInput;
  storeId: Scalars["ID"];
};

export type MutationSubmitStoreContactFormArgs = {
  input: SubmitStoreContactFormInput;
};

export type MutationTranslateIntegrationArgs = {
  integrationId: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<IntegrationTranslationInput>>>;
};

export type MutationTranslateStoreArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<StoreTranslationInput>>>;
};

export type MutationTranslateStoreAboutArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<AboutTranslationInput>>>;
};

export type MutationTranslateStoreCheckoutArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<CheckoutTranslationInput>>>;
};

export type MutationTranslateStoreFontsArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<StoreFontsTranslationInput>>>;
};

export type MutationTranslateStoreFooterArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<FooterTranslationInput>>>;
};

export type MutationTranslateStoreHomeAttributesArgs = {
  input: Array<StoreHomeAttributesTranslationInput>;
  storeId: Scalars["ID"];
};

export type MutationTranslateStoreHomeCollectionsArgs = {
  input: Array<InputMaybe<StoreHomeCollectionsTranslationInput>>;
  storeId: Scalars["ID"];
};

export type MutationTranslateStoreHomeHeroSliderArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<
    Array<InputMaybe<StoreHomeHeroSliderTranslationInput>>
  >;
};

export type MutationTranslateStoreHomeProductsArgs = {
  input: Array<InputMaybe<StoreHomeProductsTranslationInput>>;
  storeId: Scalars["ID"];
};

export type MutationTranslateStoreInfoBarArgs = {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<InfoBarTranslationInput>>>;
};

export type MutationTranslateStoreLegalPageArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<TranslateStoreLegalPageInput>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationTranslateStoreMenuArgs = {
  id: Scalars["ID"];
  items: Array<InputMaybe<StoreMenuItemTranslationInput>>;
  storeId: Scalars["ID"];
};

export type MutationTranslateStorePageArgs = {
  id: Scalars["ID"];
  input: StorePageTranslationInput;
  storeId: Scalars["ID"];
};

export type MutationTranslateStorePageCatalogSectionArgs = {
  input: StorePageCatalogSectionTranslationInput;
  sectionId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationTranslateStorePageSectionArgs = {
  id: Scalars["ID"];
  input: StorePageSectionTranslationInput;
  storeId: Scalars["ID"];
};

export type MutationTranslateStoreStaticPageArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<TranslateStoreStaticPageInput>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateApiKeyPermissionsArgs = {
  apiKeyId: Scalars["ID"];
  newApiKeyName?: InputMaybe<Scalars["String"]>;
  newPermissions?: InputMaybe<Array<InputMaybe<StoreUserPermissionInput>>>;
  storeId: Scalars["ID"];
};

export type MutationUpdateAutomaticDiscountArgs = {
  id: Scalars["ID"];
  input: DiscountInput;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateBulkProductAttributeValuesTranslationsArgs = {
  storeId: Scalars["ID"];
  translations?: InputMaybe<Array<BulkProductAttributeValueTranslationInput>>;
};

export type MutationUpdateBulkProductAttributesTranslationsArgs = {
  storeId: Scalars["ID"];
  translations?: InputMaybe<Array<BulkProductAttributeTranslationInput>>;
};

export type MutationUpdateBulkProductOptionValuesTranslationsArgs = {
  storeId: Scalars["ID"];
  translations?: InputMaybe<Array<BulkProductOptionValueTranslationInput>>;
};

export type MutationUpdateBulkProductOptionsTranslationsArgs = {
  storeId: Scalars["ID"];
  translations?: InputMaybe<Array<BulkProductOptionTranslationInput>>;
};

export type MutationUpdateBulkShippingRateTranslationsArgs = {
  storeId: Scalars["ID"];
  translations: Array<BulkShippingRateTranslationInput>;
};

export type MutationUpdateCategoryTranslationsArgs = {
  storeId: Scalars["ID"];
  translations: Array<BulkCustomProductCategoryTranslationInput>;
};

export type MutationUpdateCollectionArgs = {
  input: CollectionInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateCollectionTranslationsArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
  translations: Array<CollectionTranslationInput>;
};

export type MutationUpdateCustomerArgs = {
  customerId: Scalars["ID"];
  input?: InputMaybe<UpdateCustomerUserInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateCustomerAddressArgs = {
  addressId: Scalars["ID"];
  customerId: Scalars["ID"];
  input: UpdateCustomerAddressInput;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateCustomerPasswordArgs = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type MutationUpdateIntegrationInstallationArgs = {
  input: UpdateIntegrationInstallationInput;
};

export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type MutationUpdateOrderPaymentMethodArgs = {
  orderId: Scalars["ID"];
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  storeId: Scalars["ID"];
};

export type MutationUpdateOrderPromoArgs = {
  input: UpdateOrderPromoInput;
};

export type MutationUpdateProductArgs = {
  input: ProductInput;
  locale: Scalars["String"];
};

export type MutationUpdateProductAttributeArgs = {
  input: UpdateProductAttributeInput;
};

export type MutationUpdateProductAttributeValueArgs = {
  input: UpdateProductAttributeValueInput;
};

export type MutationUpdateProductReviewsSettingsArgs = {
  input?: InputMaybe<UpdateProductReviewsSettingsInput>;
};

export type MutationUpdateProductTranslationsArgs = {
  id: Scalars["ID"];
  storeId?: InputMaybe<Scalars["ID"]>;
  translations: Array<ProductTranslationInput>;
};

export type MutationUpdateProductVariantArgs = {
  input: ProductVariantInput;
};

export type MutationUpdateProductVariantImageArgs = {
  input: ProductVariantImageInput;
};

export type MutationUpdateProductsStatusArgs = {
  input: UpdateProductsStatusInput;
};

export type MutationUpdateProductsVisibilityArgs = {
  input: UpdateProductsVisibilityInput;
  locale: Scalars["String"];
};

export type MutationUpdatePromoCodeArgs = {
  input: UpdatePromoCodeInput;
};

export type MutationUpdateResourceShippingRateCostArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<Array<InputMaybe<UpdateShippingRateCostInput>>>;
  storeId: Scalars["ID"];
};

export type MutationUpdateShippingRateArgs = {
  input: UpdateShippingRateInput;
  locale: Scalars["String"];
};

export type MutationUpdateShippingRateTranslationsArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
  translations: Array<ShippingRateTranslationInput>;
};

export type MutationUpdateShippingZoneArgs = {
  input: UpdateShippingZoneInput;
};

export type MutationUpdateShippingZoneV2Args = {
  input: UpdateShippingZoneInput;
};

export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateStoreAboutArgs = {
  about?: InputMaybe<AboutInput>;
  id: Scalars["ID"];
};

export type MutationUpdateStoreAnalyticalAccountArgs = {
  analyticalAccount: AnalyticalAccountInput;
  id: Scalars["ID"];
};

export type MutationUpdateStoreCheckoutArgs = {
  checkout: StoreCheckoutInput;
  id: Scalars["ID"];
};

export type MutationUpdateStoreColorsArgs = {
  colors: ThemeColorsInput;
  id: Scalars["ID"];
};

export type MutationUpdateStoreCustomCitiesArgs = {
  input: UpdateStoreCustomCitiesInput;
};

export type MutationUpdateStoreCustomCountriesArgs = {
  input: UpdateStoreCustomCountriesInput;
};

export type MutationUpdateStoreCustomRegionsArgs = {
  input: UpdateStoreCustomRegionsInput;
};

export type MutationUpdateStoreCustomStatesArgs = {
  input: UpdateStoreCustomStatesInput;
};

export type MutationUpdateStoreDomainArgs = {
  input: DomainInput;
};

export type MutationUpdateStoreFavIconArgs = {
  id: Scalars["ID"];
  image?: InputMaybe<ImageInput>;
};

export type MutationUpdateStoreFontsArgs = {
  fonts?: InputMaybe<Array<InputMaybe<FontInput>>>;
  id: Scalars["ID"];
};

export type MutationUpdateStoreFooterArgs = {
  footer?: InputMaybe<FooterInput>;
  id: Scalars["ID"];
};

export type MutationUpdateStoreHeroArgs = {
  heroSlider: Array<InputMaybe<StoreHomeHeroInput>>;
  id: Scalars["ID"];
};

export type MutationUpdateStoreHomeAttributesArgs = {
  input: Array<StoreHomeAttributesInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreHomeCollectionsArgs = {
  input: Array<StoreHomeCollectionsInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreHomeProductsArgs = {
  input: Array<StoreHomeProductsInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreInfoBarArgs = {
  id: Scalars["ID"];
  infoBar: InfoBarInput;
};

export type MutationUpdateStoreLegalPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  input?: InputMaybe<UpdateStoreLegalPageInput>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateStoreLogoArgs = {
  id: Scalars["ID"];
  image?: InputMaybe<ImageInput>;
};

export type MutationUpdateStoreMenuArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<UpdateStoreMenuInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateStorePageArgs = {
  id: Scalars["ID"];
  input: UpdateStorePageInput;
  storeId: Scalars["ID"];
};

export type MutationUpdateStorePageCatalogSectionArgs = {
  input: UpdateStorePageCatalogSectionInput;
  sectionId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationUpdateStorePageSectionArgs = {
  id: Scalars["ID"];
  input: UpdateStorePageSectionInput;
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreRedirectArgs = {
  newUrl: Scalars["String"];
  oldUrl: Scalars["String"];
  redirectId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreRobotsTxtArgs = {
  content: Scalars["String"];
  storeId: Scalars["ID"];
};

export type MutationUpdateStoreSocialMediaArgs = {
  id: Scalars["ID"];
  socialLinks?: InputMaybe<Array<InputMaybe<SocialLinkInput>>>;
};

export type MutationUpdateStoreStaticPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  input?: InputMaybe<UpdateStoreStaticPageInput>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateStoreStaticTemplateArgs = {
  id?: InputMaybe<Scalars["String"]>;
  input?: InputMaybe<UpdateTemplateInput>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateStoreTaxArgs = {
  input?: InputMaybe<UpdateTaxInput>;
  storeId: Scalars["ID"];
};

export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type MutationUpdateUserFlagsArgs = {
  email?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Array<InputMaybe<UserFlagInput>>>;
};

export type MutationUpdateUserStorePermissionsArgs = {
  permissions?: InputMaybe<UserStorePermissionInput>;
  storeId: Scalars["ID"];
  userId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdateZonePaymentMethodArgs = {
  paymentMethod: PaymentMethodInput;
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type MutationUploadTranslationsArgs = {
  locale: Locale;
  storeId: Scalars["ID"];
  translationSheetUrl: Scalars["String"];
};

export type MutationVerifyEmailArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

export enum NameInputOptions {
  FirstAndLast = "FIRST_AND_LAST",
  FirstOnly = "FIRST_ONLY",
}

export type NewPlanInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  interval: PricingInterval;
  name?: InputMaybe<Scalars["String"]>;
  price: MoneyInput;
  resource?: InputMaybe<PlanResourceType>;
  stripe_plan_id?: InputMaybe<Scalars["String"]>;
};

export type Node = {
  id: Scalars["ID"];
};

export type NodeEdge = {
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<Node>;
};

export type OptionProductsCount = {
  __typename?: "OptionProductsCount";
  count?: Maybe<Scalars["Int"]>;
  optionValue?: Maybe<ProductOptionValue>;
  optionValueId?: Maybe<Scalars["ID"]>;
};

export type OptionsToAssignInput = {
  optionId: Scalars["ID"];
  valueId: Scalars["ID"];
};

export type Order = Node & {
  __typename?: "Order";
  billingAddress: Address;
  createdAt: Scalars["DateTime"];
  customer: Customer;
  customerId: Scalars["ID"];
  discounts?: Maybe<Array<Maybe<DiscountSnapshot>>>;
  errors?: Maybe<Array<Maybe<CheckoutError>>>;
  externalActionMessage?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fulfillmentStatus?: Maybe<FulfillStatusEnum>;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  isCanceled: Scalars["Boolean"];
  isViewed: Scalars["Boolean"];
  items: Array<Maybe<BaseItem>>;
  notes?: Maybe<Scalars["String"]>;
  orderHistory?: Maybe<Array<Maybe<OrderHistory>>>;
  orderSerial?: Maybe<Scalars["ID"]>;
  paidAmount?: Maybe<Money>;
  paymentIntent?: Maybe<PaymentIntent>;
  paymentMethod?: Maybe<PaymentMethodEnum>;
  paymentStatus?: Maybe<OrderPaymentStatusEnum>;
  promoCode?: Maybe<PromoCode>;
  promoCodeSnapshot?: Maybe<PromoCode>;
  receipt?: Maybe<OrderReceipt>;
  refCode?: Maybe<Scalars["String"]>;
  reviews: Array<ProductReview>;
  shippingAddress: Address;
  shippingDetails?: Maybe<OrderShippingDetails>;
  shippingRate?: Maybe<ShippingRate>;
  shippingRateCost: Money;
  shippingRateName?: Maybe<Scalars["String"]>;
  shippingStatus?: Maybe<ShippingStatus>;
  status?: Maybe<OrderStatusEnum>;
  store: Store;
  storeId: Scalars["ID"];
  subtotal?: Maybe<Money>;
  taxSnapshot?: Maybe<Tax>;
  totalPrice?: Maybe<Money>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type OrderAggregatedAnalyticsReading = {
  __typename?: "OrderAggregatedAnalyticsReading";
  averageProfitPerOrder?: Maybe<Scalars["Float"]>;
  ordersCount?: Maybe<Scalars["Int"]>;
  readingIndex?: Maybe<Scalars["Int"]>;
  sales?: Maybe<Scalars["Float"]>;
};

export type OrderAnalytics = {
  __typename?: "OrderAnalytics";
  aggregatedAnalytics?: Maybe<Array<Maybe<OrderAggregatedAnalyticsReading>>>;
  topSellingProducts?: Maybe<Array<Maybe<TopSellingProduct>>>;
};

export type OrderAnalyticsAggregatedAnalyticsArgs = {
  aggregatedTimePeriod: Scalars["Int"];
  endAt: Scalars["DateTime"];
  startAt: Scalars["DateTime"];
};

export type OrderAnalyticsTopSellingProductsArgs = {
  during: Period;
  queryOptions?: InputMaybe<TopSellingProductsOptions>;
};

export type OrderConnection = {
  __typename?: "OrderConnection";
  edges?: Maybe<Array<Maybe<OrderEdge>>>;
  nodes?: Maybe<Array<Maybe<Order>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrderEdge = {
  __typename?: "OrderEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<Order>;
};

export enum OrderErrorEnum {
  CheckoutTimeout = "CHECKOUT_TIMEOUT",
  PaymentFailed = "PAYMENT_FAILED",
  QuantityNotAvailable = "QUANTITY_NOT_AVAILABLE",
}

export type OrderHistory = {
  __typename?: "OrderHistory";
  eventType: OrderHistoryTypes;
  id: Scalars["ID"];
  orderId: Scalars["ID"];
  payload: OrderHistoryPayload;
  shippingPayload?: Maybe<ShippingPayload>;
  storeId: Scalars["ID"];
  timestamp: Scalars["DateTime"];
  user?: Maybe<UserInfo>;
};

export type OrderHistoryInput = {
  comment?: InputMaybe<Scalars["String"]>;
  eventType: OrderHistoryTypes;
  orderId: Scalars["ID"];
  payload?: InputMaybe<CreateOrderInput>;
  storeId: Scalars["ID"];
};

export type OrderHistoryPayload = Comment | Order;

export enum OrderHistoryTypes {
  ItemsFulfilled = "ItemsFulfilled",
  ItemsFulfillmentCanceled = "ItemsFulfillment_canceled",
  ItemsFulfillmentUpdated = "ItemsFulfillment_updated",
  ItemsQuantityUpdated = "ItemsQuantity_updated",
  ItemsRemoved = "ItemsRemoved",
  ItemsUnFulfilled = "ItemsUnFulfilled",
  OrderArchived = "OrderArchived",
  OrderCanceled = "OrderCanceled",
  OrderComment = "OrderComment",
  OrderCreated = "OrderCreated",
  OrderPaid = "OrderPaid",
  OrderRefunded = "OrderRefunded",
  OrderUnArchive = "OrderUnArchive",
  OrderUncanceled = "OrderUncanceled",
  OrderUpdated = "OrderUpdated",
  OrderViewed = "OrderViewed",
  ShippingStatusUpdated = "ShippingStatus_updated",
}

export type OrderItemDiscountDetails = {
  __typename?: "OrderItemDiscountDetails";
  discountSource: DiscountSource;
  info: OrderItemDiscountDetailsInfo;
  perItem: Money;
  quantity: Scalars["Int"];
  total: Money;
};

export type OrderItemDiscountDetailsInfo = {
  __typename?: "OrderItemDiscountDetailsInfo";
  fixed?: Maybe<Money>;
  percentage?: Maybe<Scalars["Float"]>;
};

export type OrderItemDiscountDetailsInfoInput = {
  fixed?: InputMaybe<MoneyInput>;
  percentage?: InputMaybe<Scalars["Float"]>;
};

export type OrderItemDiscountDetailsInput = {
  discountSource: DiscountSource;
  info: OrderItemDiscountDetailsInfoInput;
  perItem: MoneyInput;
  quantity: Scalars["Int"];
  total: MoneyInput;
};

export enum OrderItemSourceType {
  Integration = "INTEGRATION",
  Manual = "MANUAL",
}

export type OrderPayment = {
  __typename?: "OrderPayment";
  id: Scalars["ID"];
  payment?: Maybe<OrderPayment>;
  paymentIntent?: Maybe<Array<Maybe<PaymentIntent>>>;
  paymentTransactions?: Maybe<Array<Maybe<PaymentTransaction>>>;
  status?: Maybe<OrderPaymentStatusEnum>;
};

export enum OrderPaymentStatusEnum {
  Failed = "FAILED",
  Paid = "PAID",
  Pending = "PENDING",
  Refunded = "REFUNDED",
}

export type OrderReceipt = {
  __typename?: "OrderReceipt";
  automaticDiscount?: Maybe<Money>;
  discount?: Maybe<Money>;
  shipping?: Maybe<Money>;
  subtotal?: Maybe<Money>;
  tax?: Maybe<Money>;
  total?: Maybe<Money>;
};

export type OrderSelectedOption = {
  __typename?: "OrderSelectedOption";
  name: Scalars["String"];
  value: Scalars["String"];
};

export type OrderSelectedOptionInput = {
  name: Scalars["String"];
  value: Scalars["String"];
};

export type OrderShippingDetails = {
  __typename?: "OrderShippingDetails";
  airWayBill?: Maybe<Scalars["String"]>;
  deliveryCompany?: Maybe<Scalars["String"]>;
  orderTrackingNumber?: Maybe<Scalars["String"]>;
  shippedWith?: Maybe<Integration>;
  shippingStatus?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["DateTime"]>;
  trackingURL?: Maybe<Scalars["String"]>;
};

export enum OrderSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  OrderSerial = "orderSerial",
  UpdatedAt = "updatedAt",
}

export enum OrderStatusEnum {
  Failed = "FAILED",
  Processing = "PROCESSING",
  Successful = "SUCCESSFUL",
}

export type OrderUpdateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  customer?: InputMaybe<CreateOrderCustomerInput>;
  newItems?: InputMaybe<Array<InputMaybe<CreateItemInput>>>;
  notes?: InputMaybe<Scalars["String"]>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingRateId?: InputMaybe<Scalars["ID"]>;
};

export type OrdersConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<OrderSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type OrdersFilterInput = {
  date?: InputMaybe<DateInput>;
  fulfillmentStatus?: InputMaybe<FulfillStatusEnum>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isCanceled?: InputMaybe<Scalars["Boolean"]>;
  orderId?: InputMaybe<Scalars["ID"]>;
  orderIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  paymentStatus?: InputMaybe<PaymentStatusEnum>;
  searchQuery?: InputMaybe<Scalars["String"]>;
};

export type OtoIntegrationSettings = {
  __typename?: "OtoIntegrationSettings";
  authorizationKey: Scalars["String"];
  provider: ProviderName;
};

export type PageEdge = {
  __typename?: "PageEdge";
  cursor: Scalars["ConnectionCursor"];
  node: StorePage;
};

export type PageFilterInput = {
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<PageStatusEnum>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["ConnectionCursor"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["ConnectionCursor"]>;
};

export type PageSection = {
  __typename?: "PageSection";
  id: Scalars["ID"];
  sectionType: SectionTypeEnum;
};

export type PageSectionInput = {
  id: Scalars["ID"];
  sectionType: SectionTypeEnum;
};

export type PageSeo = {
  __typename?: "PageSeo";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export enum PageSortByFields {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export enum PageStatusEnum {
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type PagesConnection = {
  __typename?: "PagesConnection";
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  nodes?: Maybe<Array<StorePage>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PagesConnectionInput = {
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<PageSortByFields>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ParagonIntegration = {
  __typename?: "ParagonIntegration";
  credentialId?: Maybe<Scalars["String"]>;
  enabled: Scalars["Boolean"];
  name: Scalars["String"];
  providerId?: Maybe<Scalars["String"]>;
  sharedSettings?: Maybe<Array<Maybe<ParagonIntegrationSharedSetting>>>;
  workflows?: Maybe<Array<Maybe<ParagonIntegrationWorkflow>>>;
};

export type ParagonIntegrationSharedSetting = {
  __typename?: "ParagonIntegrationSharedSetting";
  name: Scalars["String"];
  value: Scalars["String"];
};

export type ParagonIntegrationWorkflow = {
  __typename?: "ParagonIntegrationWorkflow";
  enabled: Scalars["Boolean"];
  name: Scalars["String"];
  settings?: Maybe<Array<Maybe<ParagonIntegrationWorkflowSetting>>>;
};

export type ParagonIntegrationWorkflowSetting = {
  __typename?: "ParagonIntegrationWorkflowSetting";
  name: Scalars["String"];
  value: Scalars["String"];
};

export type ParagonStoreIntegrations = Node & {
  __typename?: "ParagonStoreIntegrations";
  id: Scalars["ID"];
  integrations?: Maybe<Array<Maybe<ParagonIntegration>>>;
  storeId?: Maybe<Scalars["ID"]>;
};

export type Params = {
  __typename?: "Params";
  availableCurrency?: Maybe<Scalars["String"]>;
  availablePrice?: Maybe<Scalars["Float"]>;
  availableQuantity?: Maybe<Scalars["Int"]>;
  message?: Maybe<Scalars["String"]>;
  requestedCurrency?: Maybe<Scalars["String"]>;
  requestedPrice?: Maybe<Scalars["Float"]>;
  requestedQuantity?: Maybe<Scalars["Int"]>;
};

export type PaymentAccount = {
  __typename?: "PaymentAccount";
  accessToken?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  liveApiKey?: Maybe<Scalars["String"]>;
  moneyHashAccountEmbed?: Maybe<Scalars["String"]>;
  moneyHashId?: Maybe<Scalars["String"]>;
  testApiKey?: Maybe<Scalars["String"]>;
};

export enum PaymentCollectionMethod {
  Alinma = "ALINMA",
  AlRajhi = "AL_RAJHI",
  Automatic = "AUTOMATIC",
  CashOnHand = "CASH_ON_HAND",
  Chargedesk = "CHARGEDESK",
  Cib = "CIB",
  Free = "FREE",
  Paymob = "PAYMOB",
  SaudieInitiative = "SAUDIE_INITIATIVE",
  Tap = "TAP",
}

export type PaymentIntent = {
  __typename?: "PaymentIntent";
  embedUrl?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  key?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<PaymentMethodEnum>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  status?: Maybe<Scalars["String"]>;
};

export enum PaymentIntentStatusEnum {
  Cancelled = "CANCELLED",
  Done = "DONE",
  Expired = "EXPIRED",
  Pending = "PENDING",
  PendingExternalAction = "PENDING_EXTERNAL_ACTION",
  Successful = "SUCCESSFUL",
  Unprocessed = "UNPROCESSED",
}

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  gatewayId: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  provider?: Maybe<StorePaymentProvider>;
};

export enum PaymentMethodEnum {
  AmanMasary = "AMAN_MASARY",
  ApplePay = "APPLE_PAY",
  BankInstallments = "BANK_INSTALLMENTS",
  BankTransfers = "BANK_TRANSFERS",
  Card = "CARD",
  CashCollection = "CASH_COLLECTION",
  CashOnDelivary = "CASH_ON_DELIVARY",
  CashOnDelivery = "CASH_ON_DELIVERY",
  CashOutlet = "CASH_OUTLET",
  CryptoWallet = "CRYPTO_WALLET",
  Knet = "KNET",
  MobileMoney = "MOBILE_MONEY",
  MobileWallet = "MOBILE_WALLET",
  MPesa = "M_PESA",
  Naps = "NAPS",
  None = "NONE",
  OnlinePayment = "ONLINE_PAYMENT",
  Paypal = "PAYPAL",
  PayAtFawry = "PAY_AT_FAWRY",
  ReferenceNumber = "REFERENCE_NUMBER",
  SamsungPay = "SAMSUNG_PAY",
  SelfserveWallet = "SELFSERVE_WALLET",
  Shahry = "SHAHRY",
  Ussd = "USSD",
  Valu = "VALU",
}

export type PaymentMethodInput = {
  enabled: Scalars["Boolean"];
  type: StorePaymentMethods;
};

export enum PaymentProvider {
  Internal = "INTERNAL",
  Stripe = "STRIPE",
  VodafoneHub = "VODAFONE_HUB",
}

export type PaymentSource = Node & {
  __typename?: "PaymentSource";
  card?: Maybe<Card>;
  collectionMethod: Scalars["String"];
  id: Scalars["ID"];
  provider: PaymentProvider;
  providerId: Scalars["ID"];
  type: PaymentSourceType;
};

export type PaymentSourceInput = {
  card?: InputMaybe<CardSourceInput>;
  id?: InputMaybe<Scalars["ID"]>;
  type?: InputMaybe<PaymentSourceType>;
};

export enum PaymentSourceType {
  BankDeposit = "BANK_DEPOSIT",
  Card = "CARD",
  Cash = "CASH",
  Initiative = "INITIATIVE",
  PaymentLink = "PAYMENT_LINK",
  VodafoneHub = "VODAFONE_HUB",
}

export enum PaymentStatusEnum {
  Paid = "PAID",
  Pending = "PENDING",
  Refunded = "REFUNDED",
}

export type PaymentTransaction = {
  __typename?: "PaymentTransaction";
  id: Scalars["ID"];
};

export type Period = {
  endAt?: InputMaybe<Scalars["DateTime"]>;
  startAt?: InputMaybe<Scalars["DateTime"]>;
};

export type Permission = {
  __typename?: "Permission";
  permissions?: Maybe<Array<Maybe<StoreUserPermission>>>;
  role?: Maybe<PermissionRole>;
  storeId: Scalars["ID"];
};

export enum PermissionAction {
  Create = "CREATE",
  Delete = "DELETE",
  Read = "READ",
  Update = "UPDATE",
}

export type PermissionDetails = {
  __typename?: "PermissionDetails";
  apiKey?: Maybe<Scalars["String"]>;
  apiKeyName?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  permissions: Array<StoreUserPermission>;
  storeId: Scalars["ID"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userAccessType: UserAccessType;
  userId: Scalars["ID"];
};

export enum PermissionResource {
  Account = "ACCOUNT",
  Analytics = "ANALYTICS",
  Catalog = "CATALOG",
  Customer = "CUSTOMER",
  Discount = "DISCOUNT",
  Domain = "DOMAIN",
  Integration = "INTEGRATION",
  Order = "ORDER",
  Page = "PAGE",
  Review = "REVIEW",
  Shipping = "SHIPPING",
  Store = "STORE",
  StorePayment = "STORE_PAYMENT",
  Subscription = "SUBSCRIPTION",
}

export enum PermissionRole {
  Custom = "CUSTOM",
  Owner = "OWNER",
  SuperAdmin = "SUPER_ADMIN",
}

export type Plan = Node & {
  __typename?: "Plan";
  active: Scalars["Boolean"];
  features: Array<Feature>;
  handle: Scalars["String"];
  id: Scalars["ID"];
  interval: PricingInterval;
  name: Scalars["String"];
  price: Money;
  resource: Scalars["String"];
  stripe_plan_id?: Maybe<Scalars["String"]>;
  translations: Array<PlanTranslations>;
  visible: Scalars["Boolean"];
};

export enum PlanResourceType {
  Site = "Site",
  Store = "Store",
}

export type PlanSubscription = {
  __typename?: "PlanSubscription";
  active: Scalars["Boolean"];
  amountDue: Money;
  cancelAt?: Maybe<Scalars["DateTime"]>;
  cancelAtPeriodEnd?: Maybe<Scalars["Boolean"]>;
  canceledAt?: Maybe<Scalars["DateTime"]>;
  collectionMethod?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  currentPeriodEnd?: Maybe<Scalars["DateTime"]>;
  currentPeriodStart?: Maybe<Scalars["DateTime"]>;
  downgradePlan?: Maybe<Plan>;
  endedAt?: Maybe<Scalars["DateTime"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invoices: Array<Invoice>;
  name: Scalars["String"];
  paymentMethod?: Maybe<Scalars["String"]>;
  paymentSource?: Maybe<PaymentSource>;
  plan: Plan;
  promotionCode?: Maybe<PromotionCode>;
  resource?: Maybe<SubscriptionResource>;
  site?: Maybe<Site>;
  startedAt: Scalars["DateTime"];
  status: SubscriptionStatus;
  trialDays: Scalars["Int"];
  user?: Maybe<User>;
};

export type PlanTranslations = {
  __typename?: "PlanTranslations";
  features: Array<Feature>;
  locale: Scalars["String"];
};

export type PriceRange = {
  max?: InputMaybe<Scalars["Float"]>;
  min?: InputMaybe<Scalars["Float"]>;
};

export enum PricingInterval {
  Month = "MONTH",
  Year = "YEAR",
}

export type Product = Node & {
  __typename?: "Product";
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  categories?: Maybe<Array<Maybe<CustomProductCategory>>>;
  collections: ProductCollectionConnection;
  createdAt: Scalars["DateTime"];
  descriptionHtml?: Maybe<Scalars["HTML"]>;
  discount?: Maybe<CustomProductDiscount>;
  handle: Scalars["String"];
  id: Scalars["ID"];
  images: Array<Maybe<Image>>;
  initialPrice?: Maybe<Money>;
  integrationCategory?: Maybe<Scalars["String"]>;
  integrationInstallationId?: Maybe<Scalars["String"]>;
  integrationProvider?: Maybe<IntegrationProviderDetails>;
  isArchived: Scalars["Boolean"];
  isInStock: Scalars["Boolean"];
  isVisible: Scalars["Boolean"];
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  options?: Maybe<Array<Maybe<ProductOption>>>;
  reviews?: Maybe<Array<ProductReview>>;
  reviewsStatistics: ProductReviewsStatistics;
  seo?: Maybe<ProductSeo>;
  shortDescription?: Maybe<Scalars["String"]>;
  source?: Maybe<SourceType>;
  status: ProductStatus;
  store: Store;
  storeId: Scalars["ID"];
  title: Scalars["String"];
  totalVariants: Scalars["Int"];
  translations: Array<ProductTranslation>;
  type?: Maybe<ProductType>;
  updatedAt: Scalars["DateTime"];
  variants?: Maybe<ProductVariantConnection>;
};

export type ProductReviewsArgs = {
  connection: ReviewsConnectionInput;
};

export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  reverse?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductAttribute = Node & {
  __typename?: "ProductAttribute";
  handle: Scalars["String"];
  id: Scalars["ID"];
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  name: Scalars["String"];
  translations: Array<ProductAttributeTranslation>;
  type?: Maybe<ProductAttributeType>;
  values: Array<ProductAttributeValue>;
};

export type ProductAttributeFilterInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ProductAttributeTranslation = {
  __typename?: "ProductAttributeTranslation";
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type ProductAttributeTranslationInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
};

export enum ProductAttributeType {
  Image = "IMAGE",
  Text = "TEXT",
}

export type ProductAttributeValue = Node & {
  __typename?: "ProductAttributeValue";
  attribute?: Maybe<ProductAttribute>;
  handle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Image>;
  locale?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<ProductAttributeValueTranslation>>>;
};

export type ProductAttributeValueTranslation = {
  __typename?: "ProductAttributeValueTranslation";
  locale?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ProductAttributeValueTranslationInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type ProductCollection = Node & {
  __typename?: "ProductCollection";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  descriptionHtml?: Maybe<Scalars["String"]>;
  handle: Scalars["String"];
  hasProduct: Scalars["Boolean"];
  id: Scalars["ID"];
  image?: Maybe<Image>;
  isArchived?: Maybe<Scalars["Boolean"]>;
  isDeleted?: Maybe<Scalars["Boolean"]>;
  isVisible?: Maybe<Scalars["Boolean"]>;
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  products: ProductConnection;
  productsCount: Scalars["Int"];
  seo?: Maybe<ProductCollectionSeo>;
  shortDescription?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<TranslatedCollection>>>;
  updatedAt: Scalars["DateTime"];
};

export type ProductCollectionHasProductArgs = {
  id: Scalars["ID"];
};

export type ProductCollectionProductsArgs = {
  connection?: InputMaybe<CollectionProductsConnectionInput>;
  filter?: InputMaybe<ProductsFilterInput>;
};

export type ProductCollectionConnection = {
  __typename?: "ProductCollectionConnection";
  edges?: Maybe<Array<Maybe<ProductCollectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCollection>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProductCollectionConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ProductCollectionSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ProductCollectionEdge = {
  __typename?: "ProductCollectionEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ProductCollection>;
};

export type ProductCollectionFilterInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ProductCollectionSeo = {
  __typename?: "ProductCollectionSEO";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type ProductCollectionSeoInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export enum ProductCollectionSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ProductConnection = {
  __typename?: "ProductConnection";
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  nodes: Array<Product>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProductEdge = {
  __typename?: "ProductEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<Product>;
};

export type ProductInput = {
  attributes?: InputMaybe<Array<InputMaybe<Attribute>>>;
  categories?: InputMaybe<Array<InputMaybe<CustomProductCategoryInput>>>;
  collectionsToJoin?: InputMaybe<Array<Scalars["ID"]>>;
  collectionsToLeave?: InputMaybe<Array<Scalars["ID"]>>;
  descriptionHtml?: InputMaybe<Scalars["String"]>;
  discount?: InputMaybe<CustomProductDiscountInput>;
  handle?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  initialPrice?: InputMaybe<MoneyInput>;
  integrationCategory?: InputMaybe<Scalars["String"]>;
  integrationInstallationId?: InputMaybe<Scalars["String"]>;
  integrationProvider?: InputMaybe<IntegrationProviderDetailsInput>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<Array<ProductOptionInput>>;
  seo?: InputMaybe<ProductSeoInput>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<SourceType>;
  specifications?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ProductStatus>;
  storeId?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  translations?: InputMaybe<Array<InputMaybe<ProductTranslationInput>>>;
  type?: InputMaybe<ProductType>;
  variants?: InputMaybe<Array<InputMaybe<ProductVariantInput>>>;
};

export type ProductMove = {
  id: Scalars["ID"];
  newPosition: Scalars["Int"];
};

export type ProductOption = Node & {
  __typename?: "ProductOption";
  handle: Scalars["String"];
  id: Scalars["ID"];
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  name: Scalars["String"];
  position: Scalars["Int"];
  translations: Array<ProductOptionTranslation>;
  values: Array<ProductOptionValue>;
};

export type ProductOptionInput = {
  handle?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  position: Scalars["Int"];
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type ProductOptionTranslation = {
  __typename?: "ProductOptionTranslation";
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type ProductOptionTranslationInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type ProductOptionValue = Node & {
  __typename?: "ProductOptionValue";
  handle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  option?: Maybe<ProductOption>;
  translations?: Maybe<Array<Maybe<ProductOptionValueTranslation>>>;
};

export type ProductOptionValueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  optionId?: InputMaybe<Scalars["ID"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type ProductOptionValueTranslation = {
  __typename?: "ProductOptionValueTranslation";
  locale?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ProductOptionValueTranslationInput = {
  locale: Scalars["String"];
  name: Scalars["String"];
};

export type ProductPreview = {
  __typename?: "ProductPreview";
  description?: Maybe<Scalars["String"]>;
  status?: Maybe<ProductStatus>;
  title?: Maybe<Scalars["String"]>;
  variants?: Maybe<Array<Maybe<VariantPreview>>>;
};

export type ProductReview = {
  __typename?: "ProductReview";
  content?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  customer?: Maybe<CustomerUser>;
  customerId: Scalars["ID"];
  headline: Scalars["String"];
  id: Scalars["ID"];
  isViewed: Scalars["Boolean"];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars["ID"]>;
  product: Product;
  productId: Scalars["ID"];
  rating: Scalars["Int"];
  reply?: Maybe<StoreAdminReply>;
  showName: Scalars["Boolean"];
  snapshotForSearch?: Maybe<SnapshotForSearch>;
  status: ReviewStatus;
  storeId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
};

export type ProductReviewsStatistics = {
  __typename?: "ProductReviewsStatistics";
  average: Scalars["Float"];
  starsCount: ProductStarsCount;
  total: Scalars["Int"];
};

export type ProductSeo = {
  __typename?: "ProductSEO";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type ProductSeoInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ProductSalesAnalytics = {
  __typename?: "ProductSalesAnalytics";
  discounts?: Maybe<Scalars["Float"]>;
  tax?: Maybe<Scalars["Float"]>;
  totalPrice?: Maybe<Scalars["Float"]>;
  totalQuantitySold?: Maybe<Scalars["Int"]>;
  totalSales?: Maybe<Scalars["Float"]>;
};

export type ProductSnapshot = {
  __typename?: "ProductSnapshot";
  categories?: Maybe<Array<Maybe<CustomProductSnapshotCategory>>>;
  collectionIds: Array<Maybe<Scalars["ID"]>>;
  createdAt: Scalars["DateTime"];
  descriptionHtml?: Maybe<Scalars["HTML"]>;
  discount?: Maybe<CustomProductSnapshotDiscount>;
  handle: Scalars["String"];
  id: Scalars["ID"];
  images: Array<Maybe<Image>>;
  initialPrice?: Maybe<Money>;
  integrationProvider?: Maybe<IntegrationProviderDetailsSnapshot>;
  isArchived: Scalars["Boolean"];
  isVisible: Scalars["Boolean"];
  locale: Scalars["String"];
  options: Array<Scalars["ID"]>;
  seo?: Maybe<ProductSnapshotSeo>;
  shortDescription?: Maybe<Scalars["String"]>;
  status: ProductSnapshotStatus;
  storeId: Scalars["ID"];
  title: Scalars["String"];
  type: ProductSnapshotType;
  updatedAt: Scalars["DateTime"];
};

export type ProductSnapshotSeo = {
  __typename?: "ProductSnapshotSEO";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export enum ProductSnapshotStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Unlisted = "UNLISTED",
}

export enum ProductSnapshotType {
  Custom = "CUSTOM",
  Simple = "SIMPLE",
}

export enum ProductSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  Price = "price",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ProductStarsCount = {
  __typename?: "ProductStarsCount";
  five: Scalars["Int"];
  four: Scalars["Int"];
  one: Scalars["Int"];
  three: Scalars["Int"];
  two: Scalars["Int"];
};

export enum ProductStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Unlisted = "UNLISTED",
}

export enum ProductStatusFilter {
  Active = "ACTIVE",
  All = "ALL",
  Draft = "DRAFT",
  Unlisted = "UNLISTED",
}

export type ProductTranslation = {
  __typename?: "ProductTranslation";
  descriptionHtml?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  seo?: Maybe<ProductSeo>;
  shortDescription: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
};

export type ProductTranslationInput = {
  descriptionHtml?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  seo?: InputMaybe<ProductSeoInput>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ProductTranslationOutput = {
  __typename?: "ProductTranslationOutput";
  id: Scalars["ID"];
  translations: Array<ProductTranslation>;
};

export enum ProductType {
  All = "ALL",
  Custom = "CUSTOM",
  Simple = "SIMPLE",
}

export type ProductVariant = Node & {
  __typename?: "ProductVariant";
  cartLimitsEnabled?: Maybe<Scalars["Boolean"]>;
  compareAtPrice?: Maybe<Money>;
  cost?: Maybe<Money>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayName: Scalars["String"];
  externalId?: Maybe<Scalars["String"]>;
  handle: Scalars["String"];
  id: Scalars["ID"];
  image?: Maybe<Image>;
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  maxPerCart?: Maybe<Scalars["Int"]>;
  minPerCart?: Maybe<Scalars["Int"]>;
  position: Scalars["Int"];
  price: Money;
  product: Product;
  productId: Scalars["ID"];
  quantity?: Maybe<Scalars["Int"]>;
  selectedOptions: Array<SelectedOption>;
  sku?: Maybe<Scalars["String"]>;
  store: Store;
  storeId: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  trackQuantity?: Maybe<Scalars["Boolean"]>;
  translations?: Maybe<Array<Maybe<TranslatedProductVariant>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProductVariantConnection = {
  __typename?: "ProductVariantConnection";
  nodes: Array<ProductVariant>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProductVariantImageInput = {
  id: Scalars["ID"];
  imageId?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type ProductVariantInput = {
  cartLimitsEnabled?: InputMaybe<Scalars["Boolean"]>;
  compareAtPrice?: InputMaybe<MoneyInput>;
  cost?: InputMaybe<MoneyInput>;
  id?: InputMaybe<Scalars["ID"]>;
  imageId?: InputMaybe<Scalars["String"]>;
  maxPerCart?: InputMaybe<Scalars["Int"]>;
  minPerCart?: InputMaybe<Scalars["Int"]>;
  options?: InputMaybe<Array<Scalars["String"]>>;
  price?: InputMaybe<MoneyInput>;
  productId?: InputMaybe<Scalars["ID"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  sku?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  trackQuantity?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductVariantSnapshot = {
  __typename?: "ProductVariantSnapshot";
  compareAtPrice?: Maybe<Money>;
  createdAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Image>;
  price: Money;
  productId: Scalars["ID"];
  productImages?: Maybe<Array<Maybe<Image>>>;
  productTitle?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  selectedOptionValuesIds: Array<Scalars["ID"]>;
  sku?: Maybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  trackQuantity?: Maybe<Scalars["Boolean"]>;
  updatedAt: Scalars["DateTime"];
};

export type ProductVariantStatus = {
  __typename?: "ProductVariantStatus";
  id: Scalars["ID"];
  quantity?: Maybe<Scalars["Int"]>;
  status: ProductStatus;
  trackQuantity?: Maybe<Scalars["Boolean"]>;
};

export type ProductsConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ProductSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ProductsFilterInput = {
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]>;
  maxPrice?: InputMaybe<Scalars["Float"]>;
  minPrice?: InputMaybe<Scalars["Float"]>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  showDeleted?: InputMaybe<Scalars["Boolean"]>;
  source?: InputMaybe<SourceType>;
  status?: InputMaybe<ProductStatusFilter>;
  storeIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<ProductType>;
};

export type PromoCode = {
  __typename?: "PromoCode";
  code: Scalars["String"];
  fixedAmount?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  numberOfUsage?: Maybe<Scalars["Int"]>;
  percentageOff?: Maybe<Scalars["Float"]>;
  status: PromoCodeStatusEnum;
  storeId: Scalars["ID"];
  type?: Maybe<PromoCodeTypeEnum>;
};

export type PromoCodeEdge = {
  __typename?: "PromoCodeEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<PromoCode>;
};

export type PromoCodeInput = {
  code: Scalars["String"];
  fixedAmount?: InputMaybe<Scalars["Float"]>;
  percentageOff?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<PromoCodeStatusEnum>;
  storeId: Scalars["ID"];
  type?: InputMaybe<PromoCodeTypeEnum>;
  usageLimit?: InputMaybe<Scalars["Int"]>;
};

export enum PromoCodeStatusEnum {
  Active = "ACTIVE",
  All = "ALL",
  Inactive = "INACTIVE",
}

export enum PromoCodeTypeEnum {
  FixedAmount = "FIXED_AMOUNT",
  Percentage = "PERCENTAGE",
}

export type PromoCodesConnection = {
  __typename?: "PromoCodesConnection";
  edges?: Maybe<Array<Maybe<PromoCodeEdge>>>;
  nodes?: Maybe<Array<Maybe<PromoCode>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PromotionCode = {
  __typename?: "PromotionCode";
  active: Scalars["Boolean"];
  code: Scalars["String"];
  coupon: Coupon;
  created: Scalars["Int"];
  expires_at: Scalars["Int"];
  id: Scalars["String"];
  max_redemptions: Scalars["Int"];
};

export enum ProviderName {
  Aliexpress = "Aliexpress",
  Facebook = "Facebook",
  Fatoora = "Fatoora",
  GoogleMerchant = "GoogleMerchant",
  Knawat = "Knawat",
  Oto = "OTO",
  SnapChat = "SnapChat",
  Taager = "Taager",
  TikTok = "TikTok",
}

export type PurchaseDomainInput = {
  contact: ContactInput;
  domainName: Scalars["String"];
  resourceId?: InputMaybe<Scalars["ID"]>;
};

export type PurchaseDomainResult = {
  __typename?: "PurchaseDomainResult";
  domain?: Maybe<Domain>;
  domainId: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  apiKeyDetails: Array<Maybe<PermissionDetails>>;
  canAddCustomProducts?: Maybe<Scalars["Boolean"]>;
  canAddGoogleTagManager?: Maybe<Scalars["Boolean"]>;
  canAddMoreLanguages?: Maybe<Scalars["Boolean"]>;
  canAddMoreProducts?: Maybe<Scalars["Boolean"]>;
  canAddMoreStaffAccounts?: Maybe<Scalars["Boolean"]>;
  canEnableMoreShippingLevels?: Maybe<Scalars["Boolean"]>;
  canEnableMoreSocialIntegrations?: Maybe<Scalars["Boolean"]>;
  checkVariantsStatus: Array<Maybe<ProductVariantStatus>>;
  collection?: Maybe<ProductCollection>;
  collections?: Maybe<ProductCollectionConnection>;
  customerAddresses: Array<CustomerAddress>;
  customerLogin?: Maybe<Scalars["String"]>;
  customerLoginV2?: Maybe<Scalars["String"]>;
  customerOrders?: Maybe<CustomerUser>;
  discount?: Maybe<Discount>;
  discounts?: Maybe<Array<Maybe<Discount>>>;
  domain?: Maybe<RegisteredDomain>;
  domainClaim: DomainClaim;
  domainClaimForResource?: Maybe<DomainClaim>;
  findPromotionCode?: Maybe<PromotionCode>;
  fullTextSearchAndFilter?: Maybe<SearchAndFilterResults>;
  getAllProducts: DropshippingProductConnection;
  getApplicableFilters?: Maybe<CatalogFilters>;
  getCategories?: Maybe<Array<DropshippingCategory>>;
  getParagonIntegrations?: Maybe<ParagonStoreIntegrations>;
  getParagonUserToken?: Maybe<Scalars["String"]>;
  getProductsByCategory?: Maybe<Array<Maybe<DropshippingProduct>>>;
  getShippingIntegrationCustomFieldValues?: Maybe<
    Array<Maybe<ShippingProviderLocation>>
  >;
  getStoreRedirect?: Maybe<Scalars["String"]>;
  getStoreRedirects?: Maybe<Array<StoreRedirect>>;
  getStoreRobotsTxt?: Maybe<RobotsTxt>;
  image?: Maybe<Image>;
  installation?: Maybe<IntegrationInstallation>;
  integration?: Maybe<Integration>;
  integrationsList?: Maybe<IntegrationConnection>;
  isAttributeUsedInProduct?: Maybe<Scalars["Boolean"]>;
  isAttributeValueUsedInProduct?: Maybe<Scalars["Boolean"]>;
  listCustomerReviews: Array<ProductReview>;
  listReviews: ReviewsConnection;
  me?: Maybe<CustomerUser>;
  order?: Maybe<Order>;
  orders?: Maybe<OrderConnection>;
  page?: Maybe<StorePage>;
  paymentIntent?: Maybe<PaymentIntent>;
  paymentIntentByOrderId?: Maybe<PaymentIntent>;
  paymentSource?: Maybe<PaymentSource>;
  paymentSources?: Maybe<Array<Maybe<PaymentSource>>>;
  plan: Plan;
  plans: Array<Plan>;
  product?: Maybe<Product>;
  productAttribute?: Maybe<ProductAttribute>;
  productAttributeValue?: Maybe<ProductAttributeValue>;
  productAttributeValues?: Maybe<Array<Maybe<ProductAttributeValue>>>;
  productAttributes: Array<Maybe<ProductAttribute>>;
  productOption?: Maybe<ProductOption>;
  productOptions: Array<ProductOption>;
  productOptionsValues: Array<ProductOptionValue>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<ProductVariantConnection>;
  products: ProductConnection;
  promoCode?: Maybe<PromoCode>;
  promoCodeByCode?: Maybe<PromoCode>;
  promoCodes?: Maybe<PromoCodesConnection>;
  regexSearchAndFilter?: Maybe<SearchAndFilterResults>;
  searchCatalog?: Maybe<CatalogSearchResults>;
  searchRegisterDomain: Array<DomainSearchResult>;
  shippingRate?: Maybe<ShippingRate>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  shippingZone?: Maybe<ShippingZone>;
  shippingZones?: Maybe<ShippingZoneConnection>;
  store?: Maybe<Store>;
  storeAnalytics?: Maybe<StoreAnalytics>;
  storeByDomain?: Maybe<Store>;
  storeByHandle?: Maybe<Store>;
  storeCheckoutPaymentMethods?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  storeCollectionByHandle?: Maybe<ProductCollection>;
  storeCustomers?: Maybe<CustomerUserConnection>;
  storeHomeCatalog?: Maybe<StoreHomeCatalog>;
  storeLegalPageByHandle?: Maybe<StoreLegalPage>;
  storeLegalPageById?: Maybe<StoreLegalPage>;
  storeMenus?: Maybe<Array<Maybe<StoreMenu>>>;
  storePageByHandle?: Maybe<StorePage>;
  storePages?: Maybe<PagesConnection>;
  storePaymentAccount?: Maybe<PaymentAccount>;
  storePaymentMethods?: Maybe<Array<Maybe<StorePaymentMethod>>>;
  storeProductByHandle?: Maybe<Product>;
  storeReviewsSettings?: Maybe<StoreReviewsSettings>;
  /** @deprecated Use storeLegalPageByHandle instead */
  storeStaticPageByHandle?: Maybe<StoreStaticPage>;
  /** @deprecated Use storeLegalPageById instead */
  storeStaticPageById?: Maybe<StoreStaticPage>;
  storeStaticTemplates?: Maybe<Array<Maybe<StoreStaticTemplate>>>;
  storeSubscription?: Maybe<PlanSubscription>;
  storeTax?: Maybe<Tax>;
  storeUser?: Maybe<Array<StoreUser>>;
  storeUsers?: Maybe<StoreUserConnection>;
  stores?: Maybe<Array<Maybe<Store>>>;
  storesList?: Maybe<StoreConnection>;
  subscription?: Maybe<PlanSubscription>;
  subscriptions: Array<PlanSubscription>;
  textIndexSearchAndFilter?: Maybe<SearchAndFilterResults>;
  userByEmail?: Maybe<User>;
  userPermissions?: Maybe<Array<StoreUser>>;
  userRequest?: Maybe<UserRequestStatus>;
  userStores?: Maybe<Array<Maybe<Store>>>;
  validateAndPreviewBulkTranslateFile?: Maybe<BulkTranslatePreviewResult>;
  validateAndPreviewBulkUploadFile?: Maybe<BulkUploadPreviewResult>;
  validateSocialIntegrationInstallation?: Maybe<Scalars["Boolean"]>;
};

export type QueryApiKeyDetailsArgs = {
  apiKeyId?: InputMaybe<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type QueryCanAddCustomProductsArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanAddGoogleTagManagerArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanAddMoreLanguagesArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanAddMoreProductsArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanAddMoreStaffAccountsArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanEnableMoreShippingLevelsArgs = {
  storeId: Scalars["ID"];
};

export type QueryCanEnableMoreSocialIntegrationsArgs = {
  storeId: Scalars["ID"];
};

export type QueryCheckVariantsStatusArgs = {
  storeId: Scalars["ID"];
  variantIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type QueryCollectionArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryCollectionsArgs = {
  connection?: InputMaybe<ProductCollectionConnectionInput>;
  filter?: InputMaybe<ProductCollectionFilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type QueryCustomerAddressesArgs = {
  customerId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryCustomerLoginArgs = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["String"]>;
};

export type QueryCustomerLoginV2Args = {
  password: Scalars["String"];
  phoneOrEmail: Scalars["String"];
  storeId: Scalars["String"];
};

export type QueryCustomerOrdersArgs = {
  connection?: InputMaybe<OrdersConnectionInput>;
  id: Scalars["ID"];
};

export type QueryDiscountArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryDiscountsArgs = {
  storeId: Scalars["ID"];
};

export type QueryDomainArgs = {
  id: Scalars["ID"];
};

export type QueryDomainClaimArgs = {
  id: Scalars["ID"];
};

export type QueryDomainClaimForResourceArgs = {
  resourceId: Scalars["ID"];
};

export type QueryFindPromotionCodeArgs = {
  coupon: Scalars["String"];
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryFullTextSearchAndFilterArgs = {
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
  storeId: Scalars["ID"];
};

export type QueryGetAllProductsArgs = {
  connection: DropshippingProductConnectionInput;
  installationId: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeCurrency?: InputMaybe<CurrencyCode>;
  storeId: Scalars["ID"];
};

export type QueryGetApplicableFiltersArgs = {
  storeId: Scalars["ID"];
};

export type QueryGetCategoriesArgs = {
  installationId: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryGetParagonIntegrationsArgs = {
  storeId: Scalars["ID"];
};

export type QueryGetParagonUserTokenArgs = {
  storeId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetProductsByCategoryArgs = {
  category: Scalars["String"];
  installationId: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryGetShippingIntegrationCustomFieldValuesArgs = {
  fieldName: Scalars["String"];
  integrationId: Scalars["ID"];
  parentId?: InputMaybe<Scalars["ID"]>;
};

export type QueryGetStoreRedirectArgs = {
  storeId: Scalars["ID"];
  url: Scalars["String"];
};

export type QueryGetStoreRedirectsArgs = {
  storeId: Scalars["ID"];
};

export type QueryGetStoreRobotsTxtArgs = {
  storeId: Scalars["ID"];
};

export type QueryImageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  storeId: Scalars["ID"];
};

export type QueryInstallationArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryIntegrationArgs = {
  integrationId: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type QueryIntegrationsListArgs = {
  connection?: InputMaybe<IntegrationConnectionInput>;
  filter?: InputMaybe<FilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type QueryIsAttributeUsedInProductArgs = {
  attributeId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryIsAttributeValueUsedInProductArgs = {
  attributeId: Scalars["ID"];
  storeId: Scalars["ID"];
  valueId: Scalars["ID"];
};

export type QueryListCustomerReviewsArgs = {
  input: ListCustomerReviewsInput;
};

export type QueryListReviewsArgs = {
  input: SearchReviewsInput;
};

export type QueryOrderArgs = {
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryOrdersArgs = {
  connection?: InputMaybe<OrdersConnectionInput>;
  filter?: InputMaybe<OrdersFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryPageArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryPaymentIntentArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryPaymentIntentByOrderIdArgs = {
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryPaymentSourcesArgs = {
  type?: InputMaybe<PaymentSourceType>;
};

export type QueryPlanArgs = {
  id: Scalars["ID"];
};

export type QueryProductArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryProductAttributeArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryProductAttributeValueArgs = {
  attributeId: Scalars["ID"];
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryProductAttributeValuesArgs = {
  attributeId: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryProductAttributesArgs = {
  filter?: InputMaybe<ProductAttributeFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryProductOptionArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryProductOptionsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryProductOptionsValuesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  optionId: Scalars["ID"];
  search?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryProductVariantArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryProductVariantsArgs = {
  productId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryProductsArgs = {
  connection?: InputMaybe<ProductsConnectionInput>;
  filter?: InputMaybe<ProductsFilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type QueryPromoCodeArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryPromoCodeByCodeArgs = {
  code: Scalars["String"];
  storeId: Scalars["ID"];
};

export type QueryPromoCodesArgs = {
  connection?: InputMaybe<PromoCodesConnectionInput>;
  filter?: InputMaybe<PromoCodesFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryRegexSearchAndFilterArgs = {
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
  storeId: Scalars["ID"];
};

export type QuerySearchCatalogArgs = {
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
  storeId: Scalars["ID"];
};

export type QuerySearchRegisterDomainArgs = {
  query: Scalars["String"];
};

export type QueryShippingRateArgs = {
  shippingRateId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryShippingRatesArgs = {
  filter?: InputMaybe<ShippingRatesFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryShippingZoneArgs = {
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryShippingZonesArgs = {
  connection?: InputMaybe<ShippingZonesConnectionInput>;
  filter?: InputMaybe<ShippingZonesFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryStoreArgs = {
  id: Scalars["ID"];
};

export type QueryStoreAnalyticsArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreByDomainArgs = {
  domainName: Scalars["String"];
};

export type QueryStoreByHandleArgs = {
  handle: Scalars["String"];
};

export type QueryStoreCheckoutPaymentMethodsArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreCollectionByHandleArgs = {
  handle: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryStoreCustomersArgs = {
  connection?: InputMaybe<CustomersConnectionInput>;
  filter?: InputMaybe<CustomerSchemaFilterInput>;
  storeId: Scalars["ID"];
};

export type QueryStoreHomeCatalogArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreLegalPageByHandleArgs = {
  input?: InputMaybe<StaticPageStoreByHandleInput>;
};

export type QueryStoreLegalPageByIdArgs = {
  id: Scalars["ID"];
};

export type QueryStoreMenusArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type QueryStorePageByHandleArgs = {
  handle: Scalars["String"];
  storeId: Scalars["ID"];
};

export type QueryStorePagesArgs = {
  connection: PagesConnectionInput;
  filter: PageFilterInput;
  locale?: InputMaybe<Locale>;
  storeId: Scalars["ID"];
};

export type QueryStorePaymentAccountArgs = {
  storeId: Scalars["ID"];
};

export type QueryStorePaymentMethodsArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreProductByHandleArgs = {
  handle?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type QueryStoreReviewsSettingsArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreStaticPageByHandleArgs = {
  input?: InputMaybe<StaticPageStoreByHandleInput>;
};

export type QueryStoreStaticPageByIdArgs = {
  id: Scalars["ID"];
};

export type QueryStoreSubscriptionArgs = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type QueryStoreTaxArgs = {
  storeId: Scalars["ID"];
};

export type QueryStoreUserArgs = {
  storeId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type QueryStoreUsersArgs = {
  connections?: InputMaybe<StoreUsersConnectionInput>;
  storeId: Scalars["ID"];
};

export type QueryStoresListArgs = {
  connection?: InputMaybe<StoreConnectionInput>;
  filter?: InputMaybe<SchemaFilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type QuerySubscriptionArgs = {
  id: Scalars["ID"];
};

export type QueryTextIndexSearchAndFilterArgs = {
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
  storeId: Scalars["ID"];
};

export type QueryUserByEmailArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

export type QueryUserPermissionsArgs = {
  userId: Scalars["ID"];
};

export type QueryUserRequestArgs = {
  id: Scalars["ID"];
};

export type QueryUserStoresArgs = {
  userId: Scalars["ID"];
};

export type QueryValidateAndPreviewBulkTranslateFileArgs = {
  locale: Locale;
  storeId: Scalars["ID"];
  translationSheetUrl: Scalars["String"];
};

export type QueryValidateAndPreviewBulkUploadFileArgs = {
  productsFileURL: Scalars["String"];
  shouldOverwrite?: InputMaybe<Scalars["Boolean"]>;
  storeId: Scalars["ID"];
};

export type QueryValidateSocialIntegrationInstallationArgs = {
  authHeader?: InputMaybe<Scalars["String"]>;
  provider: ProviderName;
  storeId: Scalars["ID"];
};

export type Region = IRegion & {
  __typename?: "Region";
  cityId: Scalars["ID"];
  code?: Maybe<Scalars["String"]>;
  countryId: Scalars["ID"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type RegionConnection = {
  __typename?: "RegionConnection";
  edges?: Maybe<Array<Maybe<RegionEdge>>>;
  nodes?: Maybe<Array<Maybe<Region>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RegionEdge = {
  __typename?: "RegionEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<Region>;
};

export type RegionInput = {
  id: Scalars["ID"];
};

export type RegionUnion = RegionConnection | ZoneRegionConnection;

export type RegisteredDomain = {
  __typename?: "RegisteredDomain";
  createdAt: Scalars["String"];
  dnsRecords: Array<DnsRecord>;
  endTime?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  mainResource?: Maybe<Resource>;
  name: Scalars["String"];
  status: Scalars["String"];
  updatedAt: Scalars["String"];
  user: User;
  verificationStatus: Scalars["String"];
};

export type RemoveItemsInput = {
  items: Array<InputMaybe<Scalars["ID"]>>;
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type ReorderItemsInput = {
  moves: Array<MoveSectionItemsInput>;
};

export type ReorderOptionsInProductPayload = {
  __typename?: "ReorderOptionsInProductPayload";
  product?: Maybe<Product>;
};

export type ReorderProductMediaPayload = {
  __typename?: "ReorderProductMediaPayload";
  product?: Maybe<Product>;
};

export type ReorderProductsInCollectionPayload = {
  __typename?: "ReorderProductsInCollectionPayload";
  collection?: Maybe<ProductCollection>;
};

export enum RequestStatus {
  Failed = "FAILED",
  Pending = "PENDING",
  Succeeded = "SUCCEEDED",
}

export enum RequestType {
  BulkTranslate = "BULK_TRANSLATE",
  BulkUpload = "BULK_UPLOAD",
}

export type Resource = Site | Store;

export type ResourceSubscription = {
  __typename?: "ResourceSubscription";
  plan: Plan;
  resourceId: Scalars["String"];
  resourceName: Scalars["String"];
  subscription: PlanSubscription;
};

export type ReviewEdge = {
  __typename?: "ReviewEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ProductReview>;
};

export type ReviewFilters = {
  ratings?: InputMaybe<Array<Scalars["Int"]>>;
  status?: InputMaybe<ReviewStatus>;
  storeId?: InputMaybe<Scalars["String"]>;
};

export type ReviewManagementInput = {
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  isViewed?: InputMaybe<Scalars["Boolean"]>;
  reply?: InputMaybe<Scalars["String"]>;
};

export enum ReviewStatus {
  Published = "Published",
  Unpublished = "Unpublished",
}

export type ReviewsConnection = {
  __typename?: "ReviewsConnection";
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes?: Maybe<Array<ProductReview>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReviewsConnectionInput = {
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ReviewsSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export enum ReviewsSortByField {
  CreatedAt = "createdAt",
  Rating = "rating",
  Status = "status",
  UpdatedAt = "updatedAt",
}

export type RobotsTxt = {
  __typename?: "RobotsTxt";
  content: Scalars["String"];
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type SchemaFilterInput = {
  email?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type SearchAndFilterResults = {
  __typename?: "SearchAndFilterResults";
  products?: Maybe<Array<Maybe<Product>>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type SearchReviewsInput = {
  connection?: InputMaybe<ReviewsConnectionInput>;
  filters?: InputMaybe<ReviewFilters>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  query?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["String"];
};

export enum SearchingMechanism {
  AllProductSearch = "AllProductSearch",
  CategorySearch = "CategorySearch",
  TextSearch = "TextSearch",
}

export type SectionAttributesRow = {
  __typename?: "SectionAttributesRow";
  attributeValues: Array<ProductAttributeValue>;
  background?: Maybe<SectionBackground>;
  displayAs: DisplayAsEnum;
  header: Scalars["String"];
  id: Scalars["ID"];
  itemsPerRow: Scalars["Int"];
  locale: Scalars["String"];
  showItemName: Scalars["Boolean"];
  showSectionHeader: Scalars["Boolean"];
  storeId: Scalars["ID"];
  stretchToFullWidth: Scalars["Boolean"];
  translations: Array<SectionAttributesTranslation>;
  type: SectionTypeEnum;
};

export type SectionAttributesRowBody = {
  __typename?: "SectionAttributesRowBody";
  attributeValues: Array<ProductAttributeValue>;
};

export type SectionAttributesTranslation = {
  __typename?: "SectionAttributesTranslation";
  header?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type SectionBackground = {
  __typename?: "SectionBackground";
  color?: Maybe<Scalars["String"]>;
  type?: Maybe<SectionBackgroundTypeEnum>;
};

export enum SectionBackgroundTypeEnum {
  Color = "COLOR",
  None = "NONE",
}

export type SectionBanners = {
  __typename?: "SectionBanners";
  banners?: Maybe<Array<Banner>>;
  type: SectionTypeEnum;
};

export type SectionBody =
  | SectionAttributesRow
  | SectionBanners
  | SectionCollectionsRow
  | SectionContent
  | SectionProductsRow
  | SectionVideos;

export type SectionCollectionsRow = {
  __typename?: "SectionCollectionsRow";
  background?: Maybe<SectionBackground>;
  collections: Array<ProductCollection>;
  displayAs: DisplayAsEnum;
  header: Scalars["String"];
  id: Scalars["ID"];
  itemsPerRow: Scalars["Int"];
  locale: Scalars["String"];
  showItemName: Scalars["Boolean"];
  showSectionHeader: Scalars["Boolean"];
  storeId: Scalars["ID"];
  stretchToFullWidth: Scalars["Boolean"];
  translations: Array<StorePageCollectionsTranslation>;
  type: SectionTypeEnum;
};

export type SectionCollectionsRowBody = {
  __typename?: "SectionCollectionsRowBody";
  collections: Array<ProductCollection>;
};

export type SectionContent = {
  __typename?: "SectionContent";
  content: Scalars["String"];
  type: SectionTypeEnum;
};

export type SectionProductsRow = {
  __typename?: "SectionProductsRow";
  background?: Maybe<SectionBackground>;
  displayAs: DisplayAsEnum;
  fromCollection?: Maybe<ProductCollection>;
  header: Scalars["String"];
  id: Scalars["ID"];
  itemsPerRow: Scalars["Int"];
  locale: Scalars["String"];
  products: Array<Maybe<Product>>;
  productsDisplayNumber: Scalars["Int"];
  showSectionHeader: Scalars["Boolean"];
  storeId: Scalars["ID"];
  stretchToFullWidth: Scalars["Boolean"];
  translations: Array<StorePageProductsTranslation>;
  type: SectionTypeEnum;
};

export type SectionProductsRowBody = {
  __typename?: "SectionProductsRowBody";
  fromCollection?: Maybe<ProductCollection>;
  products: Array<Maybe<Product>>;
  productsDisplayNumber: Scalars["Int"];
};

export type SectionTranslations = {
  __typename?: "SectionTranslations";
  banners?: Maybe<Array<Banner>>;
  content?: Maybe<Scalars["String"]>;
  header?: Maybe<Scalars["String"]>;
  locale?: Maybe<Locale>;
};

export enum SectionTypeEnum {
  AttributesRow = "ATTRIBUTES_ROW",
  Banner = "BANNER",
  CollectionsRow = "COLLECTIONS_ROW",
  Embed = "EMBED",
  ProductsRow = "PRODUCTS_ROW",
  Text = "TEXT",
  Video = "VIDEO",
}

export type SectionVideos = {
  __typename?: "SectionVideos";
  type: SectionTypeEnum;
  videosUrls?: Maybe<Array<Scalars["String"]>>;
};

export type SelectedOption = {
  __typename?: "SelectedOption";
  option: ProductOption;
  value: ProductOptionValue;
};

export type SelectedVariant = {
  __typename?: "SelectedVariant";
  price?: Maybe<Money>;
  quantity: Scalars["Int"];
  selectedOptions: Array<SelectedVariantOption>;
  variant: ProductVariant;
  variantSnapshot?: Maybe<ProductVariantSnapshot>;
};

export type SelectedVariantOption = {
  __typename?: "SelectedVariantOption";
  name: Scalars["String"];
  value: Scalars["String"];
};

export type SeoInput = {
  description?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type Settings =
  | FacebookSalesChannelSettings
  | FatooraSettings
  | GoogleMerchantSalesChannelSettings
  | IntegrationProviderNoSettings
  | KanwatIntegrationSettings
  | OtoIntegrationSettings
  | SnapChatSalesChannelSettings
  | TikTokSalesChannelSettings;

export type ShipOrdersInput = {
  integrationId: Scalars["ID"];
  shippedOrders: Array<ShippedOrder>;
  storeId: Scalars["ID"];
};

export enum ShipmentStatus {
  AddressConfirmed = "addressConfirmed",
  ArrivedDestination = "arrivedDestination",
  ArrivedDestinationTerminal = "arrivedDestinationTerminal",
  ArrivedOriginTerminal = "arrivedOriginTerminal",
  ArrivedPickup = "arrivedPickup",
  AssignedToWarehouse = "assignedToWarehouse",
  BranchAssigned = "branchAssigned",
  Canceled = "canceled",
  ConfirmedReturn = "confirmedReturn",
  Delivered = "delivered",
  Failed = "failed",
  GoingToPickup = "goingToPickup",
  InTransit = "inTransit",
  New = "new",
  OutForDelivery = "outForDelivery",
  PickedUp = "pickedUp",
  PickupFromStore = "pickupFromStore",
  ReturnProcessing = "returnProcessing",
  ReturnShipmentProcessing = "returnShipmentProcessing",
  Returned = "returned",
  SearchingDriver = "searchingDriver",
  SentTo = "sent_to",
  ShipmentCanceled = "shipmentCanceled",
  ShipmentCreated = "shipmentCreated",
  ShipmentInProgress = "shipmentInProgress",
  ShipmentOnHold = "shipmentOnHold",
  ShipmentOnHoldToCancel = "shipmentOnHoldToCancel",
  ShipmentOnHoldWarehouse = "shipmentOnHoldWarehouse",
  UndeliveredAttempt = "undeliveredAttempt",
  WaitingAddressConfirmation = "waitingAddressConfirmation",
}

export type ShippedOrder = {
  mappedAddress?: InputMaybe<MappedShippingAddress>;
  orderId: Scalars["ID"];
};

export type ShippingPayload = {
  __typename?: "ShippingPayload";
  payload?: Maybe<ShipPayload>;
};

export type ShippingProviderLocation = {
  __typename?: "ShippingProviderLocation";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ShippingRate = Node & {
  __typename?: "ShippingRate";
  cost: Money;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  name: Scalars["String"];
  shippingZone: ShippingZone;
  storeId: Scalars["ID"];
  translations?: Maybe<Array<ShippingRateTranslation>>;
};

export type ShippingRateInput = {
  cost: MoneyInput;
  name: Scalars["String"];
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<ShippingRateTranslationInput>>>;
};

export type ShippingRateTranslation = {
  __typename?: "ShippingRateTranslation";
  locale: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
};

export type ShippingRateTranslationInput = {
  locale: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
};

export type ShippingRatesInput = {
  cityId?: InputMaybe<Scalars["ID"]>;
  countryId?: InputMaybe<Scalars["ID"]>;
  regionId?: InputMaybe<Scalars["ID"]>;
  stateId?: InputMaybe<Scalars["ID"]>;
};

export enum ShippingStatus {
  DataFullfilled = "DATA_FULLFILLED",
  Pending = "PENDING",
}

export type ShippingZone = {
  __typename?: "ShippingZone";
  countries?: Maybe<ZoneCountryConnection>;
  country?: Maybe<ZoneCountry>;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  name: Scalars["String"];
  settings?: Maybe<ShippingZoneSettings>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  storeId: Scalars["ID"];
  zonePaymentMethods?: Maybe<StoreZoneAllowedMethods>;
};

export type ShippingZoneCountryArgs = {
  id: Scalars["ID"];
};

export type ShippingZoneShippingRatesArgs = {
  filter?: InputMaybe<ShippingRatesFilterInput>;
};

export type ShippingZoneConnection = {
  __typename?: "ShippingZoneConnection";
  edges?: Maybe<Array<Maybe<ShippingZoneEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingZone>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ShippingZoneEdge = {
  __typename?: "ShippingZoneEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ShippingZone>;
};

export type ShippingZoneInput = {
  countries: Array<InputMaybe<ZoneCountryInput>>;
  name: Scalars["String"];
  storeId: Scalars["ID"];
};

export type ShippingZoneSettings = {
  __typename?: "ShippingZoneSettings";
  isAdvanced?: Maybe<Scalars["Boolean"]>;
  isCityLevelActive?: Maybe<Scalars["Boolean"]>;
  isRegionLevelActive?: Maybe<Scalars["Boolean"]>;
};

export type ShippingZoneSettingsInput = {
  isAdvanced?: InputMaybe<Scalars["Boolean"]>;
  isCityLevelActive?: InputMaybe<Scalars["Boolean"]>;
  isRegionLevelActive?: InputMaybe<Scalars["Boolean"]>;
};

export enum ShippingZoneSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  UpdatedAt = "updatedAt",
}

export type ShippingZonesConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ShippingZoneSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type SimpleItem = BaseItem & {
  __typename?: "SimpleItem";
  discount?: Maybe<OrderItemDiscountDetails>;
  fulfilledItems?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  price?: Maybe<Money>;
  product: Product;
  productSnapshot?: Maybe<ProductSnapshot>;
  quantity: Scalars["Int"];
  selectedOptions: Array<SelectedVariantOption>;
  sourceType: OrderItemSourceType;
  subtotal?: Maybe<Money>;
  title?: Maybe<Scalars["String"]>;
  variant: ProductVariant;
  variantSnapshot?: Maybe<ProductVariantSnapshot>;
};

export type Site = {
  __typename?: "Site";
  activeSubscription?: Maybe<PlanSubscription>;
  id: Scalars["ID"];
  plan?: Maybe<Plan>;
  registeredDomain?: Maybe<RegisteredDomain>;
  subscription?: Maybe<PlanSubscription>;
  subscriptions: Array<PlanSubscription>;
};

export type SnapChatSalesChannelSettings = {
  __typename?: "SnapChatSalesChannelSettings";
  password: Scalars["String"];
  provider: ProviderName;
  username: Scalars["String"];
};

export type SnapshotForSearch = {
  __typename?: "SnapshotForSearch";
  customerEmail?: Maybe<Scalars["String"]>;
  customerName?: Maybe<Scalars["String"]>;
  customerPhone?: Maybe<Scalars["String"]>;
  productTitle?: Maybe<Scalars["String"]>;
};

export type SocialLink = {
  __typename?: "SocialLink";
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SocialLinkInput = {
  link: Scalars["String"];
  name: Scalars["String"];
};

export type SocialLinkType = {
  __typename?: "SocialLinkType";
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export enum SourceType {
  Integration = "INTEGRATION",
  Manual = "MANUAL",
}

export type StagedMediaUploadTarget = {
  __typename?: "StagedMediaUploadTarget";
  parameters: Array<StagedUploadParameter>;
  resourceUrl: Scalars["String"];
  url: Scalars["String"];
};

export type StagedUploadCreateInput = {
  fileSize?: InputMaybe<Scalars["String"]>;
  filename: Scalars["String"];
  httpMethod: Scalars["String"];
  mimeType?: InputMaybe<Scalars["String"]>;
  resource?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type StagedUploadParameter = {
  __typename?: "StagedUploadParameter";
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type StagedUploadsCreatePayload = {
  __typename?: "StagedUploadsCreatePayload";
  stagedTargets: Array<StagedMediaUploadTarget>;
};

export type State = {
  __typename?: "State";
  cities?: Maybe<CityConnection>;
  city?: Maybe<City>;
  code?: Maybe<Scalars["String"]>;
  countryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  isReserved?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  numOfCities?: Maybe<Scalars["Int"]>;
  storeId?: Maybe<Scalars["ID"]>;
};

export type StateCityArgs = {
  id: Scalars["ID"];
};

export type StateConnection = {
  __typename?: "StateConnection";
  edges?: Maybe<Array<Maybe<StateEdge>>>;
  nodes?: Maybe<Array<Maybe<State>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StateEdge = {
  __typename?: "StateEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<State>;
};

export type StateInput = {
  cities: Array<InputMaybe<CityInput>>;
  id: Scalars["ID"];
};

export type StateUnion = StateConnection | ZoneStateConnection;

export enum StaticPageEnum {
  Contact = "Contact",
  Home = "Home",
  Shop = "Shop",
}

export type StaticPageStoreByHandleInput = {
  handle?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["String"]>;
};

export type Store = Node & {
  __typename?: "Store";
  StoreHomePageSections?: Maybe<Array<Maybe<StorePageSection>>>;
  activeSubscription?: Maybe<PlanSubscription>;
  adminContactInfo?: Maybe<ContactInfo>;
  analyticalAccounts?: Maybe<Array<Maybe<AnalyticalAccount>>>;
  appearance?: Maybe<StoreAppearance>;
  areReviewsActivated: Scalars["Boolean"];
  automaticDiscounts?: Maybe<Array<Maybe<Discount>>>;
  baseLocale: Scalars["String"];
  checkout?: Maybe<Checkout>;
  collections?: Maybe<ProductCollectionConnection>;
  contactInfo?: Maybe<ContactInfo>;
  countries?: Maybe<CountryConnection>;
  country?: Maybe<Country>;
  createdAt: Scalars["DateTime"];
  currency: Scalars["String"];
  currencyRates?: Maybe<Array<Maybe<CurrencyRate>>>;
  currentSubscription?: Maybe<PlanSubscription>;
  customCheckoutSetting?: Maybe<CustomCheckoutSetting>;
  defaultLocale: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain?: Maybe<Domain>;
  expiredAt?: Maybe<Scalars["DateTime"]>;
  fallbackLocale: Scalars["String"];
  favIcon?: Maybe<Image>;
  handle: Scalars["String"];
  homeCatalog?: Maybe<StoreHomeCatalog>;
  homeCollections?: Maybe<StoreHomeCollectionsRows>;
  homeProducts?: Maybe<StoreHomeProductsRows>;
  id: Scalars["ID"];
  industry?: Maybe<Scalars["String"]>;
  isExpired?: Maybe<Scalars["Boolean"]>;
  legalPages?: Maybe<Array<Maybe<StoreLegalPage>>>;
  locale: Scalars["String"];
  locales: Array<Scalars["String"]>;
  location?: Maybe<Location>;
  logo?: Maybe<StoreLogo>;
  name: Scalars["String"];
  orderHistory?: Maybe<Array<Maybe<OrderHistory>>>;
  orders?: Maybe<OrderConnection>;
  owner?: Maybe<User>;
  pages?: Maybe<Array<Maybe<StorePage>>>;
  paragonIntegrations?: Maybe<ParagonStoreIntegrations>;
  plan?: Maybe<Plan>;
  products: ProductConnection;
  redirects?: Maybe<Array<StoreRedirect>>;
  registeredDomain?: Maybe<RegisteredDomain>;
  robotsTxt?: Maybe<RobotsTxt>;
  seo?: Maybe<StoreSeo>;
  shippingRate?: Maybe<ShippingRate>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  shippingZone?: Maybe<ShippingZone>;
  shippingZones?: Maybe<ShippingZoneConnection>;
  socialMedia?: Maybe<Array<Maybe<SocialLinkType>>>;
  /** @deprecated use legalPages instead */
  staticPages?: Maybe<Array<Maybe<StoreStaticPage>>>;
  storeReviewSettings?: Maybe<StoreReviewsSettings>;
  subscription?: Maybe<PlanSubscription>;
  subscriptions: Array<PlanSubscription>;
  supportedLocales: Array<Scalars["String"]>;
  tax?: Maybe<Tax>;
  timezone?: Maybe<Scalars["String"]>;
  translations: Array<StoreTranslation>;
  trialRemainingDays: Scalars["Int"];
  unViewedOrders?: Maybe<Scalars["Int"]>;
  unViewedReviews: Scalars["Int"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userId: Scalars["ID"];
  weekOrders?: Maybe<Scalars["Int"]>;
  weekRevenue?: Maybe<Money>;
};

export type StoreCollectionsArgs = {
  connection?: InputMaybe<ProductCollectionConnectionInput>;
  filter?: InputMaybe<ProductCollectionFilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StoreCountryArgs = {
  id: Scalars["ID"];
};

export type StoreOrdersArgs = {
  connection?: InputMaybe<OrdersConnectionInput>;
};

export type StoreProductsArgs = {
  connection?: InputMaybe<ProductsConnectionInput>;
  filter?: InputMaybe<ProductsFilterInput>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StoreShippingRateArgs = {
  id: Scalars["ID"];
};

export type StoreShippingRatesArgs = {
  input?: InputMaybe<ShippingRatesInput>;
};

export type StoreShippingZoneArgs = {
  id: Scalars["ID"];
};

export type StoreShippingZonesArgs = {
  connection?: InputMaybe<ShippingZonesConnectionInput>;
};

export type StoreAboutTranslation = {
  __typename?: "StoreAboutTranslation";
  content?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
};

export type StoreAdminReply = {
  __typename?: "StoreAdminReply";
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type StoreAnalytics = {
  __typename?: "StoreAnalytics";
  orderAnalytics?: Maybe<OrderAnalytics>;
};

export type StoreApiKeyPermissions = {
  __typename?: "StoreApiKeyPermissions";
  permissions: Array<StoreUserPermission>;
  storeId: Scalars["ID"];
};

export type StoreAppearance = {
  __typename?: "StoreAppearance";
  about?: Maybe<AboutType>;
  colors?: Maybe<ThemeColors>;
  fonts?: Maybe<Array<Maybe<FontType>>>;
  footer?: Maybe<FooterType>;
  heroSlider?: Maybe<Array<Maybe<StoreHomeHero>>>;
  infoBar?: Maybe<InfoBar>;
  menus?: Maybe<Array<Maybe<StoreMenu>>>;
  template?: Maybe<Template>;
};

export type StoreBannerInput = {
  bannerLink?: InputMaybe<LinkInput>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ImageInput>;
  mobileImage?: InputMaybe<ImageInput>;
};

export type StoreCard = {
  __typename?: "StoreCard";
  brand: Scalars["String"];
  expMonth: Scalars["String"];
  expYear: Scalars["String"];
  id: Scalars["ID"];
  last4: Scalars["String"];
  name: Scalars["String"];
};

export type StoreCheckoutInput = {
  locale: Scalars["String"];
  successMessage?: InputMaybe<Scalars["String"]>;
};

export type StoreCheckoutTranslation = {
  __typename?: "StoreCheckoutTranslation";
  locale: Scalars["String"];
  successMessage?: Maybe<Scalars["String"]>;
};

export enum StoreCitiesByField {
  CreatedAt = "createdAt",
  Id = "id",
  UpdatedAt = "updatedAt",
}

export type StoreConnection = {
  __typename?: "StoreConnection";
  nodes?: Maybe<Array<Maybe<Store>>>;
  totalCount: Scalars["Int"];
};

export type StoreConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<StoreSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type StoreDataInput = {
  domain: Scalars["String"];
  email?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
};

export type StoreFontsInput = {
  category?: InputMaybe<Scalars["String"]>;
  fontFamily?: InputMaybe<Scalars["String"]>;
  isItalic?: InputMaybe<Scalars["Boolean"]>;
  locale: Scalars["String"];
  type?: InputMaybe<FontTypeEnum>;
  typeFace?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["String"]>;
};

export type StoreFontsTranslationInput = {
  category?: InputMaybe<Scalars["String"]>;
  fontFamily?: InputMaybe<Scalars["String"]>;
  isItalic?: InputMaybe<Scalars["Boolean"]>;
  locale: Scalars["String"];
  type?: InputMaybe<FontTypeEnum>;
  typeFace?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["String"]>;
};

export type StoreFooterTranslation = {
  __typename?: "StoreFooterTranslation";
  customPart?: Maybe<Scalars["String"]>;
  endPart?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  startPart?: Maybe<Scalars["String"]>;
};

export type StoreGateway = {
  __typename?: "StoreGateway";
  id: Scalars["ID"];
  provider?: Maybe<StorePaymentProvider>;
};

export type StoreHomeAttributes = {
  __typename?: "StoreHomeAttributes";
  attributeValues?: Maybe<Array<ProductAttributeValue>>;
  attributeValuesPerRow?: Maybe<Scalars["Int"]>;
  displayAs?: Maybe<DisplayAsEnum>;
  headerText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale: Scalars["String"];
  showAttributeName?: Maybe<Scalars["Boolean"]>;
  stretchToFullWidth?: Maybe<Scalars["Boolean"]>;
  translations: Array<StoreHomeAttributesTranslation>;
};

export type StoreHomeAttributesInput = {
  attributeValuesIds: Array<Scalars["ID"]>;
  attributeValuesPerRow?: InputMaybe<Scalars["Int"]>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  headerText?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  locale: Scalars["String"];
  showAttributeName?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
};

export type StoreHomeAttributesRows = {
  __typename?: "StoreHomeAttributesRows";
  id: Scalars["ID"];
  rows: Array<StoreHomeAttributes>;
};

export type StoreHomeAttributesTranslation = {
  __typename?: "StoreHomeAttributesTranslation";
  headerText?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StoreHomeAttributesTranslationInput = {
  headerText?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  rowId: Scalars["ID"];
};

export type StoreHomeCatalog = {
  __typename?: "StoreHomeCatalog";
  attributesRows?: Maybe<Array<StoreHomeAttributes>>;
  collectionsRows?: Maybe<Array<StoreHomeCollections>>;
  id: Scalars["ID"];
  productsRows?: Maybe<Array<StoreHomeProducts>>;
};

export type StoreHomeCollections = {
  __typename?: "StoreHomeCollections";
  collections?: Maybe<Array<Maybe<ProductCollection>>>;
  collectionsPerRow?: Maybe<Scalars["Int"]>;
  displayAs?: Maybe<DisplayAsEnum>;
  headerText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale: Scalars["String"];
  showCollectionName?: Maybe<Scalars["Boolean"]>;
  stretchToFullWidth?: Maybe<Scalars["Boolean"]>;
  translations: Array<StoreHomeCollectionsTranslation>;
};

export type StoreHomeCollectionsInput = {
  collectionsId: Array<Scalars["ID"]>;
  collectionsPerRow?: InputMaybe<Scalars["Int"]>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  headerText?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  locale: Scalars["String"];
  showCollectionName?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
};

export type StoreHomeCollectionsRows = {
  __typename?: "StoreHomeCollectionsRows";
  id: Scalars["ID"];
  rows: Array<Maybe<StoreHomeCollections>>;
};

export type StoreHomeCollectionsTranslation = {
  __typename?: "StoreHomeCollectionsTranslation";
  headerText?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StoreHomeCollectionsTranslationInput = {
  headerText?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  rowId: Scalars["ID"];
};

export type StoreHomeHero = {
  __typename?: "StoreHomeHero";
  align?: Maybe<Scalars["String"]>;
  buttons?: Maybe<Array<Maybe<Button>>>;
  headingText?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Image>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mobileImage?: Maybe<Image>;
  subHeadingColor?: Maybe<Scalars["String"]>;
  subHeadingSize?: Maybe<Scalars["Int"]>;
  subHeadingText?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreHomeHeroTranslation>>>;
};

export type StoreHomeHeroInput = {
  align?: InputMaybe<Scalars["String"]>;
  buttons?: InputMaybe<Array<InputMaybe<ButtonInput>>>;
  headingText?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<ImageInput>;
  locale: Scalars["String"];
  mobileImage?: InputMaybe<ImageInput>;
  subHeadingColor?: InputMaybe<Scalars["String"]>;
  subHeadingSize?: InputMaybe<Scalars["Int"]>;
  subHeadingText?: InputMaybe<Scalars["String"]>;
};

export type StoreHomeHeroSliderTranslationInput = {
  heroId: Scalars["ID"];
  translations?: InputMaybe<Array<InputMaybe<StoreHomeHeroTranslationInput>>>;
};

export type StoreHomeHeroTranslation = {
  __typename?: "StoreHomeHeroTranslation";
  buttons?: Maybe<Array<Maybe<ButtonTranslationItem>>>;
  headingText?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  subHeadingText?: Maybe<Scalars["String"]>;
};

export type StoreHomeHeroTranslationInput = {
  buttons?: InputMaybe<Array<InputMaybe<ButtonTranslationItemInput>>>;
  headingText?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  subHeadingText?: InputMaybe<Scalars["String"]>;
};

export type StoreHomeProducts = {
  __typename?: "StoreHomeProducts";
  displayAs?: Maybe<DisplayAsEnum>;
  fromCollection?: Maybe<ProductCollection>;
  headerText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale?: Maybe<Scalars["String"]>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsDisplayNumber?: Maybe<Scalars["Int"]>;
  stretchToFullWidth?: Maybe<Scalars["Boolean"]>;
  translations: Array<StoreHomeProductsTranslation>;
};

export type StoreHomeProductsInput = {
  displayAs?: InputMaybe<DisplayAsEnum>;
  fromCollectionId: Scalars["ID"];
  headerText?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  locale: Scalars["String"];
  productsDisplayNumber?: InputMaybe<Scalars["Int"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
};

export type StoreHomeProductsRows = {
  __typename?: "StoreHomeProductsRows";
  id: Scalars["ID"];
  rows: Array<StoreHomeProducts>;
};

export type StoreHomeProductsTranslation = {
  __typename?: "StoreHomeProductsTranslation";
  headerText?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StoreHomeProductsTranslationInput = {
  headerText?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  rowId: Scalars["ID"];
};

export type StoreLegalPage = {
  __typename?: "StoreLegalPage";
  handle: Scalars["String"];
  htmlTemplate?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreLegalPageTranslation>>>;
};

export type StoreLegalPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type StoreLegalPageTranslation = {
  __typename?: "StoreLegalPageTranslation";
  htmlTemplate?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type StoreLocation = {
  __typename?: "StoreLocation";
  address: Scalars["String"];
  lat?: Maybe<Scalars["String"]>;
  long?: Maybe<Scalars["String"]>;
};

export type StoreLocationInput = {
  address: Scalars["String"];
  lat?: InputMaybe<Scalars["String"]>;
  long?: InputMaybe<Scalars["String"]>;
};

export type StoreLogo = {
  __typename?: "StoreLogo";
  height?: Maybe<Scalars["Int"]>;
  image?: Maybe<Image>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type StoreMenu = {
  __typename?: "StoreMenu";
  handle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  items?: Maybe<Array<Maybe<StoreMenuItem>>>;
  storeId: Scalars["ID"];
  title: Scalars["String"];
};

export type StoreMenuItem = {
  __typename?: "StoreMenuItem";
  handle?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  link?: Maybe<MenuLink>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  parentId?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  translations?: Maybe<Array<Maybe<StoreMenuItemTranslation>>>;
  type: MenuItemType;
};

export type StoreMenuItemTranslation = {
  __typename?: "StoreMenuItemTranslation";
  id: Scalars["ID"];
  locale?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type StoreMenuItemTranslationInput = {
  id: Scalars["ID"];
  locale: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
};

export type StorePage = {
  __typename?: "StorePage";
  handle: Scalars["String"];
  id: Scalars["ID"];
  locale?: Maybe<Locale>;
  name: Scalars["String"];
  pageType: StorePageTypeEnum;
  sections: Array<Maybe<StorePageSection>>;
  seo?: Maybe<PageSeo>;
  status: PageStatusEnum;
  storeId: Scalars["ID"];
  translations?: Maybe<Array<Maybe<StorePageTranslation>>>;
};

export type StorePageCatalogSection = {
  __typename?: "StorePageCatalogSection";
  background?: Maybe<SectionBackground>;
  body?: Maybe<CatalogSectionBody>;
  displayAs: DisplayAsEnum;
  header: Scalars["String"];
  id: Scalars["ID"];
  itemsPerRow: Scalars["Int"];
  locale: Scalars["String"];
  showItemName: Scalars["Boolean"];
  showSectionHeader: Scalars["Boolean"];
  storeId: Scalars["ID"];
  stretchToFullWidth: Scalars["Boolean"];
  translations: Array<Maybe<StorePageCatalogSectionTranslation>>;
  type: SectionTypeEnum;
};

export type StorePageCatalogSectionTranslation = {
  __typename?: "StorePageCatalogSectionTranslation";
  header?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StorePageCatalogSectionTranslationInput = {
  header?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StorePageCollectionsTranslation = {
  __typename?: "StorePageCollectionsTranslation";
  header?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StorePageProductsTranslation = {
  __typename?: "StorePageProductsTranslation";
  header?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StorePageSection = {
  __typename?: "StorePageSection";
  background?: Maybe<SectionBackground>;
  body: SectionBody;
  displayAs?: Maybe<DisplayAsEnum>;
  header?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  itemsPerRow?: Maybe<Scalars["Int"]>;
  locale?: Maybe<Locale>;
  showSectionHeader?: Maybe<Scalars["Boolean"]>;
  storeId: Scalars["ID"];
  stretchToFullWidth?: Maybe<Scalars["Boolean"]>;
  translations?: Maybe<Array<Maybe<SectionTranslations>>>;
};

export type StorePageSectionTranslationInput = {
  banners?: InputMaybe<Array<StoreBannerInput>>;
  content?: InputMaybe<Scalars["String"]>;
  header?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
};

export type StorePageTranslation = {
  __typename?: "StorePageTranslation";
  locale?: Maybe<Locale>;
  name?: Maybe<Scalars["String"]>;
  seo?: Maybe<PageSeo>;
};

export type StorePageTranslationInput = {
  locale: Locale;
  name?: InputMaybe<Scalars["String"]>;
  seo?: InputMaybe<SeoInput>;
};

export enum StorePageTypeEnum {
  Custom = "CUSTOM",
  Home = "HOME",
}

export type StorePaymentMethod = {
  __typename?: "StorePaymentMethod";
  enabled: Scalars["Boolean"];
  id?: Maybe<Scalars["ID"]>;
  type: StorePaymentMethods;
};

export enum StorePaymentMethods {
  CashOnDelivary = "CASH_ON_DELIVARY",
  OnlinePayment = "ONLINE_PAYMENT",
}

export type StorePaymentMethodsPayload = {
  __typename?: "StorePaymentMethodsPayload";
  paymentMethods?: Maybe<Array<Maybe<StorePaymentMethod>>>;
};

export enum StorePaymentProvider {
  Cowpay = "COWPAY",
  Stripe = "STRIPE",
  Vapulus = "VAPULUS",
}

export type StoreRedirect = {
  __typename?: "StoreRedirect";
  id: Scalars["String"];
  newUrl: Scalars["String"];
  oldUrl: Scalars["String"];
  storeId: Scalars["String"];
};

export type StoreReviewsSettings = {
  __typename?: "StoreReviewsSettings";
  enableGuestReviews: Scalars["Boolean"];
  id: Scalars["String"];
  showCustomerAvatar: Scalars["Boolean"];
  showOverAllRating: Scalars["Boolean"];
  showReviewDate: Scalars["Boolean"];
  showReviewsCount: Scalars["Boolean"];
  showStars: Scalars["Boolean"];
  starsColor: Scalars["String"];
  storeId: Scalars["String"];
};

export type StoreSeo = {
  __typename?: "StoreSEO";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type StoreSeoInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export enum StoreSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type StoreStaticPage = {
  __typename?: "StoreStaticPage";
  handle: Scalars["String"];
  htmlTemplate?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<Maybe<StoreStaticPageTranslation>>>;
};

export type StoreStaticPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type StoreStaticPageTranslation = {
  __typename?: "StoreStaticPageTranslation";
  htmlTemplate?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type StoreStaticTemplate = {
  __typename?: "StoreStaticTemplate";
  htmlTemplate?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type StoreTranslation = {
  __typename?: "StoreTranslation";
  description?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  location?: Maybe<Location>;
  name?: Maybe<Scalars["String"]>;
  seo?: Maybe<StoreSeo>;
};

export type StoreTranslationInput = {
  description?: InputMaybe<Scalars["String"]>;
  locale: Scalars["String"];
  location?: InputMaybe<StoreLocationInput>;
  name?: InputMaybe<Scalars["String"]>;
  seo?: InputMaybe<StoreSeoInput>;
};

export type StoreUser = {
  __typename?: "StoreUser";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<StoreUserPermission>>>;
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<PermissionRole>;
  storeId?: Maybe<Scalars["ID"]>;
};

export type StoreUserConnection = {
  __typename?: "StoreUserConnection";
  nodes?: Maybe<Array<Maybe<StoreUser>>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type StoreUserPermission = {
  __typename?: "StoreUserPermission";
  actions?: Maybe<Array<Maybe<PermissionAction>>>;
  resource?: Maybe<PermissionResource>;
};

export type StoreUserPermissionInput = {
  actions: Array<PermissionAction>;
  resource?: InputMaybe<PermissionResource>;
};

export type StoreUsersConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type StoreZoneAllowedMethods = {
  __typename?: "StoreZoneAllowedMethods";
  id?: Maybe<Scalars["ID"]>;
  paymentMethods?: Maybe<Array<Maybe<StorePaymentMethod>>>;
  shippingRateIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  shippingZoneId?: Maybe<Scalars["String"]>;
  storeId?: Maybe<Scalars["String"]>;
};

export type StoresOrdersInput = {
  orderIds: Array<InputMaybe<Scalars["ID"]>>;
  storeId: Scalars["ID"];
};

export type SubmitStoreContactFormInput = {
  fromEmail: Scalars["String"];
  messageBody: Scalars["String"];
  messageSubject: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  storeId: Scalars["ID"];
};

export type SubmitStoreContactFormPayload = {
  __typename?: "SubmitStoreContactFormPayload";
  message: Scalars["String"];
  statusCode: Scalars["Int"];
};

export type SubscriptionResource = RegisteredDomain | Site | Store;

export enum SubscriptionStatus {
  Active = "ACTIVE",
  Canceled = "CANCELED",
  CancelRequested = "CANCEL_REQUESTED",
  Disputed = "DISPUTED",
  DowngradeRequested = "DOWNGRADE_REQUESTED",
  Expired = "EXPIRED",
  PastDue = "PAST_DUE",
  Pending = "PENDING",
  Refunded = "REFUNDED",
}

export type Tax = {
  __typename?: "Tax";
  id: Scalars["ID"];
  image?: Maybe<Image>;
  percentageOff: Scalars["Float"];
  storeId: Scalars["ID"];
};

export type Template = {
  __typename?: "Template";
  addedAt?: Maybe<Scalars["DateTime"]>;
  handle?: Maybe<Scalars["String"]>;
};

export type ThemeColors = {
  __typename?: "ThemeColors";
  inkNormal?: Maybe<Scalars["String"]>;
  inkSubdued?: Maybe<Scalars["String"]>;
  primary?: Maybe<Scalars["String"]>;
};

export type ThemeColorsInput = {
  inkNormal?: InputMaybe<Scalars["String"]>;
  inkSubdued?: InputMaybe<Scalars["String"]>;
  primary?: InputMaybe<Scalars["String"]>;
};

export type TikTokSalesChannelSettings = {
  __typename?: "TikTokSalesChannelSettings";
  password: Scalars["String"];
  provider: ProviderName;
  title: Scalars["String"];
  username: Scalars["String"];
};

export type TopSellingProduct = {
  __typename?: "TopSellingProduct";
  product?: Maybe<Product>;
  productId?: Maybe<Scalars["String"]>;
  productSalesAnalytics?: Maybe<ProductSalesAnalytics>;
};

export enum TopSellingProductSortOptions {
  TotalQuantitySold = "totalQuantitySold",
  TotalSales = "totalSales",
}

export type TopSellingProductsOptions = {
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<TopSellingProductSortOptions>;
};

export type TranslateStoreLegalPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TranslateStoreStaticPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TranslatedCollection = {
  __typename?: "TranslatedCollection";
  descriptionHtml?: Maybe<Scalars["String"]>;
  locale: Scalars["String"];
  seo?: Maybe<ProductCollectionSeo>;
  shortDescription?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type TranslatedProductVariant = {
  __typename?: "TranslatedProductVariant";
  displayName: Scalars["String"];
  locale: Scalars["String"];
  selectedOptions: Array<SelectedOption>;
  title?: Maybe<Scalars["String"]>;
};

export type UpdateCollectionPayload = {
  __typename?: "UpdateCollectionPayload";
  collection?: Maybe<ProductCollection>;
};

export type UpdateCustomerAddressInput = {
  addressLine1?: InputMaybe<Scalars["String"]>;
  addressLine2?: InputMaybe<Scalars["String"]>;
  cityId?: InputMaybe<Scalars["String"]>;
  countryId?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  regionId?: InputMaybe<Scalars["String"]>;
  secondPhone?: InputMaybe<Scalars["String"]>;
  stateId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIntegrationInput = {
  description?: InputMaybe<Scalars["String"]>;
  integrationId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateIntegrationInstallationInput = {
  apiCredentials?: InputMaybe<IntegrationApiAuthCredentialsInput>;
  basicCredentials?: InputMaybe<IntegrationBasicAuthCredentialsInput>;
  id: Scalars["ID"];
  settings?: InputMaybe<IntegrationInstallationSettings>;
  storeId: Scalars["ID"];
  tokenCredentials?: InputMaybe<IntegrationTokenAuthCredentialsInput>;
};

export type UpdateIntegrationPayload = {
  __typename?: "UpdateIntegrationPayload";
  integration: Integration;
};

export type UpdateMenuItemInput = {
  clientId?: InputMaybe<Scalars["ID"]>;
  icon?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<MenuLinkInput>;
  locale: Scalars["String"];
  parentId?: InputMaybe<Scalars["ID"]>;
  title: Scalars["String"];
  type: MenuItemType;
};

export type UpdateOrderInput = {
  order: OrderUpdateInput;
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type UpdateOrderPayload = {
  __typename?: "UpdateOrderPayload";
  order?: Maybe<Order>;
};

export type UpdateOrderPromoInput = {
  orderId: Scalars["ID"];
  promoCode: Scalars["String"];
  storeId: Scalars["ID"];
};

export type UpdateProductAttributeInput = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
  type?: InputMaybe<ProductAttributeType>;
};

export type UpdateProductAttributeValueInput = {
  id: Scalars["ID"];
  image?: InputMaybe<CreateMediaInput>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["ID"];
};

export type UpdateProductPayload = {
  __typename?: "UpdateProductPayload";
  product: Product;
};

export type UpdateProductReviewInput = {
  content?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  rating?: InputMaybe<Scalars["Int"]>;
  showName?: InputMaybe<Scalars["Boolean"]>;
};

export type UpdateProductReviewsSettingsInput = {
  enableGuestReviews?: InputMaybe<Scalars["Boolean"]>;
  showCustomerAvatar?: InputMaybe<Scalars["Boolean"]>;
  showOverAllRating?: InputMaybe<Scalars["Boolean"]>;
  showReviewDate?: InputMaybe<Scalars["Boolean"]>;
  showReviewsCount?: InputMaybe<Scalars["Boolean"]>;
  showStars?: InputMaybe<Scalars["Boolean"]>;
  starsColor?: InputMaybe<Scalars["String"]>;
  storeId: Scalars["String"];
};

export type UpdateProductsStatusInput = {
  productIds: Array<InputMaybe<Scalars["ID"]>>;
  status: ProductStatus;
  storeId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateProductsStatusPayload = {
  __typename?: "UpdateProductsStatusPayload";
  products: Array<Maybe<Product>>;
};

export type UpdateProductsVisibilityInput = {
  isVisible: Scalars["Boolean"];
  productIds: Array<InputMaybe<Scalars["ID"]>>;
  storeId: Scalars["ID"];
};

export type UpdateProductsVisibilityPayload = {
  __typename?: "UpdateProductsVisibilityPayload";
  updatedCount?: Maybe<Scalars["Int"]>;
};

export type UpdateShippingRateCostInput = {
  cost?: InputMaybe<MoneyInput>;
  resourceId: Scalars["ID"];
};

export type UpdateStoreBannerSectionInput = {
  banners: Array<StoreBannerInput>;
};

export type UpdateStoreEmbedSectionInput = {
  content?: InputMaybe<Scalars["String"]>;
};

export type UpdateStoreInput = {
  adminContactInfo?: InputMaybe<ContactInfoInput>;
  contactInfo?: InputMaybe<ContactInfoInput>;
  currency?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  emails?: InputMaybe<Array<InputMaybe<EmailRecordInput>>>;
  industry?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<StoreLocationInput>;
  name?: InputMaybe<Scalars["String"]>;
  seo?: InputMaybe<StoreSeoInput>;
  storeId: Scalars["ID"];
  timezone?: InputMaybe<Scalars["String"]>;
};

export type UpdateStoreLegalPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateStoreMenuInput = {
  items?: InputMaybe<Array<InputMaybe<UpdateMenuItemInput>>>;
  title: Scalars["String"];
};

export type UpdateStorePageCatalogSectionCommonInput = {
  background?: InputMaybe<BackgroundInput>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  header?: InputMaybe<Scalars["String"]>;
  itemsPerRow?: InputMaybe<Scalars["Int"]>;
  showItemName?: InputMaybe<Scalars["Boolean"]>;
  showSectionHeader?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
};

export type UpdateStorePageCatalogSectionInput = {
  AttributesInput?: InputMaybe<CreateStorePageSectionAttributesInput>;
  CollectionsInput?: InputMaybe<CreateStorePageSectionCollectionsInput>;
  CommonInput: UpdateStorePageCatalogSectionCommonInput;
  ProductsInput?: InputMaybe<CreateStorePageSectionProductsInput>;
};

export type UpdateStorePageInput = {
  handle?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  pageType?: InputMaybe<StorePageTypeEnum>;
  seo?: InputMaybe<SeoInput>;
  status?: InputMaybe<PageStatusEnum>;
};

export type UpdateStorePageSectionAttributesInput = {
  attributeValuesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UpdateStorePageSectionCollectionsInput = {
  collectionsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UpdateStorePageSectionCommonInput = {
  background?: InputMaybe<BackgroundInput>;
  displayAs?: InputMaybe<DisplayAsEnum>;
  header?: InputMaybe<Scalars["String"]>;
  itemsPerRow?: InputMaybe<Scalars["Int"]>;
  showSectionHeader?: InputMaybe<Scalars["Boolean"]>;
  stretchToFullWidth?: InputMaybe<Scalars["Boolean"]>;
};

export type UpdateStorePageSectionInput = {
  BannerInput?: InputMaybe<UpdateStoreBannerSectionInput>;
  CommonInput: UpdateStorePageSectionCommonInput;
  EmbedInput?: InputMaybe<UpdateStoreEmbedSectionInput>;
  TextInput?: InputMaybe<UpdateStoreTextSectionInput>;
  VideoInput?: InputMaybe<UpdateStoreVideoSectionInput>;
};

export type UpdateStorePageSectionProductsInput = {
  fromCollectionId?: InputMaybe<Scalars["ID"]>;
  productsDisplayNumber?: InputMaybe<Scalars["Int"]>;
};

export type UpdateStorePayload = {
  __typename?: "UpdateStorePayload";
  store: Store;
};

export type UpdateStoreStaticPageInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateStoreTextSectionInput = {
  content?: InputMaybe<Scalars["String"]>;
};

export type UpdateStoreVideoSectionInput = {
  videosUrls: Array<Scalars["String"]>;
};

export type UpdateTaxInput = {
  id?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<ImageInput>;
  percentageOff: Scalars["Float"];
};

export type UpdateTemplateInput = {
  htmlTemplate?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  domains: Array<RegisteredDomain>;
  email: Scalars["String"];
  flags: Scalars["JSONObject"];
  id: Scalars["ID"];
  isInfoComplete: Scalars["Boolean"];
  isVerified: Scalars["Boolean"];
  missingInfo: Array<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  phone?: Maybe<Scalars["String"]>;
  roles?: Maybe<Scalars["String"]>;
  subscriptions: Array<PlanSubscription>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export enum UserAccessType {
  App = "APP",
  User = "USER",
}

export type UserFlagInput = {
  key: Scalars["String"];
  value: Scalars["Boolean"];
};

export type UserInfo = {
  __typename?: "UserInfo";
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type UserInfoInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type UserInput = {
  email?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["JSONObject"]>;
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type UserRequestError = {
  __typename?: "UserRequestError";
  code?: Maybe<ErrorCode>;
  params?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UserRequestStatus = {
  __typename?: "UserRequestStatus";
  errors: Array<Maybe<UserRequestError>>;
  requestId: Scalars["ID"];
  requestType: RequestType;
  status: RequestStatus;
};

export type UserRequestWarning = {
  __typename?: "UserRequestWarning";
  code?: Maybe<Scalars["String"]>;
  params?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UserStorePermissionInput = {
  permissions?: InputMaybe<Array<StoreUserPermissionInput>>;
  role: PermissionRole;
  storeId: Scalars["ID"];
};

export type UserVendor = {
  __typename?: "UserVendor";
  isExist?: Maybe<Scalars["Boolean"]>;
  user: User;
};

export type VariantPreview = {
  __typename?: "VariantPreview";
  price?: Maybe<Scalars["Float"]>;
  sku?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type ZoneCity = {
  __typename?: "ZoneCity";
  code?: Maybe<Scalars["String"]>;
  countryId: Scalars["ID"];
  id: Scalars["ID"];
  inAnotherState?: Maybe<Scalars["Boolean"]>;
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  region?: Maybe<ZoneRegion>;
  regions?: Maybe<ZoneRegionConnection>;
  shippingRate?: Maybe<ShippingRate>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
  zoneId?: Maybe<Scalars["ID"]>;
};

export type ZoneCityRegionArgs = {
  id: Scalars["ID"];
};

export type ZoneCityRegionsArgs = {
  zoneId?: InputMaybe<Scalars["ID"]>;
};

export type ZoneCityShippingRateArgs = {
  id: Scalars["ID"];
};

export type ZoneCityConnection = {
  __typename?: "ZoneCityConnection";
  edges?: Maybe<Array<Maybe<ZoneCityEdge>>>;
  nodes?: Maybe<Array<Maybe<ZoneCity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ZoneCityEdge = {
  __typename?: "ZoneCityEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ZoneCity>;
};

export type ZoneCityInput = {
  cityId: Scalars["ID"];
  regions?: InputMaybe<Array<InputMaybe<ZoneRegionInput>>>;
};

export type ZoneCityRegionsInput = {
  cityId?: InputMaybe<Scalars["ID"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  zonedId?: InputMaybe<Scalars["ID"]>;
};

export type ZoneCountry = ICountry & {
  __typename?: "ZoneCountry";
  code2: Scalars["String"];
  code3: Scalars["String"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  state?: Maybe<ZoneState>;
  states?: Maybe<ZoneStateConnection>;
  storeId?: Maybe<Scalars["ID"]>;
  zoneId?: Maybe<Scalars["ID"]>;
};

export type ZoneCountryStateArgs = {
  id: Scalars["ID"];
};

export type ZoneCountryConnection = {
  __typename?: "ZoneCountryConnection";
  edges?: Maybe<Array<Maybe<ZoneCountryEdge>>>;
  nodes?: Maybe<Array<Maybe<ZoneCountry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ZoneCountryEdge = {
  __typename?: "ZoneCountryEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ZoneCountry>;
};

export type ZoneCountryInput = {
  countryId: Scalars["ID"];
  states?: InputMaybe<Array<InputMaybe<ZoneStateInput>>>;
};

export type ZoneCountryStateInput = {
  countryId?: InputMaybe<Scalars["ID"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  zoneId?: InputMaybe<Scalars["ID"]>;
};

export type ZoneRegion = IRegion & {
  __typename?: "ZoneRegion";
  cityId: Scalars["ID"];
  code?: Maybe<Scalars["String"]>;
  countryId: Scalars["ID"];
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  shippingRate?: Maybe<ShippingRate>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  stateId: Scalars["ID"];
  storeId?: Maybe<Scalars["ID"]>;
};

export type ZoneRegionShippingRateArgs = {
  id: Scalars["ID"];
};

export type ZoneRegionConnection = {
  __typename?: "ZoneRegionConnection";
  edges?: Maybe<Array<Maybe<ZoneRegionEdge>>>;
  nodes?: Maybe<Array<Maybe<ZoneRegion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ZoneRegionEdge = {
  __typename?: "ZoneRegionEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ZoneRegion>;
};

export type ZoneRegionInput = {
  regionId: Scalars["ID"];
};

export type ZoneState = {
  __typename?: "ZoneState";
  cities?: Maybe<ZoneCityConnection>;
  city?: Maybe<ZoneCity>;
  code?: Maybe<Scalars["String"]>;
  countryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  isPredefined?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  numOfCities?: Maybe<Scalars["Int"]>;
  shippingRate?: Maybe<ShippingRate>;
  shippingRates?: Maybe<Array<Maybe<ShippingRate>>>;
  storeId?: Maybe<Scalars["ID"]>;
  zoneId?: Maybe<Scalars["ID"]>;
};

export type ZoneStateCityArgs = {
  id: Scalars["ID"];
};

export type ZoneStateShippingRateArgs = {
  id: Scalars["ID"];
};

export type ZoneStateCitiesInput = {
  stateId?: InputMaybe<Scalars["ID"]>;
  storeId?: InputMaybe<Scalars["ID"]>;
  zonedId?: InputMaybe<Scalars["ID"]>;
};

export type ZoneStateConnection = {
  __typename?: "ZoneStateConnection";
  edges?: Maybe<Array<Maybe<ZoneStateEdge>>>;
  nodes?: Maybe<Array<Maybe<ZoneState>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ZoneStateEdge = {
  __typename?: "ZoneStateEdge";
  cursor: Scalars["ConnectionCursor"];
  node?: Maybe<ZoneState>;
};

export type ZoneStateInput = {
  cities?: InputMaybe<Array<InputMaybe<ZoneCityInput>>>;
  stateId: Scalars["ID"];
};

export type AdjustItemsQuantityInput = {
  items: Array<InputMaybe<ItemsQuantityInput>>;
  orderId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type ArchivePromoCodeInput = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type ArchiveShippingRateInput = {
  shippingRateId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type ArchiveShippingZoneInput = {
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type AttributeValueSelector = {
  attributeId: Scalars["ID"];
  attributeValueId: Scalars["ID"];
};

export type BackgroundInput = {
  color: Scalars["String"];
  type: SectionBackgroundTypeEnum;
};

export type CustomerUserInput = {
  addresses?: InputMaybe<Array<AddCustomerAddressInput>>;
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type CustomerUserWithoutPasswordInput = {
  addresses?: InputMaybe<Array<AddCustomerAddressInput>>;
  email: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
};

export type DeleteShippingRateInput = {
  shippingRateIds: Array<InputMaybe<Scalars["ID"]>>;
  storeId: Scalars["ID"];
};

export type DeleteShippingZoneInput = {
  shippingZoneIds: Array<InputMaybe<Scalars["ID"]>>;
  storeId: Scalars["ID"];
};

export enum DomainType {
  External = "external",
  Internal = "internal",
}

export type ListCustomerReviewsInput = {
  connection?: InputMaybe<ReviewsConnectionInput>;
  customerId: Scalars["ID"];
};

export type OptionValueSelector = {
  optionId: Scalars["ID"];
  optionValueId: Scalars["ID"];
};

export type PromoCodesConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<PromoCodesSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type PromoCodesFilterInput = {
  code?: InputMaybe<Scalars["String"]>;
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  searchQuery?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<PromoCodeStatusEnum>;
};

export enum PromoCodesSortByField {
  CreatedAt = "createdAt",
  Id = "id",
  UpdatedAt = "updatedAt",
}

export type RestorePromoCodeInput = {
  id: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type ShipPayload = {
  __typename?: "shipPayload";
  dcStatus?: Maybe<Scalars["String"]>;
  deliveryCompany?: Maybe<Scalars["String"]>;
  driverId?: Maybe<Scalars["String"]>;
  driverName?: Maybe<Scalars["String"]>;
  driverPhone?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  orderId?: Maybe<Scalars["String"]>;
  orderSerial?: Maybe<Scalars["String"]>;
  printAWBURL?: Maybe<Scalars["String"]>;
  status: Scalars["String"];
  timestamp?: Maybe<Scalars["String"]>;
  trackingNumber?: Maybe<Scalars["String"]>;
  trackingURL?: Maybe<Scalars["String"]>;
};

export type ShippingRatesFilterInput = {
  isArchived?: InputMaybe<Scalars["Boolean"]>;
};

export type ShippingZonesFilterInput = {
  isArchived?: InputMaybe<Scalars["Boolean"]>;
};

export type StoreCitiesConnectionInput = {
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  last?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<StoreCitiesByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type UpdateCustomerUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type UpdatePromoCodeInput = {
  fixedAmount?: InputMaybe<Scalars["Float"]>;
  id: Scalars["ID"];
  percentageOff?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<PromoCodeStatusEnum>;
  storeId: Scalars["ID"];
  type?: InputMaybe<PromoCodeTypeEnum>;
  usageLimit?: InputMaybe<Scalars["Int"]>;
};

export type UpdateShippingRateInput = {
  cost: MoneyInput;
  name: Scalars["String"];
  shippingRateId: Scalars["ID"];
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type UpdateShippingZoneInput = {
  countries?: InputMaybe<Array<InputMaybe<ZoneCountryInput>>>;
  name?: InputMaybe<Scalars["String"]>;
  settings?: InputMaybe<ShippingZoneSettingsInput>;
  shippingZoneId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type UpdateStoreCustomCitiesInput = {
  cities: Array<InputMaybe<CustomCityInput>>;
  stateId: Scalars["ID"];
  storeId: Scalars["ID"];
};

export type UpdateStoreCustomCountriesInput = {
  countries: Array<InputMaybe<CustomCountryInput>>;
  storeId: Scalars["ID"];
};

export type UpdateStoreCustomRegionsInput = {
  cityId: Scalars["ID"];
  regions: Array<InputMaybe<CustomRegionInput>>;
  storeId: Scalars["ID"];
};

export type UpdateStoreCustomStatesInput = {
  countryId: Scalars["ID"];
  states: Array<InputMaybe<CustomStateInput>>;
  storeId: Scalars["ID"];
};

export type SocialIntegrationProductFragment = {
  __typename?: "Product";
  id: string;
  title: string;
  descriptionHtml?: any | null;
  shortDescription?: string | null;
  isInStock: boolean;
  handle: string;
  updatedAt: any;
  options?: Array<{
    __typename: "ProductOption";
    id: string;
    name: string;
    handle: string;
    position: number;
    locale: string;
    values: Array<{
      __typename: "ProductOptionValue";
      id: string;
      name?: string | null;
      handle?: string | null;
      locale?: string | null;
      translations?: Array<{
        __typename?: "ProductOptionValueTranslation";
        name?: string | null;
      } | null> | null;
    }>;
  } | null> | null;
  collections: {
    __typename?: "ProductCollectionConnection";
    nodes?: Array<{
      __typename?: "ProductCollection";
      id: string;
      title?: string | null;
      description?: string | null;
      handle: string;
    } | null> | null;
  };
  variants?: {
    __typename?: "ProductVariantConnection";
    nodes: Array<{
      __typename?: "ProductVariant";
      id: string;
      title?: string | null;
      quantity?: number | null;
      updatedAt?: any | null;
      compareAtPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      selectedOptions: Array<{
        __typename?: "SelectedOption";
        option: {
          __typename?: "ProductOption";
          id: string;
          name: string;
          handle: string;
        };
        value: {
          __typename?: "ProductOptionValue";
          id: string;
          name?: string | null;
        };
      }>;
      price: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      };
      image?: { __typename?: "Image"; src?: string | null } | null;
    }>;
  } | null;
  images: Array<{ __typename?: "Image"; src?: string | null } | null>;
};

export type SocialStoreDetailsFragment = {
  __typename?: "Store";
  id: string;
  name: string;
  updatedAt?: any | null;
  supportedLocales: Array<string>;
  description?: string | null;
  shippingZones?: {
    __typename?: "ShippingZoneConnection";
    nodes?: Array<{
      __typename?: "ShippingZone";
      id: string;
      shippingRates?: Array<{
        __typename?: "ShippingRate";
        name: string;
        cost: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        };
      } | null> | null;
      countries?: {
        __typename?: "ZoneCountryConnection";
        nodes?: Array<{
          __typename?: "ZoneCountry";
          id: string;
          name: string;
          code2: string;
          code3: string;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
  staticPages?: Array<{
    __typename?: "StoreStaticPage";
    handle: string;
  } | null> | null;
  collections?: {
    __typename?: "ProductCollectionConnection";
    nodes?: Array<{
      __typename?: "ProductCollection";
      handle: string;
      updatedAt: any;
      isVisible?: boolean | null;
    } | null> | null;
  } | null;
};

export type SocialStoreDetailsByHandleQueryVariables = Exact<{
  storeHandle: Scalars["String"];
}>;

export type SocialStoreDetailsByHandleQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    name: string;
    updatedAt?: any | null;
    supportedLocales: Array<string>;
    description?: string | null;
    shippingZones?: {
      __typename?: "ShippingZoneConnection";
      nodes?: Array<{
        __typename?: "ShippingZone";
        id: string;
        shippingRates?: Array<{
          __typename?: "ShippingRate";
          name: string;
          cost: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
        } | null> | null;
        countries?: {
          __typename?: "ZoneCountryConnection";
          nodes?: Array<{
            __typename?: "ZoneCountry";
            id: string;
            name: string;
            code2: string;
            code3: string;
          } | null> | null;
        } | null;
      } | null> | null;
    } | null;
    staticPages?: Array<{
      __typename?: "StoreStaticPage";
      handle: string;
    } | null> | null;
    collections?: {
      __typename?: "ProductCollectionConnection";
      nodes?: Array<{
        __typename?: "ProductCollection";
        handle: string;
        updatedAt: any;
        isVisible?: boolean | null;
      } | null> | null;
    } | null;
  } | null;
};

export type SocialStoreDetailsByDomainQueryVariables = Exact<{
  storeDomain: Scalars["String"];
}>;

export type SocialStoreDetailsByDomainQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    name: string;
    updatedAt?: any | null;
    supportedLocales: Array<string>;
    description?: string | null;
    shippingZones?: {
      __typename?: "ShippingZoneConnection";
      nodes?: Array<{
        __typename?: "ShippingZone";
        id: string;
        shippingRates?: Array<{
          __typename?: "ShippingRate";
          name: string;
          cost: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
        } | null> | null;
        countries?: {
          __typename?: "ZoneCountryConnection";
          nodes?: Array<{
            __typename?: "ZoneCountry";
            id: string;
            name: string;
            code2: string;
            code3: string;
          } | null> | null;
        } | null;
      } | null> | null;
    } | null;
    staticPages?: Array<{
      __typename?: "StoreStaticPage";
      handle: string;
    } | null> | null;
    collections?: {
      __typename?: "ProductCollectionConnection";
      nodes?: Array<{
        __typename?: "ProductCollection";
        handle: string;
        updatedAt: any;
        isVisible?: boolean | null;
      } | null> | null;
    } | null;
  } | null;
};

export type SocialIntegrationProductsQueryVariables = Exact<{
  filter?: InputMaybe<ProductsFilterInput>;
  connection?: InputMaybe<ProductsConnectionInput>;
}>;

export type SocialIntegrationProductsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "ProductConnection";
    nodes: Array<{
      __typename?: "Product";
      id: string;
      title: string;
      descriptionHtml?: any | null;
      shortDescription?: string | null;
      isInStock: boolean;
      handle: string;
      updatedAt: any;
      options?: Array<{
        __typename: "ProductOption";
        id: string;
        name: string;
        handle: string;
        position: number;
        locale: string;
        values: Array<{
          __typename: "ProductOptionValue";
          id: string;
          name?: string | null;
          handle?: string | null;
          locale?: string | null;
          translations?: Array<{
            __typename?: "ProductOptionValueTranslation";
            name?: string | null;
          } | null> | null;
        }>;
      } | null> | null;
      collections: {
        __typename?: "ProductCollectionConnection";
        nodes?: Array<{
          __typename?: "ProductCollection";
          id: string;
          title?: string | null;
          description?: string | null;
          handle: string;
        } | null> | null;
      };
      variants?: {
        __typename?: "ProductVariantConnection";
        nodes: Array<{
          __typename?: "ProductVariant";
          id: string;
          title?: string | null;
          quantity?: number | null;
          updatedAt?: any | null;
          compareAtPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          selectedOptions: Array<{
            __typename?: "SelectedOption";
            option: {
              __typename?: "ProductOption";
              id: string;
              name: string;
              handle: string;
            };
            value: {
              __typename?: "ProductOptionValue";
              id: string;
              name?: string | null;
            };
          }>;
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          image?: { __typename?: "Image"; src?: string | null } | null;
        }>;
      } | null;
      images: Array<{ __typename?: "Image"; src?: string | null } | null>;
    }>;
  };
};

export type ValidateSocialIntegrationInstallationQueryVariables = Exact<{
  storeId: Scalars["ID"];
  provider: ProviderName;
  authHeader: Scalars["String"];
}>;

export type ValidateSocialIntegrationInstallationQuery = {
  __typename?: "Query";
  validateSocialIntegrationInstallation?: boolean | null;
};

export type StoreDetailsFragment = {
  __typename?: "Store";
  id: string;
  name: string;
  description?: string | null;
  currency: string;
  defaultLocale: string;
  locales: Array<string>;
  locale: string;
  fallbackLocale: string;
  supportedLocales: Array<string>;
  userId: string;
  isExpired?: boolean | null;
  areReviewsActivated: boolean;
  adminContactInfo?: {
    __typename?: "ContactInfo";
    name?: string | null;
    email?: string | null;
  } | null;
  tax?: {
    __typename?: "Tax";
    id: string;
    storeId: string;
    percentageOff: number;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
  } | null;
  location?: { __typename?: "Location"; address: string } | null;
  socialMedia?: Array<{
    __typename?: "SocialLinkType";
    name?: string | null;
    link?: string | null;
  } | null> | null;
  seo?: {
    __typename?: "StoreSEO";
    title?: string | null;
    description?: string | null;
  } | null;
  legalPages?: Array<{
    __typename?: "StoreLegalPage";
    id: string;
    name?: string | null;
    title?: string | null;
    handle: string;
  } | null> | null;
  appearance?: {
    __typename?: "StoreAppearance";
    template?: { __typename?: "Template"; handle?: string | null } | null;
    colors?: {
      __typename?: "ThemeColors";
      primary?: string | null;
      inkNormal?: string | null;
      inkSubdued?: string | null;
    } | null;
    fonts?: Array<{
      __typename?: "FontType";
      type?: FontTypeEnum | null;
      fontFamily?: string | null;
      category?: string | null;
      typeFace?: string | null;
      weight?: string | null;
      isItalic?: boolean | null;
      url?: string | null;
      locale?: string | null;
      locales?: Array<string | null> | null;
    } | null> | null;
    footer?: {
      __typename?: "FooterType";
      activeFooter?: ActiveFooter | null;
      startPart?: string | null;
      endPart?: string | null;
      customPart?: string | null;
      locale?: string | null;
      locales?: Array<string | null> | null;
    } | null;
    menus?: Array<{
      __typename?: "StoreMenu";
      id: string;
      title: string;
      handle?: string | null;
      items?: Array<{
        __typename?: "StoreMenuItem";
        id: string;
        parentId?: string | null;
        title: string;
        type: MenuItemType;
        locale?: string | null;
        locales?: Array<string | null> | null;
        handle?: string | null;
        icon?: string | null;
        link?: {
          __typename?: "MenuLink";
          type: MenuItemType;
          url?: string | null;
          resourceId?: string | null;
          openInNewTab?: boolean | null;
          staticPageType?: StaticPageEnum | null;
          resource?:
            | { __typename: "Product"; handle: string }
            | { __typename: "ProductCollection"; handle: string }
            | { __typename: "StoreLegalPage"; handle: string }
            | { __typename: "StorePage"; handle: string }
            | { __typename: "StoreStaticPage" }
            | null;
        } | null;
      } | null> | null;
    } | null> | null;
    infoBar?: {
      __typename?: "InfoBar";
      text: any;
      background: string;
      locales?: Array<string | null> | null;
      locale?: string | null;
      isActive?: boolean | null;
      isDismissible?: boolean | null;
      translations?: Array<{
        __typename?: "InfoBarTranslation";
        text: any;
        locale: string;
      } | null> | null;
    } | null;
  } | null;
  contactInfo?: {
    __typename?: "ContactInfo";
    email?: string | null;
    phone?: string | null;
  } | null;
  logo?: {
    __typename?: "StoreLogo";
    width?: number | null;
    height?: number | null;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
  } | null;
  owner?: { __typename?: "User"; createdAt: any } | null;
  subscription?: {
    __typename?: "PlanSubscription";
    createdAt: any;
    status: SubscriptionStatus;
  } | null;
  favIcon?: {
    __typename?: "Image";
    src?: string | null;
    status?: MediaStatus | null;
  } | null;
  analyticalAccounts?: Array<{
    __typename?: "AnalyticalAccount";
    name: string;
    id: string;
    isActive: boolean;
  } | null> | null;
  automaticDiscounts?: Array<{
    __typename?: "Discount";
    id: string;
    title?: string | null;
    appliedOn?: DiscountAppliedOnType | null;
    percentage?: number | null;
    status?: DiscountStatus | null;
    customerBuys?: {
      __typename?: "CustomerBuys";
      value?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null;
    amount?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    BuyXGetYDiscount?: {
      __typename?: "BuyXGetYDiscount";
      customerBuys: {
        __typename?: "CustomerBuys";
        quantity?: number | null;
        itemsType?: DiscountItemsType | null;
        value?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        items?: {
          __typename?: "CustomerBuysItems";
          productVariantIds?: Array<string> | null;
          collectionIds?: Array<string> | null;
        } | null;
      };
      customerGets: {
        __typename?: "CustomerGets";
        quantity?: number | null;
        percentage: number;
        itemsType: DiscountItemsType;
        items: {
          __typename?: "CustomerGetsItems";
          productVariants?: Array<{
            __typename?: "ProductVariant";
            id: string;
          }> | null;
          collections?: Array<{
            __typename?: "ProductCollection";
            id: string;
          }> | null;
        };
      };
    } | null;
  } | null> | null;
  paragonIntegrations?: {
    __typename?: "ParagonStoreIntegrations";
    id: string;
    integrations?: Array<{
      __typename?: "ParagonIntegration";
      name: string;
      enabled: boolean;
      sharedSettings?: Array<{
        __typename?: "ParagonIntegrationSharedSetting";
        name: string;
        value: string;
      } | null> | null;
    } | null> | null;
  } | null;
  storeReviewSettings?: {
    __typename?: "StoreReviewsSettings";
    id: string;
    enableGuestReviews: boolean;
    showCustomerAvatar: boolean;
    showOverAllRating: boolean;
    showReviewDate: boolean;
    showReviewsCount: boolean;
    showStars: boolean;
    starsColor: string;
  } | null;
  redirects?: Array<{
    __typename?: "StoreRedirect";
    id: string;
    newUrl: string;
    oldUrl: string;
  }> | null;
  customCheckoutSetting?: {
    __typename?: "CustomCheckoutSetting";
    identifier?: CustomerIdentifier | null;
    name?: NameInputOptions | null;
    secondaryPhone?: CheckoutFieldOptions | null;
    postalCode?: CheckoutFieldOptions | null;
    notesToSeller?: CheckoutFieldOptions | null;
    checkoutNote?: {
      __typename?: "CheckoutNote";
      placement: CheckoutNotePlacement;
      enabled: boolean;
      content: string;
    } | null;
  } | null;
  domain?: { __typename?: "Domain"; domainName: string } | null;
};

export type ParagonIntegrationFragment = {
  __typename?: "ParagonStoreIntegrations";
  id: string;
  integrations?: Array<{
    __typename?: "ParagonIntegration";
    name: string;
    enabled: boolean;
    sharedSettings?: Array<{
      __typename?: "ParagonIntegrationSharedSetting";
      name: string;
      value: string;
    } | null> | null;
  } | null> | null;
};

export type StoreMenuItemFragment = {
  __typename?: "StoreMenuItem";
  id: string;
  parentId?: string | null;
  title: string;
  type: MenuItemType;
  locale?: string | null;
  locales?: Array<string | null> | null;
  handle?: string | null;
  icon?: string | null;
  link?: {
    __typename?: "MenuLink";
    type: MenuItemType;
    url?: string | null;
    resourceId?: string | null;
    openInNewTab?: boolean | null;
    staticPageType?: StaticPageEnum | null;
    resource?:
      | { __typename: "Product"; handle: string }
      | { __typename: "ProductCollection"; handle: string }
      | { __typename: "StoreLegalPage"; handle: string }
      | { __typename: "StorePage"; handle: string }
      | { __typename: "StoreStaticPage" }
      | null;
  } | null;
};

export type MenuInfoFragment = {
  __typename?: "StoreMenu";
  id: string;
  title: string;
  handle?: string | null;
  items?: Array<{
    __typename?: "StoreMenuItem";
    id: string;
    parentId?: string | null;
    title: string;
    type: MenuItemType;
    locale?: string | null;
    locales?: Array<string | null> | null;
    handle?: string | null;
    icon?: string | null;
    link?: {
      __typename?: "MenuLink";
      type: MenuItemType;
      url?: string | null;
      resourceId?: string | null;
      openInNewTab?: boolean | null;
      staticPageType?: StaticPageEnum | null;
      resource?:
        | { __typename: "Product"; handle: string }
        | { __typename: "ProductCollection"; handle: string }
        | { __typename: "StoreLegalPage"; handle: string }
        | { __typename: "StorePage"; handle: string }
        | { __typename: "StoreStaticPage" }
        | null;
    } | null;
  } | null> | null;
};

export type CollectionInfoFragment = {
  __typename?: "ProductCollection";
  id: string;
  locale: string;
  title?: string | null;
  handle: string;
  shortDescription?: string | null;
  productsCount: number;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  seo?: {
    __typename?: "ProductCollectionSEO";
    title?: string | null;
    description?: string | null;
  } | null;
};

export type MoneyFragment = {
  __typename?: "Money";
  amount: number;
  currencyCode: CurrencyCode;
};

export type ImageFragment = {
  __typename?: "Image";
  id: string;
  altText?: string | null;
  src?: string | null;
  width?: number | null;
  height?: number | null;
  format?: string | null;
};

export type OrderItemDiscountInfoFragment = {
  __typename?: "OrderItemDiscountDetails";
  discountSource: DiscountSource;
  quantity: number;
  info: {
    __typename?: "OrderItemDiscountDetailsInfo";
    percentage?: number | null;
    fixed?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  };
  perItem: { __typename?: "Money"; amount: number; currencyCode: CurrencyCode };
  total: { __typename?: "Money"; amount: number; currencyCode: CurrencyCode };
};

export type VariantInfoFragment = {
  __typename?: "ProductVariant";
  id: string;
  title?: string | null;
  quantity?: number | null;
  trackQuantity?: boolean | null;
  sku?: string | null;
  cartLimitsEnabled?: boolean | null;
  minPerCart?: number | null;
  maxPerCart?: number | null;
  product: {
    __typename?: "Product";
    id: string;
    title: string;
    status: ProductStatus;
    images: Array<{
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null>;
  };
  price: { __typename?: "Money"; amount: number; currencyCode: CurrencyCode };
  compareAtPrice?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  selectedOptions: Array<{
    __typename?: "SelectedOption";
    option: { __typename?: "ProductOption"; id: string; name: string };
    value: {
      __typename?: "ProductOptionValue";
      id: string;
      name?: string | null;
    };
  }>;
};

export type PaymentIntentInfoFragment = {
  __typename?: "PaymentIntent";
  id: string;
  status?: string | null;
  embedUrl?: string | null;
  paymentMethod?: PaymentMethodEnum | null;
  paymentMethods?: Array<PaymentMethodEnum | null> | null;
};

export type TaxFragment = {
  __typename?: "Tax";
  id: string;
  storeId: string;
  percentageOff: number;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
};

export type OrderReceiptFragment = {
  __typename?: "OrderReceipt";
  subtotal?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  automaticDiscount?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  discount?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  tax?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  shipping?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  total?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
};

export type OrderVariantSnapshotFragment = {
  __typename?: "ProductVariantSnapshot";
  id: string;
  sku?: string | null;
  quantity?: number | null;
  productId: string;
  productTitle?: string | null;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  productImages?: Array<{
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null> | null;
};

export type OrderCategoryInfoFragment = {
  __typename?: "CustomBuildCategory";
  category: {
    __typename?: "CustomProductCategory";
    id: string;
    categoryType: CategoryType;
    name: string;
    isRequired: boolean;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    variants?: Array<{
      __typename?: "CustomProductCategoryVariant";
      preselected?: boolean | null;
      variant?: {
        __typename?: "ProductVariant";
        id: string;
        title?: string | null;
        quantity?: number | null;
        trackQuantity?: boolean | null;
        sku?: string | null;
        cartLimitsEnabled?: boolean | null;
        minPerCart?: number | null;
        maxPerCart?: number | null;
        product: {
          __typename?: "Product";
          id: string;
          title: string;
          status: ProductStatus;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
        };
        price: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        };
        compareAtPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        image?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        selectedOptions: Array<{
          __typename?: "SelectedOption";
          option: { __typename?: "ProductOption"; id: string; name: string };
          value: {
            __typename?: "ProductOptionValue";
            id: string;
            name?: string | null;
          };
        }>;
      } | null;
    } | null> | null;
    settings?: {
      __typename?: "CustomProductCategorySettings";
      maxSelect?: number | null;
      maxQuantity?: number | null;
    } | null;
  };
  selectedVariants: Array<{
    __typename?: "SelectedVariant";
    quantity: number;
    variantSnapshot?: {
      __typename?: "ProductVariantSnapshot";
      id: string;
      sku?: string | null;
      quantity?: number | null;
      productId: string;
      productTitle?: string | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      productImages?: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null> | null;
    } | null;
    price?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    selectedOptions: Array<{
      __typename?: "SelectedVariantOption";
      value: string;
      name: string;
    }>;
  }>;
};

export type CategoryInfoFragment = {
  __typename?: "CustomProductCategory";
  id: string;
  categoryType: CategoryType;
  name: string;
  isRequired: boolean;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  variants?: Array<{
    __typename?: "CustomProductCategoryVariant";
    preselected?: boolean | null;
    variant?: {
      __typename?: "ProductVariant";
      id: string;
      title?: string | null;
      quantity?: number | null;
      trackQuantity?: boolean | null;
      sku?: string | null;
      cartLimitsEnabled?: boolean | null;
      minPerCart?: number | null;
      maxPerCart?: number | null;
      product: {
        __typename?: "Product";
        id: string;
        title: string;
        status: ProductStatus;
        images: Array<{
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null>;
      };
      price: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      };
      compareAtPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      selectedOptions: Array<{
        __typename?: "SelectedOption";
        option: { __typename?: "ProductOption"; id: string; name: string };
        value: {
          __typename?: "ProductOptionValue";
          id: string;
          name?: string | null;
        };
      }>;
    } | null;
  } | null> | null;
  settings?: {
    __typename?: "CustomProductCategorySettings";
    maxSelect?: number | null;
    maxQuantity?: number | null;
  } | null;
};

export type OrderInfoFragment = {
  __typename?: "Order";
  id: string;
  orderSerial?: string | null;
  status?: OrderStatusEnum | null;
  paymentMethod?: PaymentMethodEnum | null;
  createdAt: any;
  paymentStatus?: OrderPaymentStatusEnum | null;
  fulfillmentStatus?: FulfillStatusEnum | null;
  externalActionMessage?: Array<string | null> | null;
  notes?: string | null;
  shippingRateName?: string | null;
  customer: {
    __typename?: "Customer";
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    isSubscribedToNewsLetter?: boolean | null;
  };
  shippingDetails?: {
    __typename?: "OrderShippingDetails";
    trackingURL?: string | null;
  } | null;
  shippingAddress: {
    __typename?: "Address";
    phone?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    postalCode?: string | null;
    areaSnapshot?: {
      __typename?: "AreaSnapshot";
      countryName?: string | null;
      stateName?: string | null;
      cityName?: string | null;
      regionName?: string | null;
    } | null;
  };
  billingAddress: {
    __typename?: "Address";
    phone?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    postalCode?: string | null;
    areaSnapshot?: {
      __typename?: "AreaSnapshot";
      countryName?: string | null;
      stateName?: string | null;
      cityName?: string | null;
      regionName?: string | null;
    } | null;
  };
  items: Array<
    | {
        __typename?: "CustomItem";
        id: string;
        quantity: number;
        title?: string | null;
        categories: Array<{
          __typename?: "CustomBuildCategory";
          category: {
            __typename?: "CustomProductCategory";
            id: string;
            categoryType: CategoryType;
            name: string;
            isRequired: boolean;
            image?: {
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null;
            variants?: Array<{
              __typename?: "CustomProductCategoryVariant";
              preselected?: boolean | null;
              variant?: {
                __typename?: "ProductVariant";
                id: string;
                title?: string | null;
                quantity?: number | null;
                trackQuantity?: boolean | null;
                sku?: string | null;
                cartLimitsEnabled?: boolean | null;
                minPerCart?: number | null;
                maxPerCart?: number | null;
                product: {
                  __typename?: "Product";
                  id: string;
                  title: string;
                  status: ProductStatus;
                  images: Array<{
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null>;
                };
                price: {
                  __typename?: "Money";
                  amount: number;
                  currencyCode: CurrencyCode;
                };
                compareAtPrice?: {
                  __typename?: "Money";
                  amount: number;
                  currencyCode: CurrencyCode;
                } | null;
                image?: {
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null;
                selectedOptions: Array<{
                  __typename?: "SelectedOption";
                  option: {
                    __typename?: "ProductOption";
                    id: string;
                    name: string;
                  };
                  value: {
                    __typename?: "ProductOptionValue";
                    id: string;
                    name?: string | null;
                  };
                }>;
              } | null;
            } | null> | null;
            settings?: {
              __typename?: "CustomProductCategorySettings";
              maxSelect?: number | null;
              maxQuantity?: number | null;
            } | null;
          };
          selectedVariants: Array<{
            __typename?: "SelectedVariant";
            quantity: number;
            variantSnapshot?: {
              __typename?: "ProductVariantSnapshot";
              id: string;
              sku?: string | null;
              quantity?: number | null;
              productId: string;
              productTitle?: string | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              productImages?: Array<{
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null> | null;
            } | null;
            price?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
            selectedOptions: Array<{
              __typename?: "SelectedVariantOption";
              value: string;
              name: string;
            }>;
          }>;
        }>;
        subtotal?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        productSnapshot?: {
          __typename?: "ProductSnapshot";
          id: string;
          title: string;
          handle: string;
          collectionIds: Array<string | null>;
          integrationProvider?: {
            __typename?: "IntegrationProviderDetailsSnapshot";
            provider?: string | null;
          } | null;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
        } | null;
        price?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        discount?: {
          __typename?: "OrderItemDiscountDetails";
          discountSource: DiscountSource;
          quantity: number;
          info: {
            __typename?: "OrderItemDiscountDetailsInfo";
            percentage?: number | null;
            fixed?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
          };
          perItem: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          total: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
        } | null;
      }
    | {
        __typename?: "SimpleItem";
        id: string;
        quantity: number;
        title?: string | null;
        selectedOptions: Array<{
          __typename?: "SelectedVariantOption";
          value: string;
          name: string;
        }>;
        variantSnapshot?: {
          __typename?: "ProductVariantSnapshot";
          id: string;
          sku?: string | null;
          quantity?: number | null;
          productId: string;
          productTitle?: string | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          productImages?: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null> | null;
        } | null;
        subtotal?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        productSnapshot?: {
          __typename?: "ProductSnapshot";
          id: string;
          title: string;
          handle: string;
          collectionIds: Array<string | null>;
          integrationProvider?: {
            __typename?: "IntegrationProviderDetailsSnapshot";
            provider?: string | null;
          } | null;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
        } | null;
        price?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        discount?: {
          __typename?: "OrderItemDiscountDetails";
          discountSource: DiscountSource;
          quantity: number;
          info: {
            __typename?: "OrderItemDiscountDetailsInfo";
            percentage?: number | null;
            fixed?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
          };
          perItem: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          total: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
        } | null;
      }
    | null
  >;
  shippingRateCost: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  };
  promoCodeSnapshot?: {
    __typename?: "PromoCode";
    code: string;
    percentageOff?: number | null;
  } | null;
  taxSnapshot?: {
    __typename?: "Tax";
    id: string;
    storeId: string;
    percentageOff: number;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
  } | null;
  receipt?: {
    __typename?: "OrderReceipt";
    subtotal?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    automaticDiscount?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    discount?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    tax?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    shipping?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    total?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null;
  discounts?: Array<{
    __typename?: "DiscountSnapshot";
    id?: string | null;
    type?: DiscountType | null;
    title?: string | null;
    appliedOn?: DiscountAppliedOnType | null;
    percentage?: number | null;
    amount?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null> | null;
  paymentIntent?: {
    __typename?: "PaymentIntent";
    id: string;
    status?: string | null;
    embedUrl?: string | null;
    paymentMethod?: PaymentMethodEnum | null;
    paymentMethods?: Array<PaymentMethodEnum | null> | null;
  } | null;
  reviews: Array<{ __typename?: "ProductReview"; productId: string }>;
  errors?: Array<{
    __typename?: "CheckoutError";
    code: ErrorCode;
    resourceId?: string | null;
    params?: {
      __typename?: "Params";
      requestedQuantity?: number | null;
      availableQuantity?: number | null;
      requestedPrice?: number | null;
      availablePrice?: number | null;
      requestedCurrency?: string | null;
      availableCurrency?: string | null;
      message?: string | null;
    } | null;
  } | null> | null;
};

export type ProductInfoFragment = {
  __typename?: "Product";
  id: string;
  type?: ProductType | null;
  locale: string;
  title: string;
  descriptionHtml?: any | null;
  shortDescription?: string | null;
  handle: string;
  createdAt: any;
  updatedAt: any;
  isInStock: boolean;
  integrationProvider?: {
    __typename?: "IntegrationProviderDetails";
    provider?: string | null;
  } | null;
  collections: {
    __typename?: "ProductCollectionConnection";
    totalCount: number;
    nodes?: Array<{
      __typename?: "ProductCollection";
      id: string;
      locale: string;
      title?: string | null;
      handle: string;
      shortDescription?: string | null;
      productsCount: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      seo?: {
        __typename?: "ProductCollectionSEO";
        title?: string | null;
        description?: string | null;
      } | null;
    } | null> | null;
  };
  initialPrice?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  images: Array<{
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null>;
  categories?: Array<{
    __typename?: "CustomProductCategory";
    id: string;
    categoryType: CategoryType;
    name: string;
    isRequired: boolean;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    variants?: Array<{
      __typename?: "CustomProductCategoryVariant";
      preselected?: boolean | null;
      variant?: {
        __typename?: "ProductVariant";
        id: string;
        title?: string | null;
        quantity?: number | null;
        trackQuantity?: boolean | null;
        sku?: string | null;
        cartLimitsEnabled?: boolean | null;
        minPerCart?: number | null;
        maxPerCart?: number | null;
        product: {
          __typename?: "Product";
          id: string;
          title: string;
          status: ProductStatus;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
        };
        price: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        };
        compareAtPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        image?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        selectedOptions: Array<{
          __typename?: "SelectedOption";
          option: { __typename?: "ProductOption"; id: string; name: string };
          value: {
            __typename?: "ProductOptionValue";
            id: string;
            name?: string | null;
          };
        }>;
      } | null;
    } | null> | null;
    settings?: {
      __typename?: "CustomProductCategorySettings";
      maxSelect?: number | null;
      maxQuantity?: number | null;
    } | null;
  } | null> | null;
  variants?: {
    __typename?: "ProductVariantConnection";
    nodes: Array<{
      __typename?: "ProductVariant";
      id: string;
      title?: string | null;
      quantity?: number | null;
      trackQuantity?: boolean | null;
      sku?: string | null;
      cartLimitsEnabled?: boolean | null;
      minPerCart?: number | null;
      maxPerCart?: number | null;
      product: {
        __typename?: "Product";
        id: string;
        title: string;
        status: ProductStatus;
        images: Array<{
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null>;
      };
      price: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      };
      compareAtPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      selectedOptions: Array<{
        __typename?: "SelectedOption";
        option: { __typename?: "ProductOption"; id: string; name: string };
        value: {
          __typename?: "ProductOptionValue";
          id: string;
          name?: string | null;
        };
      }>;
    }>;
  } | null;
  discount?: {
    __typename?: "CustomProductDiscount";
    percent?: number | null;
    fixed?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null;
  attributes?: Array<{
    __typename?: "ProductAttribute";
    id: string;
    name: string;
    values: Array<{
      __typename?: "ProductAttributeValue";
      id: string;
      name?: string | null;
    }>;
  } | null> | null;
  options?: Array<{
    __typename?: "ProductOption";
    name: string;
    values: Array<{
      __typename?: "ProductOptionValue";
      id: string;
      name?: string | null;
    }>;
  } | null> | null;
  reviewsStatistics: {
    __typename?: "ProductReviewsStatistics";
    average: number;
    total: number;
  };
};

export type ProductAttributesInfoFragment = {
  __typename?: "ProductAttribute";
  id: string;
  name: string;
  values: Array<{
    __typename?: "ProductAttributeValue";
    id: string;
    name?: string | null;
  }>;
};

export type ProductOptionsInfoFragment = {
  __typename?: "ProductOption";
  name: string;
  values: Array<{
    __typename?: "ProductOptionValue";
    id: string;
    name?: string | null;
  }>;
};

export type AddressInfoFragment = {
  __typename?: "CustomerAddress";
  id: string;
  addressLine1: string;
  addressLine2?: string | null;
  phone?: string | null;
  secondPhone?: string | null;
  isDefault: boolean;
  postalCode?: string | null;
  state?: { __typename?: "State"; name: string; id: string } | null;
  country?: { __typename?: "Country"; name: string; id: string } | null;
  city?: { __typename?: "City"; name: string; id: string } | null;
  region?: { __typename?: "Region"; name: string; id: string } | null;
};

export type UserOrderInfoFragment = {
  __typename?: "Order";
  id: string;
  orderSerial?: string | null;
  createdAt: any;
  paymentStatus?: OrderPaymentStatusEnum | null;
  fulfillmentStatus?: FulfillStatusEnum | null;
  totalPrice?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
};

export type DiscountFragment = {
  __typename?: "CustomProductDiscount";
  percent?: number | null;
  fixed?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
};

export type ProductBasicInfoFragment = {
  __typename?: "Product";
  id: string;
  title: string;
  handle: string;
  type?: ProductType | null;
  isInStock: boolean;
  source?: SourceType | null;
  integrationProvider?: {
    __typename?: "IntegrationProviderDetails";
    provider?: string | null;
  } | null;
  discount?: {
    __typename?: "CustomProductDiscount";
    percent?: number | null;
    fixed?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null;
  initialPrice?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  images: Array<{
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null>;
  variants?: {
    __typename?: "ProductVariantConnection";
    nodes: Array<{
      __typename?: "ProductVariant";
      id: string;
      title?: string | null;
      quantity?: number | null;
      trackQuantity?: boolean | null;
      sku?: string | null;
      cartLimitsEnabled?: boolean | null;
      minPerCart?: number | null;
      maxPerCart?: number | null;
      product: {
        __typename?: "Product";
        id: string;
        title: string;
        status: ProductStatus;
        images: Array<{
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null>;
      };
      price: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      };
      compareAtPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      selectedOptions: Array<{
        __typename?: "SelectedOption";
        option: { __typename?: "ProductOption"; id: string; name: string };
        value: {
          __typename?: "ProductOptionValue";
          id: string;
          name?: string | null;
        };
      }>;
    }>;
  } | null;
  collections: {
    __typename?: "ProductCollectionConnection";
    totalCount: number;
    nodes?: Array<{
      __typename?: "ProductCollection";
      id: string;
      title?: string | null;
      handle: string;
    } | null> | null;
  };
  reviewsStatistics: {
    __typename?: "ProductReviewsStatistics";
    average: number;
    total: number;
  };
};

export type CustomerInfoFragment = {
  __typename?: "CustomerUser";
  storeId?: string | null;
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  updatedAt?: any | null;
  createdAt?: any | null;
  isGuest?: boolean | null;
  totalSpending?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
};

export type HeroSliderFragment = {
  __typename?: "StoreHomeHero";
  id?: string | null;
  align?: string | null;
  headingText?: string | null;
  subHeadingColor?: string | null;
  subHeadingSize?: number | null;
  subHeadingText?: string | null;
  image?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  mobileImage?: {
    __typename?: "Image";
    id: string;
    altText?: string | null;
    src?: string | null;
    width?: number | null;
    height?: number | null;
    format?: string | null;
  } | null;
  buttons?: Array<{
    __typename?: "Button";
    text?: string | null;
    link?: {
      __typename?: "Link";
      type: LinkType;
      url?: string | null;
      resourceId?: string | null;
      resource?:
        | { __typename: "Product"; handle: string }
        | { __typename: "ProductCollection"; handle: string }
        | { __typename: "StoreLegalPage" }
        | { __typename: "StorePage" }
        | { __typename: "StoreStaticPage" }
        | null;
    } | null;
  } | null> | null;
};

export type InfoBarInfoFragment = {
  __typename?: "InfoBar";
  text: any;
  background: string;
  locales?: Array<string | null> | null;
  locale?: string | null;
  isActive?: boolean | null;
  isDismissible?: boolean | null;
  translations?: Array<{
    __typename?: "InfoBarTranslation";
    text: any;
    locale: string;
  } | null> | null;
};

export type StoreAboutFragment = {
  __typename?: "AboutType";
  title?: string | null;
  content?: string | null;
  isActive?: boolean | null;
};

export type StoreHomeAppearanceFragment = {
  __typename?: "StoreAppearance";
  heroSlider?: Array<{
    __typename?: "StoreHomeHero";
    id?: string | null;
    align?: string | null;
    headingText?: string | null;
    subHeadingColor?: string | null;
    subHeadingSize?: number | null;
    subHeadingText?: string | null;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    mobileImage?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    buttons?: Array<{
      __typename?: "Button";
      text?: string | null;
      link?: {
        __typename?: "Link";
        type: LinkType;
        url?: string | null;
        resourceId?: string | null;
        resource?:
          | { __typename: "Product"; handle: string }
          | { __typename: "ProductCollection"; handle: string }
          | { __typename: "StoreLegalPage" }
          | { __typename: "StorePage" }
          | { __typename: "StoreStaticPage" }
          | null;
      } | null;
    } | null> | null;
  } | null> | null;
  infoBar?: {
    __typename?: "InfoBar";
    text: any;
    background: string;
    locales?: Array<string | null> | null;
    locale?: string | null;
    isActive?: boolean | null;
    isDismissible?: boolean | null;
    translations?: Array<{
      __typename?: "InfoBarTranslation";
      text: any;
      locale: string;
    } | null> | null;
  } | null;
  about?: {
    __typename?: "AboutType";
    title?: string | null;
    content?: string | null;
    isActive?: boolean | null;
  } | null;
};

export type SelectedOptionsFragment = {
  __typename?: "SelectedOption";
  option: { __typename?: "ProductOption"; id: string; name: string };
  value: {
    __typename?: "ProductOptionValue";
    id: string;
    name?: string | null;
  };
};

export type DiscountVariantFragment = {
  __typename?: "ProductVariant";
  id: string;
};

export type DiscountCollectionFragment = {
  __typename?: "ProductCollection";
  id: string;
};

export type BuyXGetYDiscountFragment = {
  __typename?: "BuyXGetYDiscount";
  customerBuys: {
    __typename?: "CustomerBuys";
    quantity?: number | null;
    itemsType?: DiscountItemsType | null;
    value?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    items?: {
      __typename?: "CustomerBuysItems";
      productVariantIds?: Array<string> | null;
      collectionIds?: Array<string> | null;
    } | null;
  };
  customerGets: {
    __typename?: "CustomerGets";
    quantity?: number | null;
    percentage: number;
    itemsType: DiscountItemsType;
    items: {
      __typename?: "CustomerGetsItems";
      productVariants?: Array<{
        __typename?: "ProductVariant";
        id: string;
      }> | null;
      collections?: Array<{
        __typename?: "ProductCollection";
        id: string;
      }> | null;
    };
  };
};

export type AutomaticDiscountFragment = {
  __typename?: "Discount";
  id: string;
  title?: string | null;
  appliedOn?: DiscountAppliedOnType | null;
  percentage?: number | null;
  status?: DiscountStatus | null;
  customerBuys?: {
    __typename?: "CustomerBuys";
    value?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null;
  amount?: {
    __typename?: "Money";
    amount: number;
    currencyCode: CurrencyCode;
  } | null;
  BuyXGetYDiscount?: {
    __typename?: "BuyXGetYDiscount";
    customerBuys: {
      __typename?: "CustomerBuys";
      quantity?: number | null;
      itemsType?: DiscountItemsType | null;
      value?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      items?: {
        __typename?: "CustomerBuysItems";
        productVariantIds?: Array<string> | null;
        collectionIds?: Array<string> | null;
      } | null;
    };
    customerGets: {
      __typename?: "CustomerGets";
      quantity?: number | null;
      percentage: number;
      itemsType: DiscountItemsType;
      items: {
        __typename?: "CustomerGetsItems";
        productVariants?: Array<{
          __typename?: "ProductVariant";
          id: string;
        }> | null;
        collections?: Array<{
          __typename?: "ProductCollection";
          id: string;
        }> | null;
      };
    };
  } | null;
};

export type CheckoutErrorsFragment = {
  __typename?: "CheckoutError";
  code: ErrorCode;
  resourceId?: string | null;
  params?: {
    __typename?: "Params";
    requestedQuantity?: number | null;
    availableQuantity?: number | null;
    requestedPrice?: number | null;
    availablePrice?: number | null;
    requestedCurrency?: string | null;
    availableCurrency?: string | null;
    message?: string | null;
  } | null;
};

export type StorePageSectionsFragment = {
  __typename?: "StorePageSection";
  id: string;
  storeId: string;
  header?: string | null;
  displayAs?: DisplayAsEnum | null;
  locale?: Locale | null;
  showSectionHeader?: boolean | null;
  stretchToFullWidth?: boolean | null;
  itemsPerRow?: number | null;
  translations?: Array<{
    __typename?: "SectionTranslations";
    header?: string | null;
    content?: string | null;
    locale?: Locale | null;
  } | null> | null;
  body:
    | {
        __typename?: "SectionAttributesRow";
        id: string;
        storeId: string;
        type: SectionTypeEnum;
        header: string;
        displayAs: DisplayAsEnum;
        locale: string;
        showSectionHeader: boolean;
        stretchToFullWidth: boolean;
        showItemName: boolean;
        itemsPerRow: number;
        translations: Array<{
          __typename?: "SectionAttributesTranslation";
          header?: string | null;
          locale: string;
        }>;
        background?: {
          __typename?: "SectionBackground";
          type?: SectionBackgroundTypeEnum | null;
          color?: string | null;
        } | null;
        attributeValues: Array<{
          __typename?: "ProductAttributeValue";
          id: string;
          handle?: string | null;
          name?: string | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          attribute?: { __typename?: "ProductAttribute"; id: string } | null;
        }>;
      }
    | {
        __typename?: "SectionBanners";
        type: SectionTypeEnum;
        banners?: Array<{
          __typename?: "Banner";
          id?: string | null;
          mobileImage?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          bannerLink?: {
            __typename?: "Link";
            type: LinkType;
            resourceId?: string | null;
            url?: string | null;
            resource?:
              | {
                  __typename?: "Product";
                  id: string;
                  title: string;
                  handle: string;
                  images: Array<{
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null>;
                }
              | {
                  __typename?: "ProductCollection";
                  id: string;
                  handle: string;
                  collectionTitle?: string | null;
                  image?: {
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null;
                }
              | { __typename?: "StoreLegalPage" }
              | { __typename?: "StorePage" }
              | { __typename?: "StoreStaticPage" }
              | null;
          } | null;
        }> | null;
      }
    | {
        __typename?: "SectionCollectionsRow";
        id: string;
        storeId: string;
        type: SectionTypeEnum;
        header: string;
        displayAs: DisplayAsEnum;
        locale: string;
        showSectionHeader: boolean;
        stretchToFullWidth: boolean;
        showItemName: boolean;
        itemsPerRow: number;
        translations: Array<{
          __typename?: "StorePageCollectionsTranslation";
          header?: string | null;
          locale: string;
        }>;
        background?: {
          __typename?: "SectionBackground";
          type?: SectionBackgroundTypeEnum | null;
          color?: string | null;
        } | null;
        collections: Array<{
          __typename?: "ProductCollection";
          id: string;
          handle: string;
          title?: string | null;
          productsCount: number;
          shortDescription?: string | null;
          seo?: {
            __typename?: "ProductCollectionSEO";
            description?: string | null;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
        }>;
      }
    | { __typename?: "SectionContent"; type: SectionTypeEnum; content: string }
    | {
        __typename?: "SectionProductsRow";
        id: string;
        storeId: string;
        type: SectionTypeEnum;
        header: string;
        displayAs: DisplayAsEnum;
        locale: string;
        showSectionHeader: boolean;
        stretchToFullWidth: boolean;
        itemsPerRow: number;
        productsDisplayNumber: number;
        translations: Array<{
          __typename?: "StorePageProductsTranslation";
          header?: string | null;
          locale: string;
        }>;
        background?: {
          __typename?: "SectionBackground";
          type?: SectionBackgroundTypeEnum | null;
          color?: string | null;
        } | null;
        fromCollection?: {
          __typename?: "ProductCollection";
          id: string;
          handle: string;
        } | null;
        products: Array<{
          __typename?: "Product";
          id: string;
          title: string;
          handle: string;
          type?: ProductType | null;
          isInStock: boolean;
          source?: SourceType | null;
          integrationProvider?: {
            __typename?: "IntegrationProviderDetails";
            provider?: string | null;
          } | null;
          discount?: {
            __typename?: "CustomProductDiscount";
            percent?: number | null;
            fixed?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
          } | null;
          initialPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
          variants?: {
            __typename?: "ProductVariantConnection";
            nodes: Array<{
              __typename?: "ProductVariant";
              id: string;
              title?: string | null;
              quantity?: number | null;
              trackQuantity?: boolean | null;
              sku?: string | null;
              cartLimitsEnabled?: boolean | null;
              minPerCart?: number | null;
              maxPerCart?: number | null;
              product: {
                __typename?: "Product";
                id: string;
                title: string;
                status: ProductStatus;
                images: Array<{
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null>;
              };
              price: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              };
              compareAtPrice?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              selectedOptions: Array<{
                __typename?: "SelectedOption";
                option: {
                  __typename?: "ProductOption";
                  id: string;
                  name: string;
                };
                value: {
                  __typename?: "ProductOptionValue";
                  id: string;
                  name?: string | null;
                };
              }>;
            }>;
          } | null;
          collections: {
            __typename?: "ProductCollectionConnection";
            totalCount: number;
            nodes?: Array<{
              __typename?: "ProductCollection";
              id: string;
              title?: string | null;
              handle: string;
            } | null> | null;
          };
          reviewsStatistics: {
            __typename?: "ProductReviewsStatistics";
            average: number;
            total: number;
          };
        } | null>;
      }
    | {
        __typename?: "SectionVideos";
        type: SectionTypeEnum;
        videosUrls?: Array<string> | null;
      };
};

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;

export type CreateOrderMutation = {
  __typename?: "Mutation";
  createOrder: {
    __typename?: "Order";
    id: string;
    orderSerial?: string | null;
    status?: OrderStatusEnum | null;
    paymentMethod?: PaymentMethodEnum | null;
    createdAt: any;
    paymentStatus?: OrderPaymentStatusEnum | null;
    fulfillmentStatus?: FulfillStatusEnum | null;
    externalActionMessage?: Array<string | null> | null;
    notes?: string | null;
    shippingRateName?: string | null;
    customer: {
      __typename?: "Customer";
      name?: string | null;
      email?: string | null;
      phone?: string | null;
      isSubscribedToNewsLetter?: boolean | null;
    };
    shippingDetails?: {
      __typename?: "OrderShippingDetails";
      trackingURL?: string | null;
    } | null;
    shippingAddress: {
      __typename?: "Address";
      phone?: string | null;
      addressLine1: string;
      addressLine2?: string | null;
      postalCode?: string | null;
      areaSnapshot?: {
        __typename?: "AreaSnapshot";
        countryName?: string | null;
        stateName?: string | null;
        cityName?: string | null;
        regionName?: string | null;
      } | null;
    };
    billingAddress: {
      __typename?: "Address";
      phone?: string | null;
      addressLine1: string;
      addressLine2?: string | null;
      postalCode?: string | null;
      areaSnapshot?: {
        __typename?: "AreaSnapshot";
        countryName?: string | null;
        stateName?: string | null;
        cityName?: string | null;
        regionName?: string | null;
      } | null;
    };
    items: Array<
      | {
          __typename?: "CustomItem";
          id: string;
          quantity: number;
          title?: string | null;
          categories: Array<{
            __typename?: "CustomBuildCategory";
            category: {
              __typename?: "CustomProductCategory";
              id: string;
              categoryType: CategoryType;
              name: string;
              isRequired: boolean;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              variants?: Array<{
                __typename?: "CustomProductCategoryVariant";
                preselected?: boolean | null;
                variant?: {
                  __typename?: "ProductVariant";
                  id: string;
                  title?: string | null;
                  quantity?: number | null;
                  trackQuantity?: boolean | null;
                  sku?: string | null;
                  cartLimitsEnabled?: boolean | null;
                  minPerCart?: number | null;
                  maxPerCart?: number | null;
                  product: {
                    __typename?: "Product";
                    id: string;
                    title: string;
                    status: ProductStatus;
                    images: Array<{
                      __typename?: "Image";
                      id: string;
                      altText?: string | null;
                      src?: string | null;
                      width?: number | null;
                      height?: number | null;
                      format?: string | null;
                    } | null>;
                  };
                  price: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  };
                  compareAtPrice?: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  } | null;
                  image?: {
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null;
                  selectedOptions: Array<{
                    __typename?: "SelectedOption";
                    option: {
                      __typename?: "ProductOption";
                      id: string;
                      name: string;
                    };
                    value: {
                      __typename?: "ProductOptionValue";
                      id: string;
                      name?: string | null;
                    };
                  }>;
                } | null;
              } | null> | null;
              settings?: {
                __typename?: "CustomProductCategorySettings";
                maxSelect?: number | null;
                maxQuantity?: number | null;
              } | null;
            };
            selectedVariants: Array<{
              __typename?: "SelectedVariant";
              quantity: number;
              variantSnapshot?: {
                __typename?: "ProductVariantSnapshot";
                id: string;
                sku?: string | null;
                quantity?: number | null;
                productId: string;
                productTitle?: string | null;
                image?: {
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null;
                productImages?: Array<{
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null> | null;
              } | null;
              price?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
              selectedOptions: Array<{
                __typename?: "SelectedVariantOption";
                value: string;
                name: string;
              }>;
            }>;
          }>;
          subtotal?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          productSnapshot?: {
            __typename?: "ProductSnapshot";
            id: string;
            title: string;
            handle: string;
            collectionIds: Array<string | null>;
            integrationProvider?: {
              __typename?: "IntegrationProviderDetailsSnapshot";
              provider?: string | null;
            } | null;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          } | null;
          price?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          discount?: {
            __typename?: "OrderItemDiscountDetails";
            discountSource: DiscountSource;
            quantity: number;
            info: {
              __typename?: "OrderItemDiscountDetailsInfo";
              percentage?: number | null;
              fixed?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
            };
            perItem: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            total: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
          } | null;
        }
      | {
          __typename?: "SimpleItem";
          id: string;
          quantity: number;
          title?: string | null;
          selectedOptions: Array<{
            __typename?: "SelectedVariantOption";
            value: string;
            name: string;
          }>;
          variantSnapshot?: {
            __typename?: "ProductVariantSnapshot";
            id: string;
            sku?: string | null;
            quantity?: number | null;
            productId: string;
            productTitle?: string | null;
            image?: {
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null;
            productImages?: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null> | null;
          } | null;
          subtotal?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          productSnapshot?: {
            __typename?: "ProductSnapshot";
            id: string;
            title: string;
            handle: string;
            collectionIds: Array<string | null>;
            integrationProvider?: {
              __typename?: "IntegrationProviderDetailsSnapshot";
              provider?: string | null;
            } | null;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          } | null;
          price?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          discount?: {
            __typename?: "OrderItemDiscountDetails";
            discountSource: DiscountSource;
            quantity: number;
            info: {
              __typename?: "OrderItemDiscountDetailsInfo";
              percentage?: number | null;
              fixed?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
            };
            perItem: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            total: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
          } | null;
        }
      | null
    >;
    shippingRateCost: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    };
    promoCodeSnapshot?: {
      __typename?: "PromoCode";
      code: string;
      percentageOff?: number | null;
    } | null;
    taxSnapshot?: {
      __typename?: "Tax";
      id: string;
      storeId: string;
      percentageOff: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    receipt?: {
      __typename?: "OrderReceipt";
      subtotal?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      automaticDiscount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      discount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      tax?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      shipping?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      total?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null;
    discounts?: Array<{
      __typename?: "DiscountSnapshot";
      id?: string | null;
      type?: DiscountType | null;
      title?: string | null;
      appliedOn?: DiscountAppliedOnType | null;
      percentage?: number | null;
      amount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null> | null;
    paymentIntent?: {
      __typename?: "PaymentIntent";
      id: string;
      status?: string | null;
      embedUrl?: string | null;
      paymentMethod?: PaymentMethodEnum | null;
      paymentMethods?: Array<PaymentMethodEnum | null> | null;
    } | null;
    reviews: Array<{ __typename?: "ProductReview"; productId: string }>;
    errors?: Array<{
      __typename?: "CheckoutError";
      code: ErrorCode;
      resourceId?: string | null;
      params?: {
        __typename?: "Params";
        requestedQuantity?: number | null;
        availableQuantity?: number | null;
        requestedPrice?: number | null;
        availablePrice?: number | null;
        requestedCurrency?: string | null;
        availableCurrency?: string | null;
        message?: string | null;
      } | null;
    } | null> | null;
  };
};

export type UpdateOrderPromoMutationVariables = Exact<{
  UpdateOrderPromoInput: UpdateOrderPromoInput;
}>;

export type UpdateOrderPromoMutation = {
  __typename?: "Mutation";
  updateOrderPromo: {
    __typename?: "Order";
    promoCode?: {
      __typename?: "PromoCode";
      code: string;
      percentageOff?: number | null;
    } | null;
  };
};

export type SubmitStoreContactFormMutationVariables = Exact<{
  input: SubmitStoreContactFormInput;
}>;

export type SubmitStoreContactFormMutation = {
  __typename?: "Mutation";
  submitStoreContactForm: {
    __typename?: "SubmitStoreContactFormPayload";
    statusCode: number;
    message: string;
  };
};

export type UpdateOrderPaymentMethodMutationVariables = Exact<{
  orderId: Scalars["ID"];
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  storeId: Scalars["ID"];
}>;

export type UpdateOrderPaymentMethodMutation = {
  __typename?: "Mutation";
  updateOrderPaymentMethod?: {
    __typename?: "PaymentIntent";
    id: string;
    status?: string | null;
    embedUrl?: string | null;
    paymentMethod?: PaymentMethodEnum | null;
    paymentMethods?: Array<PaymentMethodEnum | null> | null;
  } | null;
};

export type CancelPaymentMutationVariables = Exact<{
  storeId: Scalars["ID"];
  orderId: Scalars["ID"];
}>;

export type CancelPaymentMutation = {
  __typename?: "Mutation";
  cancelPayment?: {
    __typename?: "PaymentIntent";
    status?: string | null;
  } | null;
};

export type ConfirmIntentMutationVariables = Exact<{
  id: Scalars["ID"];
  storeId: Scalars["ID"];
}>;

export type ConfirmIntentMutation = {
  __typename?: "Mutation";
  confirmPaymentIntent?: {
    __typename?: "PaymentIntent";
    id: string;
    status?: string | null;
    embedUrl?: string | null;
    paymentMethod?: PaymentMethodEnum | null;
    paymentMethods?: Array<PaymentMethodEnum | null> | null;
  } | null;
};

export type AddCustomerAddressMutationVariables = Exact<{
  customerId: Scalars["ID"];
  input: AddCustomerAddressInput;
}>;

export type AddCustomerAddressMutation = {
  __typename?: "Mutation";
  addCustomerAddress: {
    __typename?: "CustomerAddress";
    id: string;
    addressLine1: string;
    addressLine2?: string | null;
    phone?: string | null;
    secondPhone?: string | null;
    isDefault: boolean;
    postalCode?: string | null;
    state?: { __typename?: "State"; name: string; id: string } | null;
    country?: { __typename?: "Country"; name: string; id: string } | null;
    city?: { __typename?: "City"; name: string; id: string } | null;
    region?: { __typename?: "Region"; name: string; id: string } | null;
  };
};

export type UpdateCustomerAddressMutationVariables = Exact<{
  customerId: Scalars["ID"];
  addressId: Scalars["ID"];
  input: UpdateCustomerAddressInput;
}>;

export type UpdateCustomerAddressMutation = {
  __typename?: "Mutation";
  updateCustomerAddress: {
    __typename?: "CustomerAddress";
    id: string;
    addressLine1: string;
    addressLine2?: string | null;
    phone?: string | null;
    secondPhone?: string | null;
    isDefault: boolean;
    postalCode?: string | null;
    state?: { __typename?: "State"; name: string; id: string } | null;
    country?: { __typename?: "Country"; name: string; id: string } | null;
    city?: { __typename?: "City"; name: string; id: string } | null;
    region?: { __typename?: "Region"; name: string; id: string } | null;
  };
};

export type DeleteCustomerAddressMutationVariables = Exact<{
  customerId: Scalars["ID"];
  addressId: Scalars["ID"];
  storeId: Scalars["ID"];
}>;

export type DeleteCustomerAddressMutation = {
  __typename?: "Mutation";
  deleteCustomerAddress: boolean;
};

export type MakeDefaultAddressMutationVariables = Exact<{
  customerId: Scalars["ID"];
  addressId: Scalars["ID"];
  storeId: Scalars["ID"];
}>;

export type MakeDefaultAddressMutation = {
  __typename?: "Mutation";
  makeDefaultAddress: {
    __typename?: "CustomerAddress";
    id: string;
    addressLine1: string;
    addressLine2?: string | null;
    phone?: string | null;
    secondPhone?: string | null;
    isDefault: boolean;
    postalCode?: string | null;
    state?: { __typename?: "State"; name: string; id: string } | null;
    country?: { __typename?: "Country"; name: string; id: string } | null;
    city?: { __typename?: "City"; name: string; id: string } | null;
    region?: { __typename?: "Region"; name: string; id: string } | null;
  };
};

export type UpdateCustomerInfoMutationVariables = Exact<{
  storeId: Scalars["ID"];
  customerId: Scalars["ID"];
  input?: InputMaybe<UpdateCustomerUserInput>;
}>;

export type UpdateCustomerInfoMutation = {
  __typename?: "Mutation";
  updateCustomer?: {
    __typename?: "CustomerUser";
    id: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
  } | null;
};

export type UpdateCustomerPasswordMutationVariables = Exact<{
  oldPassword: Scalars["String"];
  newPassword: Scalars["String"];
}>;

export type UpdateCustomerPasswordMutation = {
  __typename?: "Mutation";
  updateCustomerPassword: boolean;
};

export type SubmitReviewMutationVariables = Exact<{
  storeId: Scalars["ID"];
  review: CreateProductReviewInput;
}>;

export type SubmitReviewMutation = {
  __typename?: "Mutation";
  submitReview: { __typename?: "ProductReview"; id: string };
};

export type DeleteReviewMutationVariables = Exact<{
  storeId: Scalars["ID"];
  reviewId: Scalars["ID"];
}>;

export type DeleteReviewMutation = {
  __typename?: "Mutation";
  deleteReview: boolean;
};

export type EditReviewMutationVariables = Exact<{
  storeId: Scalars["ID"];
  reviewId: Scalars["ID"];
  review: UpdateProductReviewInput;
}>;

export type EditReviewMutation = {
  __typename?: "Mutation";
  editReview: { __typename?: "ProductReview"; id: string };
};

export type StoreHomepageQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type StoreHomepageQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    products: {
      __typename?: "ProductConnection";
      nodes: Array<{
        __typename?: "Product";
        id: string;
        title: string;
        handle: string;
        type?: ProductType | null;
        isInStock: boolean;
        source?: SourceType | null;
        integrationProvider?: {
          __typename?: "IntegrationProviderDetails";
          provider?: string | null;
        } | null;
        discount?: {
          __typename?: "CustomProductDiscount";
          percent?: number | null;
          fixed?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
        } | null;
        initialPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        images: Array<{
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null>;
        variants?: {
          __typename?: "ProductVariantConnection";
          nodes: Array<{
            __typename?: "ProductVariant";
            id: string;
            title?: string | null;
            quantity?: number | null;
            trackQuantity?: boolean | null;
            sku?: string | null;
            cartLimitsEnabled?: boolean | null;
            minPerCart?: number | null;
            maxPerCart?: number | null;
            product: {
              __typename?: "Product";
              id: string;
              title: string;
              status: ProductStatus;
              images: Array<{
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null>;
            };
            price: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            compareAtPrice?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
            image?: {
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null;
            selectedOptions: Array<{
              __typename?: "SelectedOption";
              option: {
                __typename?: "ProductOption";
                id: string;
                name: string;
              };
              value: {
                __typename?: "ProductOptionValue";
                id: string;
                name?: string | null;
              };
            }>;
          }>;
        } | null;
        collections: {
          __typename?: "ProductCollectionConnection";
          totalCount: number;
          nodes?: Array<{
            __typename?: "ProductCollection";
            id: string;
            title?: string | null;
            handle: string;
          } | null> | null;
        };
        reviewsStatistics: {
          __typename?: "ProductReviewsStatistics";
          average: number;
          total: number;
        };
      }>;
    };
    StoreHomePageSections?: Array<{
      __typename?: "StorePageSection";
      id: string;
      storeId: string;
      header?: string | null;
      displayAs?: DisplayAsEnum | null;
      locale?: Locale | null;
      showSectionHeader?: boolean | null;
      stretchToFullWidth?: boolean | null;
      itemsPerRow?: number | null;
      translations?: Array<{
        __typename?: "SectionTranslations";
        header?: string | null;
        content?: string | null;
        locale?: Locale | null;
      } | null> | null;
      body:
        | {
            __typename?: "SectionAttributesRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            showItemName: boolean;
            itemsPerRow: number;
            translations: Array<{
              __typename?: "SectionAttributesTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            attributeValues: Array<{
              __typename?: "ProductAttributeValue";
              id: string;
              handle?: string | null;
              name?: string | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              attribute?: {
                __typename?: "ProductAttribute";
                id: string;
              } | null;
            }>;
          }
        | {
            __typename?: "SectionBanners";
            type: SectionTypeEnum;
            banners?: Array<{
              __typename?: "Banner";
              id?: string | null;
              mobileImage?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              bannerLink?: {
                __typename?: "Link";
                type: LinkType;
                resourceId?: string | null;
                url?: string | null;
                resource?:
                  | {
                      __typename?: "Product";
                      id: string;
                      title: string;
                      handle: string;
                      images: Array<{
                        __typename?: "Image";
                        id: string;
                        altText?: string | null;
                        src?: string | null;
                        width?: number | null;
                        height?: number | null;
                        format?: string | null;
                      } | null>;
                    }
                  | {
                      __typename?: "ProductCollection";
                      id: string;
                      handle: string;
                      collectionTitle?: string | null;
                      image?: {
                        __typename?: "Image";
                        id: string;
                        altText?: string | null;
                        src?: string | null;
                        width?: number | null;
                        height?: number | null;
                        format?: string | null;
                      } | null;
                    }
                  | { __typename?: "StoreLegalPage" }
                  | { __typename?: "StorePage" }
                  | { __typename?: "StoreStaticPage" }
                  | null;
              } | null;
            }> | null;
          }
        | {
            __typename?: "SectionCollectionsRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            showItemName: boolean;
            itemsPerRow: number;
            translations: Array<{
              __typename?: "StorePageCollectionsTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            collections: Array<{
              __typename?: "ProductCollection";
              id: string;
              handle: string;
              title?: string | null;
              productsCount: number;
              shortDescription?: string | null;
              seo?: {
                __typename?: "ProductCollectionSEO";
                description?: string | null;
              } | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
            }>;
          }
        | {
            __typename?: "SectionContent";
            type: SectionTypeEnum;
            content: string;
          }
        | {
            __typename?: "SectionProductsRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            itemsPerRow: number;
            productsDisplayNumber: number;
            translations: Array<{
              __typename?: "StorePageProductsTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            fromCollection?: {
              __typename?: "ProductCollection";
              id: string;
              handle: string;
            } | null;
            products: Array<{
              __typename?: "Product";
              id: string;
              title: string;
              handle: string;
              type?: ProductType | null;
              isInStock: boolean;
              source?: SourceType | null;
              integrationProvider?: {
                __typename?: "IntegrationProviderDetails";
                provider?: string | null;
              } | null;
              discount?: {
                __typename?: "CustomProductDiscount";
                percent?: number | null;
                fixed?: {
                  __typename?: "Money";
                  amount: number;
                  currencyCode: CurrencyCode;
                } | null;
              } | null;
              initialPrice?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
              images: Array<{
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null>;
              variants?: {
                __typename?: "ProductVariantConnection";
                nodes: Array<{
                  __typename?: "ProductVariant";
                  id: string;
                  title?: string | null;
                  quantity?: number | null;
                  trackQuantity?: boolean | null;
                  sku?: string | null;
                  cartLimitsEnabled?: boolean | null;
                  minPerCart?: number | null;
                  maxPerCart?: number | null;
                  product: {
                    __typename?: "Product";
                    id: string;
                    title: string;
                    status: ProductStatus;
                    images: Array<{
                      __typename?: "Image";
                      id: string;
                      altText?: string | null;
                      src?: string | null;
                      width?: number | null;
                      height?: number | null;
                      format?: string | null;
                    } | null>;
                  };
                  price: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  };
                  compareAtPrice?: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  } | null;
                  image?: {
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null;
                  selectedOptions: Array<{
                    __typename?: "SelectedOption";
                    option: {
                      __typename?: "ProductOption";
                      id: string;
                      name: string;
                    };
                    value: {
                      __typename?: "ProductOptionValue";
                      id: string;
                      name?: string | null;
                    };
                  }>;
                }>;
              } | null;
              collections: {
                __typename?: "ProductCollectionConnection";
                totalCount: number;
                nodes?: Array<{
                  __typename?: "ProductCollection";
                  id: string;
                  title?: string | null;
                  handle: string;
                } | null> | null;
              };
              reviewsStatistics: {
                __typename?: "ProductReviewsStatistics";
                average: number;
                total: number;
              };
            } | null>;
          }
        | {
            __typename?: "SectionVideos";
            type: SectionTypeEnum;
            videosUrls?: Array<string> | null;
          };
    } | null> | null;
    appearance?: {
      __typename?: "StoreAppearance";
      heroSlider?: Array<{
        __typename?: "StoreHomeHero";
        id?: string | null;
        align?: string | null;
        headingText?: string | null;
        subHeadingColor?: string | null;
        subHeadingSize?: number | null;
        subHeadingText?: string | null;
        image?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        mobileImage?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        buttons?: Array<{
          __typename?: "Button";
          text?: string | null;
          link?: {
            __typename?: "Link";
            type: LinkType;
            url?: string | null;
            resourceId?: string | null;
            resource?:
              | { __typename: "Product"; handle: string }
              | { __typename: "ProductCollection"; handle: string }
              | { __typename: "StoreLegalPage" }
              | { __typename: "StorePage" }
              | { __typename: "StoreStaticPage" }
              | null;
          } | null;
        } | null> | null;
      } | null> | null;
      infoBar?: {
        __typename?: "InfoBar";
        text: any;
        background: string;
        locales?: Array<string | null> | null;
        locale?: string | null;
        isActive?: boolean | null;
        isDismissible?: boolean | null;
        translations?: Array<{
          __typename?: "InfoBarTranslation";
          text: any;
          locale: string;
        } | null> | null;
      } | null;
      about?: {
        __typename?: "AboutType";
        title?: string | null;
        content?: string | null;
        isActive?: boolean | null;
      } | null;
    } | null;
  } | null;
  storePaymentMethods?: Array<{
    __typename?: "StorePaymentMethod";
    id?: string | null;
    type: StorePaymentMethods;
    enabled: boolean;
  } | null> | null;
};

export type CollectionsQueryVariables = Exact<{
  ids?: InputMaybe<
    Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>
  >;
}>;

export type CollectionsQuery = {
  __typename?: "Query";
  collections?: {
    __typename?: "ProductCollectionConnection";
    nodes?: Array<{
      __typename?: "ProductCollection";
      id: string;
      locale: string;
      title?: string | null;
      handle: string;
      shortDescription?: string | null;
      productsCount: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      seo?: {
        __typename?: "ProductCollectionSEO";
        title?: string | null;
        description?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ProductDetailsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  slug?: InputMaybe<Scalars["String"]>;
  collectionHandle?: Scalars["String"];
}>;

export type ProductDetailsQuery = {
  __typename?: "Query";
  collection?: {
    __typename?: "ProductCollection";
    id: string;
    locale: string;
    title?: string | null;
    handle: string;
    shortDescription?: string | null;
    productsCount: number;
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    seo?: {
      __typename?: "ProductCollectionSEO";
      title?: string | null;
      description?: string | null;
    } | null;
  } | null;
  product?: {
    __typename?: "Product";
    id: string;
    type?: ProductType | null;
    locale: string;
    title: string;
    descriptionHtml?: any | null;
    shortDescription?: string | null;
    handle: string;
    createdAt: any;
    updatedAt: any;
    isInStock: boolean;
    options?: Array<{
      __typename?: "ProductOption";
      name: string;
      values: Array<{
        __typename?: "ProductOptionValue";
        id: string;
        name?: string | null;
      }>;
    } | null> | null;
    seo?: {
      __typename?: "ProductSEO";
      title?: string | null;
      description?: string | null;
    } | null;
    attributes?: Array<{
      __typename?: "ProductAttribute";
      id: string;
      name: string;
      values: Array<{
        __typename?: "ProductAttributeValue";
        id: string;
        name?: string | null;
      }>;
    } | null> | null;
    integrationProvider?: {
      __typename?: "IntegrationProviderDetails";
      provider?: string | null;
    } | null;
    collections: {
      __typename?: "ProductCollectionConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "ProductCollection";
        id: string;
        locale: string;
        title?: string | null;
        handle: string;
        shortDescription?: string | null;
        productsCount: number;
        image?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        seo?: {
          __typename?: "ProductCollectionSEO";
          title?: string | null;
          description?: string | null;
        } | null;
      } | null> | null;
    };
    initialPrice?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
    images: Array<{
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null>;
    categories?: Array<{
      __typename?: "CustomProductCategory";
      id: string;
      categoryType: CategoryType;
      name: string;
      isRequired: boolean;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      variants?: Array<{
        __typename?: "CustomProductCategoryVariant";
        preselected?: boolean | null;
        variant?: {
          __typename?: "ProductVariant";
          id: string;
          title?: string | null;
          quantity?: number | null;
          trackQuantity?: boolean | null;
          sku?: string | null;
          cartLimitsEnabled?: boolean | null;
          minPerCart?: number | null;
          maxPerCart?: number | null;
          product: {
            __typename?: "Product";
            id: string;
            title: string;
            status: ProductStatus;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          };
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          compareAtPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          selectedOptions: Array<{
            __typename?: "SelectedOption";
            option: { __typename?: "ProductOption"; id: string; name: string };
            value: {
              __typename?: "ProductOptionValue";
              id: string;
              name?: string | null;
            };
          }>;
        } | null;
      } | null> | null;
      settings?: {
        __typename?: "CustomProductCategorySettings";
        maxSelect?: number | null;
        maxQuantity?: number | null;
      } | null;
    } | null> | null;
    variants?: {
      __typename?: "ProductVariantConnection";
      nodes: Array<{
        __typename?: "ProductVariant";
        id: string;
        title?: string | null;
        quantity?: number | null;
        trackQuantity?: boolean | null;
        sku?: string | null;
        cartLimitsEnabled?: boolean | null;
        minPerCart?: number | null;
        maxPerCart?: number | null;
        product: {
          __typename?: "Product";
          id: string;
          title: string;
          status: ProductStatus;
          images: Array<{
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null>;
        };
        price: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        };
        compareAtPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        image?: {
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null;
        selectedOptions: Array<{
          __typename?: "SelectedOption";
          option: { __typename?: "ProductOption"; id: string; name: string };
          value: {
            __typename?: "ProductOptionValue";
            id: string;
            name?: string | null;
          };
        }>;
      }>;
    } | null;
    discount?: {
      __typename?: "CustomProductDiscount";
      percent?: number | null;
      fixed?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null;
    reviewsStatistics: {
      __typename?: "ProductReviewsStatistics";
      average: number;
      total: number;
    };
  } | null;
};

export type ReviewsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  productId: Scalars["ID"];
  connection: ReviewsConnectionInput;
}>;

export type ReviewsQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "Product";
    reviewsStatistics: {
      __typename?: "ProductReviewsStatistics";
      average: number;
      total: number;
      starsCount: {
        __typename?: "ProductStarsCount";
        five: number;
        four: number;
        one: number;
        three: number;
        two: number;
      };
    };
    reviews?: Array<{
      __typename?: "ProductReview";
      id: string;
      content?: string | null;
      createdAt: any;
      customerId: string;
      headline: string;
      orderId?: string | null;
      rating: number;
      showName: boolean;
      customer?: { __typename?: "CustomerUser"; name?: string | null } | null;
      reply?: {
        __typename?: "StoreAdminReply";
        content?: string | null;
      } | null;
    }> | null;
  } | null;
};

export type StoreCollectionsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  connection?: InputMaybe<ProductCollectionConnectionInput>;
}>;

export type StoreCollectionsQuery = {
  __typename?: "Query";
  collections?: {
    __typename?: "ProductCollectionConnection";
    totalCount: number;
    nodes?: Array<{
      __typename?: "ProductCollection";
      id: string;
      locale: string;
      title?: string | null;
      handle: string;
      shortDescription?: string | null;
      productsCount: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
      seo?: {
        __typename?: "ProductCollectionSEO";
        title?: string | null;
        description?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type StoreProductsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  priceFrom?: InputMaybe<Scalars["Float"]>;
  priceTo?: InputMaybe<Scalars["Float"]>;
  sortOrder?: InputMaybe<SortOrder>;
  sortBy?: InputMaybe<ProductSortByField>;
}>;

export type StoreProductsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "ProductConnection";
    totalCount: number;
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: any | null;
      endCursor?: any | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    nodes: Array<{
      __typename?: "Product";
      id: string;
      title: string;
      handle: string;
      type?: ProductType | null;
      isInStock: boolean;
      source?: SourceType | null;
      integrationProvider?: {
        __typename?: "IntegrationProviderDetails";
        provider?: string | null;
      } | null;
      discount?: {
        __typename?: "CustomProductDiscount";
        percent?: number | null;
        fixed?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null;
      initialPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      images: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null>;
      variants?: {
        __typename?: "ProductVariantConnection";
        nodes: Array<{
          __typename?: "ProductVariant";
          id: string;
          title?: string | null;
          quantity?: number | null;
          trackQuantity?: boolean | null;
          sku?: string | null;
          cartLimitsEnabled?: boolean | null;
          minPerCart?: number | null;
          maxPerCart?: number | null;
          product: {
            __typename?: "Product";
            id: string;
            title: string;
            status: ProductStatus;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          };
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          compareAtPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          selectedOptions: Array<{
            __typename?: "SelectedOption";
            option: { __typename?: "ProductOption"; id: string; name: string };
            value: {
              __typename?: "ProductOptionValue";
              id: string;
              name?: string | null;
            };
          }>;
        }>;
      } | null;
      collections: {
        __typename?: "ProductCollectionConnection";
        totalCount: number;
        nodes?: Array<{
          __typename?: "ProductCollection";
          id: string;
          title?: string | null;
          handle: string;
        } | null> | null;
      };
      reviewsStatistics: {
        __typename?: "ProductReviewsStatistics";
        average: number;
        total: number;
      };
    }>;
  };
};

export type SearchProductsQueryVariables = Exact<{
  connection?: InputMaybe<ProductsConnectionInput>;
  filter?: InputMaybe<ProductsFilterInput>;
}>;

export type SearchProductsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "ProductConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "Product";
      id: string;
      title: string;
      handle: string;
      type?: ProductType | null;
      initialPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      images: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null>;
      collections: {
        __typename?: "ProductCollectionConnection";
        nodes?: Array<{
          __typename?: "ProductCollection";
          id: string;
          handle: string;
        } | null> | null;
      };
      variants?: {
        __typename?: "ProductVariantConnection";
        nodes: Array<{
          __typename?: "ProductVariant";
          id: string;
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
        }>;
      } | null;
    }>;
  };
};

export type SearchAndFiltersQueryVariables = Exact<{
  storeId: Scalars["ID"];
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
}>;

export type SearchAndFiltersQuery = {
  __typename?: "Query";
  searchCatalog?: {
    __typename?: "CatalogSearchResults";
    products?: Array<{
      __typename?: "Product";
      id: string;
      title: string;
      handle: string;
      type?: ProductType | null;
      isInStock: boolean;
      source?: SourceType | null;
      integrationProvider?: {
        __typename?: "IntegrationProviderDetails";
        provider?: string | null;
      } | null;
      discount?: {
        __typename?: "CustomProductDiscount";
        percent?: number | null;
        fixed?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null;
      initialPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      images: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null>;
      variants?: {
        __typename?: "ProductVariantConnection";
        nodes: Array<{
          __typename?: "ProductVariant";
          id: string;
          title?: string | null;
          quantity?: number | null;
          trackQuantity?: boolean | null;
          sku?: string | null;
          cartLimitsEnabled?: boolean | null;
          minPerCart?: number | null;
          maxPerCart?: number | null;
          product: {
            __typename?: "Product";
            id: string;
            title: string;
            status: ProductStatus;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          };
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          compareAtPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          selectedOptions: Array<{
            __typename?: "SelectedOption";
            option: { __typename?: "ProductOption"; id: string; name: string };
            value: {
              __typename?: "ProductOptionValue";
              id: string;
              name?: string | null;
            };
          }>;
        }>;
      } | null;
      collections: {
        __typename?: "ProductCollectionConnection";
        totalCount: number;
        nodes?: Array<{
          __typename?: "ProductCollection";
          id: string;
          title?: string | null;
          handle: string;
        } | null> | null;
      };
      reviewsStatistics: {
        __typename?: "ProductReviewsStatistics";
        average: number;
        total: number;
      };
    } | null> | null;
    metaData?: {
      __typename?: "CatalogSearchMetaData";
      totalCount?: number | null;
      collectionsProductsDistribution?: Array<{
        __typename?: "CollectionProductsCount";
        collectionId?: string | null;
        count?: number | null;
        collection?: {
          __typename?: "ProductCollection";
          isDeleted?: boolean | null;
          isArchived?: boolean | null;
          isVisible?: boolean | null;
          id: string;
          title?: string | null;
        } | null;
      } | null> | null;
      attributesProductsDistribution?: Array<{
        __typename?: "AttributeProductsCount";
        count?: number | null;
        attributeValueId?: string | null;
        attributeValue?: {
          __typename?: "ProductAttributeValue";
          id: string;
          name?: string | null;
          attribute?: {
            __typename?: "ProductAttribute";
            id: string;
            name: string;
          } | null;
        } | null;
      } | null> | null;
      optionsProductsDistribution?: Array<{
        __typename?: "OptionProductsCount";
        optionValueId?: string | null;
        count?: number | null;
        optionValue?: {
          __typename?: "ProductOptionValue";
          id: string;
          name?: string | null;
          option?: {
            __typename?: "ProductOption";
            id: string;
            name: string;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type CheckVariantsStatusQueryVariables = Exact<{
  storeId: Scalars["ID"];
  variantIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type CheckVariantsStatusQuery = {
  __typename?: "Query";
  checkVariantsStatus: Array<{
    __typename?: "ProductVariantStatus";
    id: string;
    status: ProductStatus;
    trackQuantity?: boolean | null;
    quantity?: number | null;
  } | null>;
};

export type GetFiltersQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type GetFiltersQuery = {
  __typename?: "Query";
  getApplicableFilters?: {
    __typename?: "CatalogFilters";
    collections?: Array<{
      __typename?: "ProductCollection";
      title?: string | null;
      id: string;
      isDeleted?: boolean | null;
      isArchived?: boolean | null;
      isVisible?: boolean | null;
    } | null> | null;
    optionValues?: Array<{
      __typename?: "ProductOptionValue";
      name?: string | null;
      id: string;
      option?: {
        __typename?: "ProductOption";
        name: string;
        id: string;
      } | null;
    } | null> | null;
    attributeValues?: Array<{
      __typename?: "ProductAttributeValue";
      name?: string | null;
      id: string;
      attribute?: {
        __typename?: "ProductAttribute";
        name: string;
        id: string;
      } | null;
    } | null> | null;
  } | null;
};

export type FullTextSearchAndFilterQueryVariables = Exact<{
  storeId: Scalars["ID"];
  connectionSettings?: InputMaybe<ProductsConnectionInput>;
  filters?: InputMaybe<CatalogSearchFilters>;
}>;

export type FullTextSearchAndFilterQuery = {
  __typename?: "Query";
  fullTextSearchAndFilter?: {
    __typename?: "SearchAndFilterResults";
    totalCount?: number | null;
    products?: Array<{
      __typename?: "Product";
      id: string;
      title: string;
      handle: string;
      type?: ProductType | null;
      isInStock: boolean;
      source?: SourceType | null;
      integrationProvider?: {
        __typename?: "IntegrationProviderDetails";
        provider?: string | null;
      } | null;
      discount?: {
        __typename?: "CustomProductDiscount";
        percent?: number | null;
        fixed?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null;
      initialPrice?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      images: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null>;
      variants?: {
        __typename?: "ProductVariantConnection";
        nodes: Array<{
          __typename?: "ProductVariant";
          id: string;
          title?: string | null;
          quantity?: number | null;
          trackQuantity?: boolean | null;
          sku?: string | null;
          cartLimitsEnabled?: boolean | null;
          minPerCart?: number | null;
          maxPerCart?: number | null;
          product: {
            __typename?: "Product";
            id: string;
            title: string;
            status: ProductStatus;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          };
          price: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          };
          compareAtPrice?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          image?: {
            __typename?: "Image";
            id: string;
            altText?: string | null;
            src?: string | null;
            width?: number | null;
            height?: number | null;
            format?: string | null;
          } | null;
          selectedOptions: Array<{
            __typename?: "SelectedOption";
            option: { __typename?: "ProductOption"; id: string; name: string };
            value: {
              __typename?: "ProductOptionValue";
              id: string;
              name?: string | null;
            };
          }>;
        }>;
      } | null;
      collections: {
        __typename?: "ProductCollectionConnection";
        totalCount: number;
        nodes?: Array<{
          __typename?: "ProductCollection";
          id: string;
          title?: string | null;
          handle: string;
        } | null> | null;
      };
      reviewsStatistics: {
        __typename?: "ProductReviewsStatistics";
        average: number;
        total: number;
      };
    } | null> | null;
  } | null;
};

export type CollectionProductsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  handle: Scalars["String"];
  first?: InputMaybe<Scalars["ConnectionLimitInt"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  priceFrom?: InputMaybe<Scalars["Float"]>;
  priceTo?: InputMaybe<Scalars["Float"]>;
  sortOrder?: InputMaybe<SortOrder>;
  sortBy?: InputMaybe<CollectionProductsSortBy>;
}>;

export type CollectionProductsQuery = {
  __typename?: "Query";
  collection?: {
    __typename?: "ProductCollection";
    id: string;
    locale: string;
    title?: string | null;
    handle: string;
    shortDescription?: string | null;
    productsCount: number;
    products: {
      __typename?: "ProductConnection";
      totalCount: number;
      nodes: Array<{
        __typename?: "Product";
        id: string;
        title: string;
        handle: string;
        type?: ProductType | null;
        isInStock: boolean;
        source?: SourceType | null;
        integrationProvider?: {
          __typename?: "IntegrationProviderDetails";
          provider?: string | null;
        } | null;
        discount?: {
          __typename?: "CustomProductDiscount";
          percent?: number | null;
          fixed?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
        } | null;
        initialPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
        images: Array<{
          __typename?: "Image";
          id: string;
          altText?: string | null;
          src?: string | null;
          width?: number | null;
          height?: number | null;
          format?: string | null;
        } | null>;
        variants?: {
          __typename?: "ProductVariantConnection";
          nodes: Array<{
            __typename?: "ProductVariant";
            id: string;
            title?: string | null;
            quantity?: number | null;
            trackQuantity?: boolean | null;
            sku?: string | null;
            cartLimitsEnabled?: boolean | null;
            minPerCart?: number | null;
            maxPerCart?: number | null;
            product: {
              __typename?: "Product";
              id: string;
              title: string;
              status: ProductStatus;
              images: Array<{
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null>;
            };
            price: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            compareAtPrice?: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            } | null;
            image?: {
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null;
            selectedOptions: Array<{
              __typename?: "SelectedOption";
              option: {
                __typename?: "ProductOption";
                id: string;
                name: string;
              };
              value: {
                __typename?: "ProductOptionValue";
                id: string;
                name?: string | null;
              };
            }>;
          }>;
        } | null;
        collections: {
          __typename?: "ProductCollectionConnection";
          totalCount: number;
          nodes?: Array<{
            __typename?: "ProductCollection";
            id: string;
            title?: string | null;
            handle: string;
          } | null> | null;
        };
        reviewsStatistics: {
          __typename?: "ProductReviewsStatistics";
          average: number;
          total: number;
        };
      }>;
    };
    image?: {
      __typename?: "Image";
      id: string;
      altText?: string | null;
      src?: string | null;
      width?: number | null;
      height?: number | null;
      format?: string | null;
    } | null;
    seo?: {
      __typename?: "ProductCollectionSEO";
      title?: string | null;
      description?: string | null;
    } | null;
  } | null;
};

export type StoreDetailsByHandleQueryVariables = Exact<{
  storeHandle: Scalars["String"];
}>;

export type StoreDetailsByHandleQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    name: string;
    description?: string | null;
    currency: string;
    defaultLocale: string;
    locales: Array<string>;
    locale: string;
    fallbackLocale: string;
    supportedLocales: Array<string>;
    userId: string;
    isExpired?: boolean | null;
    areReviewsActivated: boolean;
    adminContactInfo?: {
      __typename?: "ContactInfo";
      name?: string | null;
      email?: string | null;
    } | null;
    tax?: {
      __typename?: "Tax";
      id: string;
      storeId: string;
      percentageOff: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    location?: { __typename?: "Location"; address: string } | null;
    socialMedia?: Array<{
      __typename?: "SocialLinkType";
      name?: string | null;
      link?: string | null;
    } | null> | null;
    seo?: {
      __typename?: "StoreSEO";
      title?: string | null;
      description?: string | null;
    } | null;
    legalPages?: Array<{
      __typename?: "StoreLegalPage";
      id: string;
      name?: string | null;
      title?: string | null;
      handle: string;
    } | null> | null;
    appearance?: {
      __typename?: "StoreAppearance";
      template?: { __typename?: "Template"; handle?: string | null } | null;
      colors?: {
        __typename?: "ThemeColors";
        primary?: string | null;
        inkNormal?: string | null;
        inkSubdued?: string | null;
      } | null;
      fonts?: Array<{
        __typename?: "FontType";
        type?: FontTypeEnum | null;
        fontFamily?: string | null;
        category?: string | null;
        typeFace?: string | null;
        weight?: string | null;
        isItalic?: boolean | null;
        url?: string | null;
        locale?: string | null;
        locales?: Array<string | null> | null;
      } | null> | null;
      footer?: {
        __typename?: "FooterType";
        activeFooter?: ActiveFooter | null;
        startPart?: string | null;
        endPart?: string | null;
        customPart?: string | null;
        locale?: string | null;
        locales?: Array<string | null> | null;
      } | null;
      menus?: Array<{
        __typename?: "StoreMenu";
        id: string;
        title: string;
        handle?: string | null;
        items?: Array<{
          __typename?: "StoreMenuItem";
          id: string;
          parentId?: string | null;
          title: string;
          type: MenuItemType;
          locale?: string | null;
          locales?: Array<string | null> | null;
          handle?: string | null;
          icon?: string | null;
          link?: {
            __typename?: "MenuLink";
            type: MenuItemType;
            url?: string | null;
            resourceId?: string | null;
            openInNewTab?: boolean | null;
            staticPageType?: StaticPageEnum | null;
            resource?:
              | { __typename: "Product"; handle: string }
              | { __typename: "ProductCollection"; handle: string }
              | { __typename: "StoreLegalPage"; handle: string }
              | { __typename: "StorePage"; handle: string }
              | { __typename: "StoreStaticPage" }
              | null;
          } | null;
        } | null> | null;
      } | null> | null;
      infoBar?: {
        __typename?: "InfoBar";
        text: any;
        background: string;
        locales?: Array<string | null> | null;
        locale?: string | null;
        isActive?: boolean | null;
        isDismissible?: boolean | null;
        translations?: Array<{
          __typename?: "InfoBarTranslation";
          text: any;
          locale: string;
        } | null> | null;
      } | null;
    } | null;
    contactInfo?: {
      __typename?: "ContactInfo";
      email?: string | null;
      phone?: string | null;
    } | null;
    logo?: {
      __typename?: "StoreLogo";
      width?: number | null;
      height?: number | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    owner?: { __typename?: "User"; createdAt: any } | null;
    subscription?: {
      __typename?: "PlanSubscription";
      createdAt: any;
      status: SubscriptionStatus;
    } | null;
    favIcon?: {
      __typename?: "Image";
      src?: string | null;
      status?: MediaStatus | null;
    } | null;
    analyticalAccounts?: Array<{
      __typename?: "AnalyticalAccount";
      name: string;
      id: string;
      isActive: boolean;
    } | null> | null;
    automaticDiscounts?: Array<{
      __typename?: "Discount";
      id: string;
      title?: string | null;
      appliedOn?: DiscountAppliedOnType | null;
      percentage?: number | null;
      status?: DiscountStatus | null;
      customerBuys?: {
        __typename?: "CustomerBuys";
        value?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null;
      amount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      BuyXGetYDiscount?: {
        __typename?: "BuyXGetYDiscount";
        customerBuys: {
          __typename?: "CustomerBuys";
          quantity?: number | null;
          itemsType?: DiscountItemsType | null;
          value?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          items?: {
            __typename?: "CustomerBuysItems";
            productVariantIds?: Array<string> | null;
            collectionIds?: Array<string> | null;
          } | null;
        };
        customerGets: {
          __typename?: "CustomerGets";
          quantity?: number | null;
          percentage: number;
          itemsType: DiscountItemsType;
          items: {
            __typename?: "CustomerGetsItems";
            productVariants?: Array<{
              __typename?: "ProductVariant";
              id: string;
            }> | null;
            collections?: Array<{
              __typename?: "ProductCollection";
              id: string;
            }> | null;
          };
        };
      } | null;
    } | null> | null;
    paragonIntegrations?: {
      __typename?: "ParagonStoreIntegrations";
      id: string;
      integrations?: Array<{
        __typename?: "ParagonIntegration";
        name: string;
        enabled: boolean;
        sharedSettings?: Array<{
          __typename?: "ParagonIntegrationSharedSetting";
          name: string;
          value: string;
        } | null> | null;
      } | null> | null;
    } | null;
    storeReviewSettings?: {
      __typename?: "StoreReviewsSettings";
      id: string;
      enableGuestReviews: boolean;
      showCustomerAvatar: boolean;
      showOverAllRating: boolean;
      showReviewDate: boolean;
      showReviewsCount: boolean;
      showStars: boolean;
      starsColor: string;
    } | null;
    redirects?: Array<{
      __typename?: "StoreRedirect";
      id: string;
      newUrl: string;
      oldUrl: string;
    }> | null;
    customCheckoutSetting?: {
      __typename?: "CustomCheckoutSetting";
      identifier?: CustomerIdentifier | null;
      name?: NameInputOptions | null;
      secondaryPhone?: CheckoutFieldOptions | null;
      postalCode?: CheckoutFieldOptions | null;
      notesToSeller?: CheckoutFieldOptions | null;
      checkoutNote?: {
        __typename?: "CheckoutNote";
        placement: CheckoutNotePlacement;
        enabled: boolean;
        content: string;
      } | null;
    } | null;
    domain?: { __typename?: "Domain"; domainName: string } | null;
  } | null;
};

export type StoreDetailsByDomainQueryVariables = Exact<{
  storeDomain: Scalars["String"];
}>;

export type StoreDetailsByDomainQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    name: string;
    description?: string | null;
    currency: string;
    defaultLocale: string;
    locales: Array<string>;
    locale: string;
    fallbackLocale: string;
    supportedLocales: Array<string>;
    userId: string;
    isExpired?: boolean | null;
    areReviewsActivated: boolean;
    adminContactInfo?: {
      __typename?: "ContactInfo";
      name?: string | null;
      email?: string | null;
    } | null;
    tax?: {
      __typename?: "Tax";
      id: string;
      storeId: string;
      percentageOff: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    location?: { __typename?: "Location"; address: string } | null;
    socialMedia?: Array<{
      __typename?: "SocialLinkType";
      name?: string | null;
      link?: string | null;
    } | null> | null;
    seo?: {
      __typename?: "StoreSEO";
      title?: string | null;
      description?: string | null;
    } | null;
    legalPages?: Array<{
      __typename?: "StoreLegalPage";
      id: string;
      name?: string | null;
      title?: string | null;
      handle: string;
    } | null> | null;
    appearance?: {
      __typename?: "StoreAppearance";
      template?: { __typename?: "Template"; handle?: string | null } | null;
      colors?: {
        __typename?: "ThemeColors";
        primary?: string | null;
        inkNormal?: string | null;
        inkSubdued?: string | null;
      } | null;
      fonts?: Array<{
        __typename?: "FontType";
        type?: FontTypeEnum | null;
        fontFamily?: string | null;
        category?: string | null;
        typeFace?: string | null;
        weight?: string | null;
        isItalic?: boolean | null;
        url?: string | null;
        locale?: string | null;
        locales?: Array<string | null> | null;
      } | null> | null;
      footer?: {
        __typename?: "FooterType";
        activeFooter?: ActiveFooter | null;
        startPart?: string | null;
        endPart?: string | null;
        customPart?: string | null;
        locale?: string | null;
        locales?: Array<string | null> | null;
      } | null;
      menus?: Array<{
        __typename?: "StoreMenu";
        id: string;
        title: string;
        handle?: string | null;
        items?: Array<{
          __typename?: "StoreMenuItem";
          id: string;
          parentId?: string | null;
          title: string;
          type: MenuItemType;
          locale?: string | null;
          locales?: Array<string | null> | null;
          handle?: string | null;
          icon?: string | null;
          link?: {
            __typename?: "MenuLink";
            type: MenuItemType;
            url?: string | null;
            resourceId?: string | null;
            openInNewTab?: boolean | null;
            staticPageType?: StaticPageEnum | null;
            resource?:
              | { __typename: "Product"; handle: string }
              | { __typename: "ProductCollection"; handle: string }
              | { __typename: "StoreLegalPage"; handle: string }
              | { __typename: "StorePage"; handle: string }
              | { __typename: "StoreStaticPage" }
              | null;
          } | null;
        } | null> | null;
      } | null> | null;
      infoBar?: {
        __typename?: "InfoBar";
        text: any;
        background: string;
        locales?: Array<string | null> | null;
        locale?: string | null;
        isActive?: boolean | null;
        isDismissible?: boolean | null;
        translations?: Array<{
          __typename?: "InfoBarTranslation";
          text: any;
          locale: string;
        } | null> | null;
      } | null;
    } | null;
    contactInfo?: {
      __typename?: "ContactInfo";
      email?: string | null;
      phone?: string | null;
    } | null;
    logo?: {
      __typename?: "StoreLogo";
      width?: number | null;
      height?: number | null;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    owner?: { __typename?: "User"; createdAt: any } | null;
    subscription?: {
      __typename?: "PlanSubscription";
      createdAt: any;
      status: SubscriptionStatus;
    } | null;
    favIcon?: {
      __typename?: "Image";
      src?: string | null;
      status?: MediaStatus | null;
    } | null;
    analyticalAccounts?: Array<{
      __typename?: "AnalyticalAccount";
      name: string;
      id: string;
      isActive: boolean;
    } | null> | null;
    automaticDiscounts?: Array<{
      __typename?: "Discount";
      id: string;
      title?: string | null;
      appliedOn?: DiscountAppliedOnType | null;
      percentage?: number | null;
      status?: DiscountStatus | null;
      customerBuys?: {
        __typename?: "CustomerBuys";
        value?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null;
      amount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      BuyXGetYDiscount?: {
        __typename?: "BuyXGetYDiscount";
        customerBuys: {
          __typename?: "CustomerBuys";
          quantity?: number | null;
          itemsType?: DiscountItemsType | null;
          value?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          items?: {
            __typename?: "CustomerBuysItems";
            productVariantIds?: Array<string> | null;
            collectionIds?: Array<string> | null;
          } | null;
        };
        customerGets: {
          __typename?: "CustomerGets";
          quantity?: number | null;
          percentage: number;
          itemsType: DiscountItemsType;
          items: {
            __typename?: "CustomerGetsItems";
            productVariants?: Array<{
              __typename?: "ProductVariant";
              id: string;
            }> | null;
            collections?: Array<{
              __typename?: "ProductCollection";
              id: string;
            }> | null;
          };
        };
      } | null;
    } | null> | null;
    paragonIntegrations?: {
      __typename?: "ParagonStoreIntegrations";
      id: string;
      integrations?: Array<{
        __typename?: "ParagonIntegration";
        name: string;
        enabled: boolean;
        sharedSettings?: Array<{
          __typename?: "ParagonIntegrationSharedSetting";
          name: string;
          value: string;
        } | null> | null;
      } | null> | null;
    } | null;
    storeReviewSettings?: {
      __typename?: "StoreReviewsSettings";
      id: string;
      enableGuestReviews: boolean;
      showCustomerAvatar: boolean;
      showOverAllRating: boolean;
      showReviewDate: boolean;
      showReviewsCount: boolean;
      showStars: boolean;
      starsColor: string;
    } | null;
    redirects?: Array<{
      __typename?: "StoreRedirect";
      id: string;
      newUrl: string;
      oldUrl: string;
    }> | null;
    customCheckoutSetting?: {
      __typename?: "CustomCheckoutSetting";
      identifier?: CustomerIdentifier | null;
      name?: NameInputOptions | null;
      secondaryPhone?: CheckoutFieldOptions | null;
      postalCode?: CheckoutFieldOptions | null;
      notesToSeller?: CheckoutFieldOptions | null;
      checkoutNote?: {
        __typename?: "CheckoutNote";
        placement: CheckoutNotePlacement;
        enabled: boolean;
        content: string;
      } | null;
    } | null;
    domain?: { __typename?: "Domain"; domainName: string } | null;
  } | null;
};

export type ShippingDestinationsQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type ShippingDestinationsQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    shippingZones?: {
      __typename?: "ShippingZoneConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "ShippingZone";
        id: string;
        name: string;
        countries?: {
          __typename?: "ZoneCountryConnection";
          totalCount: number;
          nodes?: Array<{
            __typename?: "ZoneCountry";
            id: string;
            name: string;
            zoneId?: string | null;
            states?: {
              __typename?: "ZoneStateConnection";
              totalCount: number;
              nodes?: Array<{
                __typename?: "ZoneState";
                id: string;
                name: string;
                cities?: {
                  __typename?: "ZoneCityConnection";
                  totalCount: number;
                  nodes?: Array<{
                    __typename?: "ZoneCity";
                    id: string;
                    name: string;
                    regions?: {
                      __typename?: "ZoneRegionConnection";
                      totalCount: number;
                      nodes?: Array<{
                        __typename?: "ZoneRegion";
                        id: string;
                        name: string;
                      } | null> | null;
                    } | null;
                  } | null> | null;
                } | null;
              } | null> | null;
            } | null;
          } | null> | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ShippingRatesQueryVariables = Exact<{
  storeId: Scalars["ID"];
  input?: InputMaybe<ShippingRatesInput>;
}>;

export type ShippingRatesQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    shippingRates?: Array<{
      __typename?: "ShippingRate";
      id: string;
      name: string;
      cost: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      };
    } | null> | null;
  } | null;
};

export type PromoCodeByCodeQueryVariables = Exact<{
  code: Scalars["String"];
  storeId: Scalars["ID"];
}>;

export type PromoCodeByCodeQuery = {
  __typename?: "Query";
  promoCodeByCode?: {
    __typename?: "PromoCode";
    code: string;
    percentageOff?: number | null;
    isArchived: boolean;
    status: PromoCodeStatusEnum;
  } | null;
};

export type StoreStaticPageByHandleQueryVariables = Exact<{
  input?: InputMaybe<StaticPageStoreByHandleInput>;
}>;

export type StoreStaticPageByHandleQuery = {
  __typename?: "Query";
  storeStaticPageByHandle?: {
    __typename?: "StoreStaticPage";
    id: string;
    handle: string;
    htmlTemplate?: string | null;
    locale?: string | null;
    name?: string | null;
    title?: string | null;
    translations?: Array<{
      __typename?: "StoreStaticPageTranslation";
      htmlTemplate?: string | null;
      locale?: string | null;
      title?: string | null;
    } | null> | null;
  } | null;
};

export type GetOrderByIdQueryVariables = Exact<{
  storeId: Scalars["ID"];
  orderId: Scalars["ID"];
}>;

export type GetOrderByIdQuery = {
  __typename?: "Query";
  order?: {
    __typename?: "Order";
    id: string;
    orderSerial?: string | null;
    status?: OrderStatusEnum | null;
    paymentMethod?: PaymentMethodEnum | null;
    createdAt: any;
    paymentStatus?: OrderPaymentStatusEnum | null;
    fulfillmentStatus?: FulfillStatusEnum | null;
    externalActionMessage?: Array<string | null> | null;
    notes?: string | null;
    shippingRateName?: string | null;
    customer: {
      __typename?: "Customer";
      name?: string | null;
      email?: string | null;
      phone?: string | null;
      isSubscribedToNewsLetter?: boolean | null;
    };
    shippingDetails?: {
      __typename?: "OrderShippingDetails";
      trackingURL?: string | null;
    } | null;
    shippingAddress: {
      __typename?: "Address";
      phone?: string | null;
      addressLine1: string;
      addressLine2?: string | null;
      postalCode?: string | null;
      areaSnapshot?: {
        __typename?: "AreaSnapshot";
        countryName?: string | null;
        stateName?: string | null;
        cityName?: string | null;
        regionName?: string | null;
      } | null;
    };
    billingAddress: {
      __typename?: "Address";
      phone?: string | null;
      addressLine1: string;
      addressLine2?: string | null;
      postalCode?: string | null;
      areaSnapshot?: {
        __typename?: "AreaSnapshot";
        countryName?: string | null;
        stateName?: string | null;
        cityName?: string | null;
        regionName?: string | null;
      } | null;
    };
    items: Array<
      | {
          __typename?: "CustomItem";
          id: string;
          quantity: number;
          title?: string | null;
          categories: Array<{
            __typename?: "CustomBuildCategory";
            category: {
              __typename?: "CustomProductCategory";
              id: string;
              categoryType: CategoryType;
              name: string;
              isRequired: boolean;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              variants?: Array<{
                __typename?: "CustomProductCategoryVariant";
                preselected?: boolean | null;
                variant?: {
                  __typename?: "ProductVariant";
                  id: string;
                  title?: string | null;
                  quantity?: number | null;
                  trackQuantity?: boolean | null;
                  sku?: string | null;
                  cartLimitsEnabled?: boolean | null;
                  minPerCart?: number | null;
                  maxPerCart?: number | null;
                  product: {
                    __typename?: "Product";
                    id: string;
                    title: string;
                    status: ProductStatus;
                    images: Array<{
                      __typename?: "Image";
                      id: string;
                      altText?: string | null;
                      src?: string | null;
                      width?: number | null;
                      height?: number | null;
                      format?: string | null;
                    } | null>;
                  };
                  price: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  };
                  compareAtPrice?: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  } | null;
                  image?: {
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null;
                  selectedOptions: Array<{
                    __typename?: "SelectedOption";
                    option: {
                      __typename?: "ProductOption";
                      id: string;
                      name: string;
                    };
                    value: {
                      __typename?: "ProductOptionValue";
                      id: string;
                      name?: string | null;
                    };
                  }>;
                } | null;
              } | null> | null;
              settings?: {
                __typename?: "CustomProductCategorySettings";
                maxSelect?: number | null;
                maxQuantity?: number | null;
              } | null;
            };
            selectedVariants: Array<{
              __typename?: "SelectedVariant";
              quantity: number;
              variantSnapshot?: {
                __typename?: "ProductVariantSnapshot";
                id: string;
                sku?: string | null;
                quantity?: number | null;
                productId: string;
                productTitle?: string | null;
                image?: {
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null;
                productImages?: Array<{
                  __typename?: "Image";
                  id: string;
                  altText?: string | null;
                  src?: string | null;
                  width?: number | null;
                  height?: number | null;
                  format?: string | null;
                } | null> | null;
              } | null;
              price?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
              selectedOptions: Array<{
                __typename?: "SelectedVariantOption";
                value: string;
                name: string;
              }>;
            }>;
          }>;
          subtotal?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          productSnapshot?: {
            __typename?: "ProductSnapshot";
            id: string;
            title: string;
            handle: string;
            collectionIds: Array<string | null>;
            integrationProvider?: {
              __typename?: "IntegrationProviderDetailsSnapshot";
              provider?: string | null;
            } | null;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          } | null;
          price?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          discount?: {
            __typename?: "OrderItemDiscountDetails";
            discountSource: DiscountSource;
            quantity: number;
            info: {
              __typename?: "OrderItemDiscountDetailsInfo";
              percentage?: number | null;
              fixed?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
            };
            perItem: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            total: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
          } | null;
        }
      | {
          __typename?: "SimpleItem";
          id: string;
          quantity: number;
          title?: string | null;
          selectedOptions: Array<{
            __typename?: "SelectedVariantOption";
            value: string;
            name: string;
          }>;
          variantSnapshot?: {
            __typename?: "ProductVariantSnapshot";
            id: string;
            sku?: string | null;
            quantity?: number | null;
            productId: string;
            productTitle?: string | null;
            image?: {
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null;
            productImages?: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null> | null;
          } | null;
          subtotal?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          productSnapshot?: {
            __typename?: "ProductSnapshot";
            id: string;
            title: string;
            handle: string;
            collectionIds: Array<string | null>;
            integrationProvider?: {
              __typename?: "IntegrationProviderDetailsSnapshot";
              provider?: string | null;
            } | null;
            images: Array<{
              __typename?: "Image";
              id: string;
              altText?: string | null;
              src?: string | null;
              width?: number | null;
              height?: number | null;
              format?: string | null;
            } | null>;
          } | null;
          price?: {
            __typename?: "Money";
            amount: number;
            currencyCode: CurrencyCode;
          } | null;
          discount?: {
            __typename?: "OrderItemDiscountDetails";
            discountSource: DiscountSource;
            quantity: number;
            info: {
              __typename?: "OrderItemDiscountDetailsInfo";
              percentage?: number | null;
              fixed?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
            };
            perItem: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
            total: {
              __typename?: "Money";
              amount: number;
              currencyCode: CurrencyCode;
            };
          } | null;
        }
      | null
    >;
    shippingRateCost: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    };
    promoCodeSnapshot?: {
      __typename?: "PromoCode";
      code: string;
      percentageOff?: number | null;
    } | null;
    taxSnapshot?: {
      __typename?: "Tax";
      id: string;
      storeId: string;
      percentageOff: number;
      image?: {
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null;
    } | null;
    receipt?: {
      __typename?: "OrderReceipt";
      subtotal?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      automaticDiscount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      discount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      tax?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      shipping?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
      total?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null;
    discounts?: Array<{
      __typename?: "DiscountSnapshot";
      id?: string | null;
      type?: DiscountType | null;
      title?: string | null;
      appliedOn?: DiscountAppliedOnType | null;
      percentage?: number | null;
      amount?: {
        __typename?: "Money";
        amount: number;
        currencyCode: CurrencyCode;
      } | null;
    } | null> | null;
    paymentIntent?: {
      __typename?: "PaymentIntent";
      id: string;
      status?: string | null;
      embedUrl?: string | null;
      paymentMethod?: PaymentMethodEnum | null;
      paymentMethods?: Array<PaymentMethodEnum | null> | null;
    } | null;
    reviews: Array<{ __typename?: "ProductReview"; productId: string }>;
    errors?: Array<{
      __typename?: "CheckoutError";
      code: ErrorCode;
      resourceId?: string | null;
      params?: {
        __typename?: "Params";
        requestedQuantity?: number | null;
        availableQuantity?: number | null;
        requestedPrice?: number | null;
        availablePrice?: number | null;
        requestedCurrency?: string | null;
        availableCurrency?: string | null;
        message?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetOrderStatusQueryVariables = Exact<{
  storeId: Scalars["ID"];
  orderId: Scalars["ID"];
}>;

export type GetOrderStatusQuery = {
  __typename?: "Query";
  order?: {
    __typename?: "Order";
    id: string;
    status?: OrderStatusEnum | null;
    orderSerial?: string | null;
  } | null;
};

export type GetOrderErrorsQueryVariables = Exact<{
  storeId: Scalars["ID"];
  orderId: Scalars["ID"];
}>;

export type GetOrderErrorsQuery = {
  __typename?: "Query";
  order?: {
    __typename?: "Order";
    id: string;
    errors?: Array<{
      __typename?: "CheckoutError";
      code: ErrorCode;
      resourceId?: string | null;
      params?: {
        __typename?: "Params";
        requestedQuantity?: number | null;
        availableQuantity?: number | null;
        requestedPrice?: number | null;
        availablePrice?: number | null;
        requestedCurrency?: string | null;
        availableCurrency?: string | null;
        message?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetStorePaymentMethodsQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type GetStorePaymentMethodsQuery = {
  __typename?: "Query";
  storePaymentMethods?: Array<{
    __typename?: "StorePaymentMethod";
    id?: string | null;
    type: StorePaymentMethods;
    enabled: boolean;
  } | null> | null;
};

export type GetStoreCheckoutPaymentMethodsQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type GetStoreCheckoutPaymentMethodsQuery = {
  __typename?: "Query";
  storeCheckoutPaymentMethods?: Array<PaymentMethodEnum | null> | null;
};

export type StoreCheckoutQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type StoreCheckoutQuery = {
  __typename?: "Query";
  store?: {
    __typename?: "Store";
    id: string;
    checkout?: {
      __typename?: "Checkout";
      successMessage?: string | null;
    } | null;
  } | null;
};

export type ListCustomerAddressesQueryVariables = Exact<{
  customerId: Scalars["ID"];
  storeId: Scalars["ID"];
}>;

export type ListCustomerAddressesQuery = {
  __typename?: "Query";
  customerAddresses: Array<{
    __typename?: "CustomerAddress";
    id: string;
    addressLine1: string;
    addressLine2?: string | null;
    phone?: string | null;
    secondPhone?: string | null;
    isDefault: boolean;
    postalCode?: string | null;
    state?: { __typename?: "State"; name: string; id: string } | null;
    country?: { __typename?: "Country"; name: string; id: string } | null;
    city?: { __typename?: "City"; name: string; id: string } | null;
    region?: { __typename?: "Region"; name: string; id: string } | null;
  }>;
};

export type ListCustomerOrdersQueryVariables = Exact<{
  id: Scalars["ID"];
  connection?: InputMaybe<OrdersConnectionInput>;
}>;

export type ListCustomerOrdersQuery = {
  __typename?: "Query";
  customerOrders?: {
    __typename?: "CustomerUser";
    id: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    orders?: {
      __typename?: "OrderConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "Order";
        id: string;
        orderSerial?: string | null;
        createdAt: any;
        paymentStatus?: OrderPaymentStatusEnum | null;
        fulfillmentStatus?: FulfillStatusEnum | null;
        totalPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type CustomerDetailsQueryVariables = Exact<{
  customerId: Scalars["ID"];
  connection?: InputMaybe<OrdersConnectionInput>;
}>;

export type CustomerDetailsQuery = {
  __typename?: "Query";
  customerOrders?: {
    __typename?: "CustomerUser";
    storeId?: string | null;
    id: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    updatedAt?: any | null;
    createdAt?: any | null;
    isGuest?: boolean | null;
    orders?: {
      __typename?: "OrderConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "Order";
        id: string;
        orderSerial?: string | null;
        createdAt: any;
        paymentStatus?: OrderPaymentStatusEnum | null;
        fulfillmentStatus?: FulfillStatusEnum | null;
        totalPrice?: {
          __typename?: "Money";
          amount: number;
          currencyCode: CurrencyCode;
        } | null;
      } | null> | null;
    } | null;
    addresses?: Array<{
      __typename?: "CustomerAddress";
      id: string;
      addressLine1: string;
      addressLine2?: string | null;
      phone?: string | null;
      secondPhone?: string | null;
      isDefault: boolean;
      postalCode?: string | null;
      state?: { __typename?: "State"; name: string; id: string } | null;
      country?: { __typename?: "Country"; name: string; id: string } | null;
      city?: { __typename?: "City"; name: string; id: string } | null;
      region?: { __typename?: "Region"; name: string; id: string } | null;
    }> | null;
    totalSpending?: {
      __typename?: "Money";
      amount: number;
      currencyCode: CurrencyCode;
    } | null;
  } | null;
};

export type ListCustomerReviewsQueryVariables = Exact<{
  input: ListCustomerReviewsInput;
}>;

export type ListCustomerReviewsQuery = {
  __typename?: "Query";
  listCustomerReviews: Array<{
    __typename?: "ProductReview";
    id: string;
    createdAt: any;
    headline: string;
    content?: string | null;
    rating: number;
    showName: boolean;
    status: ReviewStatus;
    product: {
      __typename?: "Product";
      id: string;
      title: string;
      images: Array<{
        __typename?: "Image";
        id: string;
        altText?: string | null;
        src?: string | null;
        width?: number | null;
        height?: number | null;
        format?: string | null;
      } | null>;
    };
  }>;
};

export type GetStoreRobotsTxtQueryVariables = Exact<{
  storeId: Scalars["ID"];
}>;

export type GetStoreRobotsTxtQuery = {
  __typename?: "Query";
  getStoreRobotsTxt?: {
    __typename?: "RobotsTxt";
    content: string;
    id: string;
  } | null;
};

export type SignUpMutationVariables = Exact<{
  storeId: Scalars["ID"];
  input: CustomerUserInput;
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signup?: string | null;
};

export type ForgotPasswordMutationVariables = Exact<{
  storeId: Scalars["ID"];
  storeUrl?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  forgetCustomerPassword: boolean;
};

export type ResetPasswordMutationVariables = Exact<{
  storeId: Scalars["ID"];
  token?: InputMaybe<Scalars["String"]>;
  newPassword?: InputMaybe<Scalars["String"]>;
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetCustomerPassword: string;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "CustomerUser";
    id: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
  } | null;
};

export type LoginQueryVariables = Exact<{
  storeId: Scalars["String"];
  phoneOrEmail: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginQuery = {
  __typename?: "Query";
  customerLoginV2?: string | null;
};

export type StorePageByHandleQueryVariables = Exact<{
  handle: Scalars["String"];
  storeId: Scalars["ID"];
}>;

export type StorePageByHandleQuery = {
  __typename?: "Query";
  storePageByHandle?: {
    __typename?: "StorePage";
    id: string;
    name: string;
    handle: string;
    status: PageStatusEnum;
    locale?: Locale | null;
    pageType: StorePageTypeEnum;
    seo?: {
      __typename?: "PageSeo";
      title?: string | null;
      description?: string | null;
    } | null;
    translations?: Array<{
      __typename?: "StorePageTranslation";
      name?: string | null;
    } | null> | null;
    sections: Array<{
      __typename?: "StorePageSection";
      id: string;
      storeId: string;
      header?: string | null;
      displayAs?: DisplayAsEnum | null;
      locale?: Locale | null;
      showSectionHeader?: boolean | null;
      stretchToFullWidth?: boolean | null;
      itemsPerRow?: number | null;
      translations?: Array<{
        __typename?: "SectionTranslations";
        header?: string | null;
        content?: string | null;
        locale?: Locale | null;
      } | null> | null;
      body:
        | {
            __typename?: "SectionAttributesRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            showItemName: boolean;
            itemsPerRow: number;
            translations: Array<{
              __typename?: "SectionAttributesTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            attributeValues: Array<{
              __typename?: "ProductAttributeValue";
              id: string;
              handle?: string | null;
              name?: string | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              attribute?: {
                __typename?: "ProductAttribute";
                id: string;
              } | null;
            }>;
          }
        | {
            __typename?: "SectionBanners";
            type: SectionTypeEnum;
            banners?: Array<{
              __typename?: "Banner";
              id?: string | null;
              mobileImage?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
              bannerLink?: {
                __typename?: "Link";
                type: LinkType;
                resourceId?: string | null;
                url?: string | null;
                resource?:
                  | {
                      __typename?: "Product";
                      id: string;
                      title: string;
                      handle: string;
                      images: Array<{
                        __typename?: "Image";
                        id: string;
                        altText?: string | null;
                        src?: string | null;
                        width?: number | null;
                        height?: number | null;
                        format?: string | null;
                      } | null>;
                    }
                  | {
                      __typename?: "ProductCollection";
                      id: string;
                      handle: string;
                      collectionTitle?: string | null;
                      image?: {
                        __typename?: "Image";
                        id: string;
                        altText?: string | null;
                        src?: string | null;
                        width?: number | null;
                        height?: number | null;
                        format?: string | null;
                      } | null;
                    }
                  | { __typename?: "StoreLegalPage" }
                  | { __typename?: "StorePage" }
                  | { __typename?: "StoreStaticPage" }
                  | null;
              } | null;
            }> | null;
          }
        | {
            __typename?: "SectionCollectionsRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            showItemName: boolean;
            itemsPerRow: number;
            translations: Array<{
              __typename?: "StorePageCollectionsTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            collections: Array<{
              __typename?: "ProductCollection";
              id: string;
              handle: string;
              title?: string | null;
              productsCount: number;
              shortDescription?: string | null;
              seo?: {
                __typename?: "ProductCollectionSEO";
                description?: string | null;
              } | null;
              image?: {
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null;
            }>;
          }
        | {
            __typename?: "SectionContent";
            type: SectionTypeEnum;
            content: string;
          }
        | {
            __typename?: "SectionProductsRow";
            id: string;
            storeId: string;
            type: SectionTypeEnum;
            header: string;
            displayAs: DisplayAsEnum;
            locale: string;
            showSectionHeader: boolean;
            stretchToFullWidth: boolean;
            itemsPerRow: number;
            productsDisplayNumber: number;
            translations: Array<{
              __typename?: "StorePageProductsTranslation";
              header?: string | null;
              locale: string;
            }>;
            background?: {
              __typename?: "SectionBackground";
              type?: SectionBackgroundTypeEnum | null;
              color?: string | null;
            } | null;
            fromCollection?: {
              __typename?: "ProductCollection";
              id: string;
              handle: string;
            } | null;
            products: Array<{
              __typename?: "Product";
              id: string;
              title: string;
              handle: string;
              type?: ProductType | null;
              isInStock: boolean;
              source?: SourceType | null;
              integrationProvider?: {
                __typename?: "IntegrationProviderDetails";
                provider?: string | null;
              } | null;
              discount?: {
                __typename?: "CustomProductDiscount";
                percent?: number | null;
                fixed?: {
                  __typename?: "Money";
                  amount: number;
                  currencyCode: CurrencyCode;
                } | null;
              } | null;
              initialPrice?: {
                __typename?: "Money";
                amount: number;
                currencyCode: CurrencyCode;
              } | null;
              images: Array<{
                __typename?: "Image";
                id: string;
                altText?: string | null;
                src?: string | null;
                width?: number | null;
                height?: number | null;
                format?: string | null;
              } | null>;
              variants?: {
                __typename?: "ProductVariantConnection";
                nodes: Array<{
                  __typename?: "ProductVariant";
                  id: string;
                  title?: string | null;
                  quantity?: number | null;
                  trackQuantity?: boolean | null;
                  sku?: string | null;
                  cartLimitsEnabled?: boolean | null;
                  minPerCart?: number | null;
                  maxPerCart?: number | null;
                  product: {
                    __typename?: "Product";
                    id: string;
                    title: string;
                    status: ProductStatus;
                    images: Array<{
                      __typename?: "Image";
                      id: string;
                      altText?: string | null;
                      src?: string | null;
                      width?: number | null;
                      height?: number | null;
                      format?: string | null;
                    } | null>;
                  };
                  price: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  };
                  compareAtPrice?: {
                    __typename?: "Money";
                    amount: number;
                    currencyCode: CurrencyCode;
                  } | null;
                  image?: {
                    __typename?: "Image";
                    id: string;
                    altText?: string | null;
                    src?: string | null;
                    width?: number | null;
                    height?: number | null;
                    format?: string | null;
                  } | null;
                  selectedOptions: Array<{
                    __typename?: "SelectedOption";
                    option: {
                      __typename?: "ProductOption";
                      id: string;
                      name: string;
                    };
                    value: {
                      __typename?: "ProductOptionValue";
                      id: string;
                      name?: string | null;
                    };
                  }>;
                }>;
              } | null;
              collections: {
                __typename?: "ProductCollectionConnection";
                totalCount: number;
                nodes?: Array<{
                  __typename?: "ProductCollection";
                  id: string;
                  title?: string | null;
                  handle: string;
                } | null> | null;
              };
              reviewsStatistics: {
                __typename?: "ProductReviewsStatistics";
                average: number;
                total: number;
              };
            } | null>;
          }
        | {
            __typename?: "SectionVideos";
            type: SectionTypeEnum;
            videosUrls?: Array<string> | null;
          };
    } | null>;
  } | null;
};

export const SocialIntegrationProductFragmentDoc = gql`
  fragment SocialIntegrationProduct on Product {
    id
    title
    descriptionHtml
    shortDescription
    isInStock
    handle
    options {
      __typename
      id
      name
      values {
        __typename
        id
        name
        handle
        locale
        translations {
          name
        }
      }
      handle
      position
      locale
    }
    collections {
      nodes {
        id
        title
        description
        handle
      }
    }
    variants {
      nodes {
        id
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          option {
            id
            name
            handle
          }
          value {
            id
            name
          }
        }
        price {
          amount
          currencyCode
        }
        title
        quantity
        image {
          src
        }
        updatedAt
      }
    }
    images {
      src
    }
    updatedAt
  }
`;
export const SocialStoreDetailsFragmentDoc = gql`
  fragment SocialStoreDetails on Store {
    id
    name
    updatedAt
    supportedLocales
    description
    shippingZones {
      nodes {
        shippingRates {
          name
          cost {
            amount
            currencyCode
          }
        }
        id
        countries {
          nodes {
            id
            name
            code2
            code3
          }
        }
      }
    }
    staticPages {
      handle
    }
    collections {
      nodes {
        handle
        updatedAt
        isVisible
      }
    }
  }
`;
export const ImageFragmentDoc = gql`
  fragment Image on Image {
    id
    altText
    src
    width
    height
    format
  }
`;
export const TaxFragmentDoc = gql`
  fragment Tax on Tax {
    id
    storeId
    percentageOff
    image {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const StoreMenuItemFragmentDoc = gql`
  fragment StoreMenuItem on StoreMenuItem {
    id
    parentId
    title
    type
    locale
    locales
    handle
    icon
    link {
      type
      url
      resourceId
      openInNewTab
      staticPageType
      resource {
        __typename
        ... on Product {
          handle
        }
        ... on ProductCollection {
          handle
        }
        ... on StoreLegalPage {
          handle
        }
        ... on StorePage {
          handle
        }
      }
    }
  }
`;
export const MenuInfoFragmentDoc = gql`
  fragment MenuInfo on StoreMenu {
    id
    title
    handle
    items {
      ...StoreMenuItem
    }
  }
  ${StoreMenuItemFragmentDoc}
`;
export const InfoBarInfoFragmentDoc = gql`
  fragment InfoBarInfo on InfoBar {
    text
    background
    translations {
      text
      locale
    }
    locales
    locale
    isActive
    isDismissible
  }
`;
export const MoneyFragmentDoc = gql`
  fragment Money on Money {
    amount
    currencyCode
  }
`;
export const DiscountVariantFragmentDoc = gql`
  fragment DiscountVariant on ProductVariant {
    id
  }
`;
export const DiscountCollectionFragmentDoc = gql`
  fragment DiscountCollection on ProductCollection {
    id
  }
`;
export const BuyXGetYDiscountFragmentDoc = gql`
  fragment BuyXGetYDiscount on BuyXGetYDiscount {
    customerBuys {
      value {
        ...Money
      }
      quantity
      itemsType
      items {
        productVariantIds
        collectionIds
      }
    }
    customerGets {
      quantity
      percentage
      itemsType
      items {
        productVariants {
          ...DiscountVariant
        }
        collections {
          ...DiscountCollection
        }
      }
    }
  }
  ${MoneyFragmentDoc}
  ${DiscountVariantFragmentDoc}
  ${DiscountCollectionFragmentDoc}
`;
export const AutomaticDiscountFragmentDoc = gql`
  fragment AutomaticDiscount on Discount {
    id
    title
    customerBuys {
      value {
        ...Money
      }
    }
    appliedOn
    percentage
    amount {
      ...Money
    }
    status
    BuyXGetYDiscount {
      ...BuyXGetYDiscount
    }
  }
  ${MoneyFragmentDoc}
  ${BuyXGetYDiscountFragmentDoc}
`;
export const ParagonIntegrationFragmentDoc = gql`
  fragment ParagonIntegration on ParagonStoreIntegrations {
    id
    integrations {
      name
      enabled
      sharedSettings {
        name
        value
      }
    }
  }
`;
export const StoreDetailsFragmentDoc = gql`
  fragment StoreDetails on Store {
    id
    name
    description
    currency
    defaultLocale
    locales
    locale
    fallbackLocale
    supportedLocales
    userId
    adminContactInfo {
      name
      email
    }
    tax {
      ...Tax
    }
    location {
      address
    }
    socialMedia {
      name
      link
    }
    seo {
      title
      description
    }
    legalPages {
      id
      name
      title
      handle
    }
    appearance {
      template {
        handle
      }
      colors {
        primary
        inkNormal
        inkSubdued
      }
      fonts {
        type
        fontFamily
        category
        typeFace
        weight
        isItalic
        url
        locale
        locales
      }
      footer {
        activeFooter
        startPart
        endPart
        customPart
        locale
        locales
      }
      menus {
        ...MenuInfo
      }
      infoBar {
        ...InfoBarInfo
      }
    }
    contactInfo {
      email
      phone
    }
    logo {
      image {
        ...Image
      }
      width
      height
    }
    owner {
      createdAt
    }
    subscription {
      createdAt
      status
    }
    favIcon {
      src
      status
    }
    isExpired
    analyticalAccounts {
      name
      id
      isActive
    }
    automaticDiscounts {
      ...AutomaticDiscount
    }
    paragonIntegrations {
      ...ParagonIntegration
    }
    areReviewsActivated
    storeReviewSettings {
      id
      enableGuestReviews
      showCustomerAvatar
      showOverAllRating
      showReviewDate
      showReviewsCount
      showStars
      starsColor
    }
    redirects {
      id
      newUrl
      oldUrl
    }
    customCheckoutSetting {
      identifier
      name
      secondaryPhone
      postalCode
      notesToSeller
      checkoutNote {
        placement
        enabled
        content
      }
    }
    domain {
      domainName
    }
  }
  ${TaxFragmentDoc}
  ${MenuInfoFragmentDoc}
  ${InfoBarInfoFragmentDoc}
  ${ImageFragmentDoc}
  ${AutomaticDiscountFragmentDoc}
  ${ParagonIntegrationFragmentDoc}
`;
export const OrderItemDiscountInfoFragmentDoc = gql`
  fragment OrderItemDiscountInfo on OrderItemDiscountDetails {
    discountSource
    quantity
    info {
      percentage
      fixed {
        ...Money
      }
    }
    perItem {
      ...Money
    }
    total {
      ...Money
    }
  }
  ${MoneyFragmentDoc}
`;
export const VariantInfoFragmentDoc = gql`
  fragment VariantInfo on ProductVariant {
    id
    title
    quantity
    trackQuantity
    sku
    cartLimitsEnabled
    minPerCart
    maxPerCart
    product {
      id
      title
      status
      images {
        ...Image
      }
    }
    price {
      ...Money
    }
    compareAtPrice {
      ...Money
    }
    image {
      ...Image
    }
    selectedOptions {
      option {
        id
        name
      }
      value {
        id
        name
      }
    }
  }
  ${ImageFragmentDoc}
  ${MoneyFragmentDoc}
`;
export const CategoryInfoFragmentDoc = gql`
  fragment CategoryInfo on CustomProductCategory {
    id
    categoryType
    name
    isRequired
    image {
      ...Image
    }
    variants {
      preselected
      variant {
        ...VariantInfo
      }
    }
    settings {
      maxSelect
      maxQuantity
    }
  }
  ${ImageFragmentDoc}
  ${VariantInfoFragmentDoc}
`;
export const OrderVariantSnapshotFragmentDoc = gql`
  fragment OrderVariantSnapshot on ProductVariantSnapshot {
    id
    sku
    quantity
    image {
      ...Image
    }
    productId
    productTitle
    productImages {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const OrderCategoryInfoFragmentDoc = gql`
  fragment OrderCategoryInfo on CustomBuildCategory {
    category {
      ...CategoryInfo
    }
    selectedVariants {
      variantSnapshot {
        ...OrderVariantSnapshot
      }
      price {
        ...Money
      }
      quantity
      selectedOptions {
        value
        name
      }
    }
  }
  ${CategoryInfoFragmentDoc}
  ${OrderVariantSnapshotFragmentDoc}
  ${MoneyFragmentDoc}
`;
export const OrderReceiptFragmentDoc = gql`
  fragment OrderReceipt on OrderReceipt {
    subtotal {
      ...Money
    }
    automaticDiscount {
      ...Money
    }
    discount {
      ...Money
    }
    tax {
      ...Money
    }
    shipping {
      ...Money
    }
    total {
      ...Money
    }
  }
  ${MoneyFragmentDoc}
`;
export const PaymentIntentInfoFragmentDoc = gql`
  fragment PaymentIntentInfo on PaymentIntent {
    id
    status
    embedUrl
    paymentMethod
    paymentMethods
  }
`;
export const CheckoutErrorsFragmentDoc = gql`
  fragment CheckoutErrors on CheckoutError {
    code
    resourceId
    params {
      requestedQuantity
      availableQuantity
      requestedPrice
      availablePrice
      requestedCurrency
      availableCurrency
      message
    }
  }
`;
export const OrderInfoFragmentDoc = gql`
  fragment OrderInfo on Order {
    id
    orderSerial
    status
    paymentMethod
    createdAt
    paymentStatus
    fulfillmentStatus
    externalActionMessage
    notes
    customer {
      name
      email
      phone
      isSubscribedToNewsLetter
    }
    shippingDetails {
      trackingURL
    }
    shippingAddress {
      phone
      addressLine1
      addressLine2
      postalCode
      areaSnapshot {
        countryName
        stateName
        cityName
        regionName
      }
    }
    billingAddress {
      phone
      addressLine1
      addressLine2
      postalCode
      areaSnapshot {
        countryName
        stateName
        cityName
        regionName
      }
    }
    items {
      id
      quantity
      title
      subtotal {
        ...Money
      }
      productSnapshot {
        id
        title
        handle
        collectionIds
        integrationProvider {
          provider
        }
        images {
          ...Image
        }
      }
      price {
        ...Money
      }
      discount {
        ...OrderItemDiscountInfo
      }
      ... on CustomItem {
        categories {
          ...OrderCategoryInfo
        }
      }
      ... on SimpleItem {
        selectedOptions {
          value
          name
        }
        variantSnapshot {
          ...OrderVariantSnapshot
        }
      }
    }
    shippingRateName
    shippingRateCost {
      ...Money
    }
    promoCodeSnapshot {
      code
      percentageOff
    }
    taxSnapshot {
      ...Tax
    }
    receipt {
      ...OrderReceipt
    }
    discounts {
      id
      type
      title
      appliedOn
      percentage
      amount {
        ...Money
      }
    }
    paymentIntent {
      ...PaymentIntentInfo
    }
    reviews {
      productId
    }
    errors {
      ...CheckoutErrors
    }
  }
  ${MoneyFragmentDoc}
  ${ImageFragmentDoc}
  ${OrderItemDiscountInfoFragmentDoc}
  ${OrderCategoryInfoFragmentDoc}
  ${OrderVariantSnapshotFragmentDoc}
  ${TaxFragmentDoc}
  ${OrderReceiptFragmentDoc}
  ${PaymentIntentInfoFragmentDoc}
  ${CheckoutErrorsFragmentDoc}
`;
export const CollectionInfoFragmentDoc = gql`
  fragment CollectionInfo on ProductCollection {
    id
    locale
    title
    handle
    shortDescription
    productsCount
    image {
      ...Image
    }
    seo {
      title
      description
    }
  }
  ${ImageFragmentDoc}
`;
export const DiscountFragmentDoc = gql`
  fragment Discount on CustomProductDiscount {
    percent
    fixed {
      ...Money
    }
  }
  ${MoneyFragmentDoc}
`;
export const ProductAttributesInfoFragmentDoc = gql`
  fragment ProductAttributesInfo on ProductAttribute {
    id
    name
    values {
      id
      name
    }
  }
`;
export const ProductOptionsInfoFragmentDoc = gql`
  fragment ProductOptionsInfo on ProductOption {
    name
    values {
      id
      name
    }
  }
`;
export const ProductInfoFragmentDoc = gql`
  fragment ProductInfo on Product {
    id
    type
    locale
    title
    type
    descriptionHtml
    shortDescription
    handle
    createdAt
    updatedAt
    isInStock
    integrationProvider {
      provider
    }
    collections {
      totalCount
      nodes {
        ...CollectionInfo
      }
    }
    initialPrice {
      ...Money
    }
    images {
      ...Image
    }
    categories {
      ...CategoryInfo
    }
    variants {
      nodes {
        ...VariantInfo
      }
    }
    discount {
      ...Discount
    }
    attributes {
      ...ProductAttributesInfo
    }
    options {
      ...ProductOptionsInfo
    }
    reviewsStatistics {
      average
      total
    }
  }
  ${CollectionInfoFragmentDoc}
  ${MoneyFragmentDoc}
  ${ImageFragmentDoc}
  ${CategoryInfoFragmentDoc}
  ${VariantInfoFragmentDoc}
  ${DiscountFragmentDoc}
  ${ProductAttributesInfoFragmentDoc}
  ${ProductOptionsInfoFragmentDoc}
`;
export const AddressInfoFragmentDoc = gql`
  fragment AddressInfo on CustomerAddress {
    id
    addressLine1
    addressLine2
    phone
    secondPhone
    isDefault
    postalCode
    state {
      name
      id
    }
    country {
      name
      id
    }
    city {
      name
      id
    }
    region {
      name
      id
    }
  }
`;
export const UserOrderInfoFragmentDoc = gql`
  fragment UserOrderInfo on Order {
    id
    orderSerial
    createdAt
    paymentStatus
    fulfillmentStatus
    totalPrice {
      amount
      currencyCode
    }
  }
`;
export const CustomerInfoFragmentDoc = gql`
  fragment CustomerInfo on CustomerUser {
    storeId
    id
    name
    email
    phone
    updatedAt
    createdAt
    isGuest
    totalSpending {
      ...Money
    }
  }
  ${MoneyFragmentDoc}
`;
export const HeroSliderFragmentDoc = gql`
  fragment HeroSlider on StoreHomeHero {
    id
    image {
      ...Image
    }
    mobileImage {
      ...Image
    }
    align
    headingText
    subHeadingColor
    subHeadingSize
    subHeadingText
    buttons {
      text
      link {
        type
        url
        resourceId
        resource {
          __typename
          ... on Product {
            handle
          }
          ... on ProductCollection {
            handle
          }
        }
      }
    }
  }
  ${ImageFragmentDoc}
`;
export const StoreAboutFragmentDoc = gql`
  fragment StoreAbout on AboutType {
    title
    content
    isActive
  }
`;
export const StoreHomeAppearanceFragmentDoc = gql`
  fragment StoreHomeAppearance on StoreAppearance {
    heroSlider {
      ...HeroSlider
    }
    infoBar {
      ...InfoBarInfo
    }
    about {
      ...StoreAbout
    }
  }
  ${HeroSliderFragmentDoc}
  ${InfoBarInfoFragmentDoc}
  ${StoreAboutFragmentDoc}
`;
export const SelectedOptionsFragmentDoc = gql`
  fragment SelectedOptions on SelectedOption {
    option {
      id
      name
    }
    value {
      id
      name
    }
  }
`;
export const ProductBasicInfoFragmentDoc = gql`
  fragment ProductBasicInfo on Product {
    id
    title
    handle
    type
    isInStock
    source
    integrationProvider {
      provider
    }
    discount {
      ...Discount
    }
    initialPrice {
      ...Money
    }
    images {
      ...Image
    }
    variants(first: 1) {
      nodes {
        ...VariantInfo
      }
    }
    collections {
      totalCount
      nodes {
        id
        title
        handle
      }
    }
    reviewsStatistics {
      average
      total
    }
  }
  ${DiscountFragmentDoc}
  ${MoneyFragmentDoc}
  ${ImageFragmentDoc}
  ${VariantInfoFragmentDoc}
`;
export const StorePageSectionsFragmentDoc = gql`
  fragment StorePageSections on StorePageSection {
    id
    storeId
    header
    displayAs
    locale
    translations {
      header
      content
      locale
    }
    showSectionHeader
    stretchToFullWidth
    itemsPerRow
    body {
      ... on SectionBanners {
        type
        banners {
          id
          mobileImage {
            ...Image
          }
          image {
            ...Image
          }
          bannerLink {
            type
            resourceId
            resource {
              ... on Product {
                id
                title
                handle
                images {
                  ...Image
                }
              }
              ... on ProductCollection {
                id
                collectionTitle: title
                handle
                image {
                  ...Image
                }
              }
            }
            url
          }
        }
      }
      ... on SectionContent {
        type
        content
      }
      ... on SectionVideos {
        type
        videosUrls
      }
      ... on SectionCollectionsRow {
        id
        storeId
        type
        header
        displayAs
        locale
        translations {
          header
          locale
        }
        background {
          type
          color
        }
        showSectionHeader
        stretchToFullWidth
        showItemName
        itemsPerRow
        collections {
          id
          handle
          title
          productsCount
          shortDescription
          seo {
            description
          }
          image {
            ...Image
          }
        }
      }
      ... on SectionProductsRow {
        id
        storeId
        type
        header
        displayAs
        locale
        translations {
          header
          locale
        }
        background {
          type
          color
        }
        showSectionHeader
        stretchToFullWidth
        itemsPerRow
        fromCollection {
          id
          handle
        }
        products {
          ...ProductBasicInfo
        }
        productsDisplayNumber
      }
      ... on SectionAttributesRow {
        id
        storeId
        type
        header
        displayAs
        locale
        translations {
          header
          locale
        }
        background {
          type
          color
        }
        showSectionHeader
        stretchToFullWidth
        showItemName
        itemsPerRow
        attributeValues {
          id
          handle
          name
          image {
            ...Image
          }
          attribute {
            id
          }
        }
      }
    }
  }
  ${ImageFragmentDoc}
  ${ProductBasicInfoFragmentDoc}
`;
export const SocialStoreDetailsByHandleDocument = gql`
  query SocialStoreDetailsByHandle($storeHandle: String!) {
    store: storeByHandle(handle: $storeHandle) {
      ...SocialStoreDetails
    }
  }
  ${SocialStoreDetailsFragmentDoc}
`;

/**
 * __useSocialStoreDetailsByHandleQuery__
 *
 * To run a query within a React component, call `useSocialStoreDetailsByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialStoreDetailsByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialStoreDetailsByHandleQuery({
 *   variables: {
 *      storeHandle: // value for 'storeHandle'
 *   },
 * });
 */
export function useSocialStoreDetailsByHandleQuery(
  baseOptions: Apollo.QueryHookOptions<
    SocialStoreDetailsByHandleQuery,
    SocialStoreDetailsByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SocialStoreDetailsByHandleQuery,
    SocialStoreDetailsByHandleQueryVariables
  >(SocialStoreDetailsByHandleDocument, options);
}
export function useSocialStoreDetailsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SocialStoreDetailsByHandleQuery,
    SocialStoreDetailsByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SocialStoreDetailsByHandleQuery,
    SocialStoreDetailsByHandleQueryVariables
  >(SocialStoreDetailsByHandleDocument, options);
}
export type SocialStoreDetailsByHandleQueryHookResult = ReturnType<
  typeof useSocialStoreDetailsByHandleQuery
>;
export type SocialStoreDetailsByHandleLazyQueryHookResult = ReturnType<
  typeof useSocialStoreDetailsByHandleLazyQuery
>;
export type SocialStoreDetailsByHandleQueryResult = Apollo.QueryResult<
  SocialStoreDetailsByHandleQuery,
  SocialStoreDetailsByHandleQueryVariables
>;
export const SocialStoreDetailsByDomainDocument = gql`
  query SocialStoreDetailsByDomain($storeDomain: String!) {
    store: storeByDomain(domainName: $storeDomain) {
      ...SocialStoreDetails
    }
  }
  ${SocialStoreDetailsFragmentDoc}
`;

/**
 * __useSocialStoreDetailsByDomainQuery__
 *
 * To run a query within a React component, call `useSocialStoreDetailsByDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialStoreDetailsByDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialStoreDetailsByDomainQuery({
 *   variables: {
 *      storeDomain: // value for 'storeDomain'
 *   },
 * });
 */
export function useSocialStoreDetailsByDomainQuery(
  baseOptions: Apollo.QueryHookOptions<
    SocialStoreDetailsByDomainQuery,
    SocialStoreDetailsByDomainQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SocialStoreDetailsByDomainQuery,
    SocialStoreDetailsByDomainQueryVariables
  >(SocialStoreDetailsByDomainDocument, options);
}
export function useSocialStoreDetailsByDomainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SocialStoreDetailsByDomainQuery,
    SocialStoreDetailsByDomainQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SocialStoreDetailsByDomainQuery,
    SocialStoreDetailsByDomainQueryVariables
  >(SocialStoreDetailsByDomainDocument, options);
}
export type SocialStoreDetailsByDomainQueryHookResult = ReturnType<
  typeof useSocialStoreDetailsByDomainQuery
>;
export type SocialStoreDetailsByDomainLazyQueryHookResult = ReturnType<
  typeof useSocialStoreDetailsByDomainLazyQuery
>;
export type SocialStoreDetailsByDomainQueryResult = Apollo.QueryResult<
  SocialStoreDetailsByDomainQuery,
  SocialStoreDetailsByDomainQueryVariables
>;
export const SocialIntegrationProductsDocument = gql`
  query SocialIntegrationProducts(
    $filter: ProductsFilterInput
    $connection: ProductsConnectionInput
  ) {
    products(filter: $filter, connection: $connection) {
      nodes {
        ...SocialIntegrationProduct
      }
    }
  }
  ${SocialIntegrationProductFragmentDoc}
`;

/**
 * __useSocialIntegrationProductsQuery__
 *
 * To run a query within a React component, call `useSocialIntegrationProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialIntegrationProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialIntegrationProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      connection: // value for 'connection'
 *   },
 * });
 */
export function useSocialIntegrationProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SocialIntegrationProductsQuery,
    SocialIntegrationProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SocialIntegrationProductsQuery,
    SocialIntegrationProductsQueryVariables
  >(SocialIntegrationProductsDocument, options);
}
export function useSocialIntegrationProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SocialIntegrationProductsQuery,
    SocialIntegrationProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SocialIntegrationProductsQuery,
    SocialIntegrationProductsQueryVariables
  >(SocialIntegrationProductsDocument, options);
}
export type SocialIntegrationProductsQueryHookResult = ReturnType<
  typeof useSocialIntegrationProductsQuery
>;
export type SocialIntegrationProductsLazyQueryHookResult = ReturnType<
  typeof useSocialIntegrationProductsLazyQuery
>;
export type SocialIntegrationProductsQueryResult = Apollo.QueryResult<
  SocialIntegrationProductsQuery,
  SocialIntegrationProductsQueryVariables
>;
export const ValidateSocialIntegrationInstallationDocument = gql`
  query ValidateSocialIntegrationInstallation(
    $storeId: ID!
    $provider: ProviderName!
    $authHeader: String!
  ) {
    validateSocialIntegrationInstallation(
      provider: $provider
      storeId: $storeId
      authHeader: $authHeader
    )
  }
`;

/**
 * __useValidateSocialIntegrationInstallationQuery__
 *
 * To run a query within a React component, call `useValidateSocialIntegrationInstallationQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateSocialIntegrationInstallationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateSocialIntegrationInstallationQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      provider: // value for 'provider'
 *      authHeader: // value for 'authHeader'
 *   },
 * });
 */
export function useValidateSocialIntegrationInstallationQuery(
  baseOptions: Apollo.QueryHookOptions<
    ValidateSocialIntegrationInstallationQuery,
    ValidateSocialIntegrationInstallationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ValidateSocialIntegrationInstallationQuery,
    ValidateSocialIntegrationInstallationQueryVariables
  >(ValidateSocialIntegrationInstallationDocument, options);
}
export function useValidateSocialIntegrationInstallationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ValidateSocialIntegrationInstallationQuery,
    ValidateSocialIntegrationInstallationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ValidateSocialIntegrationInstallationQuery,
    ValidateSocialIntegrationInstallationQueryVariables
  >(ValidateSocialIntegrationInstallationDocument, options);
}
export type ValidateSocialIntegrationInstallationQueryHookResult = ReturnType<
  typeof useValidateSocialIntegrationInstallationQuery
>;
export type ValidateSocialIntegrationInstallationLazyQueryHookResult =
  ReturnType<typeof useValidateSocialIntegrationInstallationLazyQuery>;
export type ValidateSocialIntegrationInstallationQueryResult =
  Apollo.QueryResult<
    ValidateSocialIntegrationInstallationQuery,
    ValidateSocialIntegrationInstallationQueryVariables
  >;
export const CreateOrderDocument = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      ...OrderInfo
    }
  }
  ${OrderInfoFragmentDoc}
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options
  );
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const UpdateOrderPromoDocument = gql`
  mutation UpdateOrderPromo($UpdateOrderPromoInput: UpdateOrderPromoInput!) {
    updateOrderPromo(input: $UpdateOrderPromoInput) {
      promoCode {
        code
        percentageOff
      }
    }
  }
`;
export type UpdateOrderPromoMutationFn = Apollo.MutationFunction<
  UpdateOrderPromoMutation,
  UpdateOrderPromoMutationVariables
>;

/**
 * __useUpdateOrderPromoMutation__
 *
 * To run a mutation, you first call `useUpdateOrderPromoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderPromoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderPromoMutation, { data, loading, error }] = useUpdateOrderPromoMutation({
 *   variables: {
 *      UpdateOrderPromoInput: // value for 'UpdateOrderPromoInput'
 *   },
 * });
 */
export function useUpdateOrderPromoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderPromoMutation,
    UpdateOrderPromoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOrderPromoMutation,
    UpdateOrderPromoMutationVariables
  >(UpdateOrderPromoDocument, options);
}
export type UpdateOrderPromoMutationHookResult = ReturnType<
  typeof useUpdateOrderPromoMutation
>;
export type UpdateOrderPromoMutationResult =
  Apollo.MutationResult<UpdateOrderPromoMutation>;
export type UpdateOrderPromoMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderPromoMutation,
  UpdateOrderPromoMutationVariables
>;
export const SubmitStoreContactFormDocument = gql`
  mutation submitStoreContactForm($input: SubmitStoreContactFormInput!) {
    submitStoreContactForm(input: $input) {
      statusCode
      message
    }
  }
`;
export type SubmitStoreContactFormMutationFn = Apollo.MutationFunction<
  SubmitStoreContactFormMutation,
  SubmitStoreContactFormMutationVariables
>;

/**
 * __useSubmitStoreContactFormMutation__
 *
 * To run a mutation, you first call `useSubmitStoreContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStoreContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStoreContactFormMutation, { data, loading, error }] = useSubmitStoreContactFormMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitStoreContactFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitStoreContactFormMutation,
    SubmitStoreContactFormMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubmitStoreContactFormMutation,
    SubmitStoreContactFormMutationVariables
  >(SubmitStoreContactFormDocument, options);
}
export type SubmitStoreContactFormMutationHookResult = ReturnType<
  typeof useSubmitStoreContactFormMutation
>;
export type SubmitStoreContactFormMutationResult =
  Apollo.MutationResult<SubmitStoreContactFormMutation>;
export type SubmitStoreContactFormMutationOptions = Apollo.BaseMutationOptions<
  SubmitStoreContactFormMutation,
  SubmitStoreContactFormMutationVariables
>;
export const UpdateOrderPaymentMethodDocument = gql`
  mutation UpdateOrderPaymentMethod(
    $orderId: ID!
    $paymentMethod: PaymentMethodEnum
    $storeId: ID!
  ) {
    updateOrderPaymentMethod(
      orderId: $orderId
      paymentMethod: $paymentMethod
      storeId: $storeId
    ) {
      ...PaymentIntentInfo
    }
  }
  ${PaymentIntentInfoFragmentDoc}
`;
export type UpdateOrderPaymentMethodMutationFn = Apollo.MutationFunction<
  UpdateOrderPaymentMethodMutation,
  UpdateOrderPaymentMethodMutationVariables
>;

/**
 * __useUpdateOrderPaymentMethodMutation__
 *
 * To run a mutation, you first call `useUpdateOrderPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderPaymentMethodMutation, { data, loading, error }] = useUpdateOrderPaymentMethodMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      paymentMethod: // value for 'paymentMethod'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useUpdateOrderPaymentMethodMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderPaymentMethodMutation,
    UpdateOrderPaymentMethodMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOrderPaymentMethodMutation,
    UpdateOrderPaymentMethodMutationVariables
  >(UpdateOrderPaymentMethodDocument, options);
}
export type UpdateOrderPaymentMethodMutationHookResult = ReturnType<
  typeof useUpdateOrderPaymentMethodMutation
>;
export type UpdateOrderPaymentMethodMutationResult =
  Apollo.MutationResult<UpdateOrderPaymentMethodMutation>;
export type UpdateOrderPaymentMethodMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateOrderPaymentMethodMutation,
    UpdateOrderPaymentMethodMutationVariables
  >;
export const CancelPaymentDocument = gql`
  mutation CancelPayment($storeId: ID!, $orderId: ID!) {
    cancelPayment(storeId: $storeId, orderId: $orderId) {
      status
    }
  }
`;
export type CancelPaymentMutationFn = Apollo.MutationFunction<
  CancelPaymentMutation,
  CancelPaymentMutationVariables
>;

/**
 * __useCancelPaymentMutation__
 *
 * To run a mutation, you first call `useCancelPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelPaymentMutation, { data, loading, error }] = useCancelPaymentMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useCancelPaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CancelPaymentMutation,
    CancelPaymentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CancelPaymentMutation,
    CancelPaymentMutationVariables
  >(CancelPaymentDocument, options);
}
export type CancelPaymentMutationHookResult = ReturnType<
  typeof useCancelPaymentMutation
>;
export type CancelPaymentMutationResult =
  Apollo.MutationResult<CancelPaymentMutation>;
export type CancelPaymentMutationOptions = Apollo.BaseMutationOptions<
  CancelPaymentMutation,
  CancelPaymentMutationVariables
>;
export const ConfirmIntentDocument = gql`
  mutation ConfirmIntent($id: ID!, $storeId: ID!) {
    confirmPaymentIntent(id: $id, storeId: $storeId) {
      ...PaymentIntentInfo
    }
  }
  ${PaymentIntentInfoFragmentDoc}
`;
export type ConfirmIntentMutationFn = Apollo.MutationFunction<
  ConfirmIntentMutation,
  ConfirmIntentMutationVariables
>;

/**
 * __useConfirmIntentMutation__
 *
 * To run a mutation, you first call `useConfirmIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmIntentMutation, { data, loading, error }] = useConfirmIntentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useConfirmIntentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmIntentMutation,
    ConfirmIntentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ConfirmIntentMutation,
    ConfirmIntentMutationVariables
  >(ConfirmIntentDocument, options);
}
export type ConfirmIntentMutationHookResult = ReturnType<
  typeof useConfirmIntentMutation
>;
export type ConfirmIntentMutationResult =
  Apollo.MutationResult<ConfirmIntentMutation>;
export type ConfirmIntentMutationOptions = Apollo.BaseMutationOptions<
  ConfirmIntentMutation,
  ConfirmIntentMutationVariables
>;
export const AddCustomerAddressDocument = gql`
  mutation AddCustomerAddress(
    $customerId: ID!
    $input: AddCustomerAddressInput!
  ) {
    addCustomerAddress(customerId: $customerId, input: $input) {
      ...AddressInfo
    }
  }
  ${AddressInfoFragmentDoc}
`;
export type AddCustomerAddressMutationFn = Apollo.MutationFunction<
  AddCustomerAddressMutation,
  AddCustomerAddressMutationVariables
>;

/**
 * __useAddCustomerAddressMutation__
 *
 * To run a mutation, you first call `useAddCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCustomerAddressMutation, { data, loading, error }] = useAddCustomerAddressMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCustomerAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCustomerAddressMutation,
    AddCustomerAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddCustomerAddressMutation,
    AddCustomerAddressMutationVariables
  >(AddCustomerAddressDocument, options);
}
export type AddCustomerAddressMutationHookResult = ReturnType<
  typeof useAddCustomerAddressMutation
>;
export type AddCustomerAddressMutationResult =
  Apollo.MutationResult<AddCustomerAddressMutation>;
export type AddCustomerAddressMutationOptions = Apollo.BaseMutationOptions<
  AddCustomerAddressMutation,
  AddCustomerAddressMutationVariables
>;
export const UpdateCustomerAddressDocument = gql`
  mutation UpdateCustomerAddress(
    $customerId: ID!
    $addressId: ID!
    $input: UpdateCustomerAddressInput!
  ) {
    updateCustomerAddress(
      customerId: $customerId
      addressId: $addressId
      input: $input
    ) {
      ...AddressInfo
    }
  }
  ${AddressInfoFragmentDoc}
`;
export type UpdateCustomerAddressMutationFn = Apollo.MutationFunction<
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables
>;

/**
 * __useUpdateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerAddressMutation, { data, loading, error }] = useUpdateCustomerAddressMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      addressId: // value for 'addressId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >(UpdateCustomerAddressDocument, options);
}
export type UpdateCustomerAddressMutationHookResult = ReturnType<
  typeof useUpdateCustomerAddressMutation
>;
export type UpdateCustomerAddressMutationResult =
  Apollo.MutationResult<UpdateCustomerAddressMutation>;
export type UpdateCustomerAddressMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables
>;
export const DeleteCustomerAddressDocument = gql`
  mutation DeleteCustomerAddress(
    $customerId: ID!
    $addressId: ID!
    $storeId: ID!
  ) {
    deleteCustomerAddress(
      customerId: $customerId
      addressId: $addressId
      storeId: $storeId
    )
  }
`;
export type DeleteCustomerAddressMutationFn = Apollo.MutationFunction<
  DeleteCustomerAddressMutation,
  DeleteCustomerAddressMutationVariables
>;

/**
 * __useDeleteCustomerAddressMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerAddressMutation, { data, loading, error }] = useDeleteCustomerAddressMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      addressId: // value for 'addressId'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useDeleteCustomerAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables
  >(DeleteCustomerAddressDocument, options);
}
export type DeleteCustomerAddressMutationHookResult = ReturnType<
  typeof useDeleteCustomerAddressMutation
>;
export type DeleteCustomerAddressMutationResult =
  Apollo.MutationResult<DeleteCustomerAddressMutation>;
export type DeleteCustomerAddressMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomerAddressMutation,
  DeleteCustomerAddressMutationVariables
>;
export const MakeDefaultAddressDocument = gql`
  mutation MakeDefaultAddress(
    $customerId: ID!
    $addressId: ID!
    $storeId: ID!
  ) {
    makeDefaultAddress(
      customerId: $customerId
      addressId: $addressId
      storeId: $storeId
    ) {
      ...AddressInfo
    }
  }
  ${AddressInfoFragmentDoc}
`;
export type MakeDefaultAddressMutationFn = Apollo.MutationFunction<
  MakeDefaultAddressMutation,
  MakeDefaultAddressMutationVariables
>;

/**
 * __useMakeDefaultAddressMutation__
 *
 * To run a mutation, you first call `useMakeDefaultAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeDefaultAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeDefaultAddressMutation, { data, loading, error }] = useMakeDefaultAddressMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      addressId: // value for 'addressId'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useMakeDefaultAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MakeDefaultAddressMutation,
    MakeDefaultAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MakeDefaultAddressMutation,
    MakeDefaultAddressMutationVariables
  >(MakeDefaultAddressDocument, options);
}
export type MakeDefaultAddressMutationHookResult = ReturnType<
  typeof useMakeDefaultAddressMutation
>;
export type MakeDefaultAddressMutationResult =
  Apollo.MutationResult<MakeDefaultAddressMutation>;
export type MakeDefaultAddressMutationOptions = Apollo.BaseMutationOptions<
  MakeDefaultAddressMutation,
  MakeDefaultAddressMutationVariables
>;
export const UpdateCustomerInfoDocument = gql`
  mutation updateCustomerInfo(
    $storeId: ID!
    $customerId: ID!
    $input: updateCustomerUserInput
  ) {
    updateCustomer(storeId: $storeId, customerId: $customerId, input: $input) {
      id
      name
      email
      phone
    }
  }
`;
export type UpdateCustomerInfoMutationFn = Apollo.MutationFunction<
  UpdateCustomerInfoMutation,
  UpdateCustomerInfoMutationVariables
>;

/**
 * __useUpdateCustomerInfoMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerInfoMutation, { data, loading, error }] = useUpdateCustomerInfoMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      customerId: // value for 'customerId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerInfoMutation,
    UpdateCustomerInfoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerInfoMutation,
    UpdateCustomerInfoMutationVariables
  >(UpdateCustomerInfoDocument, options);
}
export type UpdateCustomerInfoMutationHookResult = ReturnType<
  typeof useUpdateCustomerInfoMutation
>;
export type UpdateCustomerInfoMutationResult =
  Apollo.MutationResult<UpdateCustomerInfoMutation>;
export type UpdateCustomerInfoMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerInfoMutation,
  UpdateCustomerInfoMutationVariables
>;
export const UpdateCustomerPasswordDocument = gql`
  mutation updateCustomerPassword(
    $oldPassword: String!
    $newPassword: String!
  ) {
    updateCustomerPassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;
export type UpdateCustomerPasswordMutationFn = Apollo.MutationFunction<
  UpdateCustomerPasswordMutation,
  UpdateCustomerPasswordMutationVariables
>;

/**
 * __useUpdateCustomerPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerPasswordMutation, { data, loading, error }] = useUpdateCustomerPasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdateCustomerPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerPasswordMutation,
    UpdateCustomerPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerPasswordMutation,
    UpdateCustomerPasswordMutationVariables
  >(UpdateCustomerPasswordDocument, options);
}
export type UpdateCustomerPasswordMutationHookResult = ReturnType<
  typeof useUpdateCustomerPasswordMutation
>;
export type UpdateCustomerPasswordMutationResult =
  Apollo.MutationResult<UpdateCustomerPasswordMutation>;
export type UpdateCustomerPasswordMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerPasswordMutation,
  UpdateCustomerPasswordMutationVariables
>;
export const SubmitReviewDocument = gql`
  mutation SubmitReview($storeId: ID!, $review: CreateProductReviewInput!) {
    submitReview(storeId: $storeId, review: $review) {
      id
    }
  }
`;
export type SubmitReviewMutationFn = Apollo.MutationFunction<
  SubmitReviewMutation,
  SubmitReviewMutationVariables
>;

/**
 * __useSubmitReviewMutation__
 *
 * To run a mutation, you first call `useSubmitReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitReviewMutation, { data, loading, error }] = useSubmitReviewMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      review: // value for 'review'
 *   },
 * });
 */
export function useSubmitReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitReviewMutation,
    SubmitReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubmitReviewMutation,
    SubmitReviewMutationVariables
  >(SubmitReviewDocument, options);
}
export type SubmitReviewMutationHookResult = ReturnType<
  typeof useSubmitReviewMutation
>;
export type SubmitReviewMutationResult =
  Apollo.MutationResult<SubmitReviewMutation>;
export type SubmitReviewMutationOptions = Apollo.BaseMutationOptions<
  SubmitReviewMutation,
  SubmitReviewMutationVariables
>;
export const DeleteReviewDocument = gql`
  mutation DeleteReview($storeId: ID!, $reviewId: ID!) {
    deleteReview(storeId: $storeId, reviewId: $reviewId)
  }
`;
export type DeleteReviewMutationFn = Apollo.MutationFunction<
  DeleteReviewMutation,
  DeleteReviewMutationVariables
>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      reviewId: // value for 'reviewId'
 *   },
 * });
 */
export function useDeleteReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteReviewMutation,
    DeleteReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteReviewMutation,
    DeleteReviewMutationVariables
  >(DeleteReviewDocument, options);
}
export type DeleteReviewMutationHookResult = ReturnType<
  typeof useDeleteReviewMutation
>;
export type DeleteReviewMutationResult =
  Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<
  DeleteReviewMutation,
  DeleteReviewMutationVariables
>;
export const EditReviewDocument = gql`
  mutation EditReview(
    $storeId: ID!
    $reviewId: ID!
    $review: UpdateProductReviewInput!
  ) {
    editReview(storeId: $storeId, reviewId: $reviewId, review: $review) {
      id
    }
  }
`;
export type EditReviewMutationFn = Apollo.MutationFunction<
  EditReviewMutation,
  EditReviewMutationVariables
>;

/**
 * __useEditReviewMutation__
 *
 * To run a mutation, you first call `useEditReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editReviewMutation, { data, loading, error }] = useEditReviewMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      reviewId: // value for 'reviewId'
 *      review: // value for 'review'
 *   },
 * });
 */
export function useEditReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditReviewMutation,
    EditReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditReviewMutation, EditReviewMutationVariables>(
    EditReviewDocument,
    options
  );
}
export type EditReviewMutationHookResult = ReturnType<
  typeof useEditReviewMutation
>;
export type EditReviewMutationResult =
  Apollo.MutationResult<EditReviewMutation>;
export type EditReviewMutationOptions = Apollo.BaseMutationOptions<
  EditReviewMutation,
  EditReviewMutationVariables
>;
export const StoreHomepageDocument = gql`
  query StoreHomepage($storeId: ID!) {
    store(id: $storeId) {
      id
      products(connection: { first: 6 }) {
        nodes {
          ...ProductBasicInfo
        }
      }
      StoreHomePageSections {
        ...StorePageSections
      }
      appearance {
        ...StoreHomeAppearance
      }
    }
    storePaymentMethods(storeId: $storeId) {
      id
      type
      enabled
    }
  }
  ${ProductBasicInfoFragmentDoc}
  ${StorePageSectionsFragmentDoc}
  ${StoreHomeAppearanceFragmentDoc}
`;

/**
 * __useStoreHomepageQuery__
 *
 * To run a query within a React component, call `useStoreHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreHomepageQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreHomepageQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreHomepageQuery,
    StoreHomepageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StoreHomepageQuery, StoreHomepageQueryVariables>(
    StoreHomepageDocument,
    options
  );
}
export function useStoreHomepageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreHomepageQuery,
    StoreHomepageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StoreHomepageQuery, StoreHomepageQueryVariables>(
    StoreHomepageDocument,
    options
  );
}
export type StoreHomepageQueryHookResult = ReturnType<
  typeof useStoreHomepageQuery
>;
export type StoreHomepageLazyQueryHookResult = ReturnType<
  typeof useStoreHomepageLazyQuery
>;
export type StoreHomepageQueryResult = Apollo.QueryResult<
  StoreHomepageQuery,
  StoreHomepageQueryVariables
>;
export const CollectionsDocument = gql`
  query Collections($ids: [ID]) {
    collections(filter: { ids: $ids }) {
      nodes {
        ...CollectionInfo
      }
    }
  }
  ${CollectionInfoFragmentDoc}
`;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CollectionsQuery,
    CollectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(
    CollectionsDocument,
    options
  );
}
export function useCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionsQuery,
    CollectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(
    CollectionsDocument,
    options
  );
}
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<
  typeof useCollectionsLazyQuery
>;
export type CollectionsQueryResult = Apollo.QueryResult<
  CollectionsQuery,
  CollectionsQueryVariables
>;
export const ProductDetailsDocument = gql`
  query ProductDetails(
    $storeId: ID!
    $slug: String
    $collectionHandle: String! = ""
  ) {
    collection: storeCollectionByHandle(
      storeId: $storeId
      handle: $collectionHandle
    ) {
      ...CollectionInfo
    }
    product: storeProductByHandle(storeId: $storeId, handle: $slug) {
      ...ProductInfo
      options {
        ...ProductOptionsInfo
      }
      seo {
        title
        description
      }
      attributes {
        ...ProductAttributesInfo
      }
    }
  }
  ${CollectionInfoFragmentDoc}
  ${ProductInfoFragmentDoc}
  ${ProductOptionsInfoFragmentDoc}
  ${ProductAttributesInfoFragmentDoc}
`;

/**
 * __useProductDetailsQuery__
 *
 * To run a query within a React component, call `useProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      slug: // value for 'slug'
 *      collectionHandle: // value for 'collectionHandle'
 *   },
 * });
 */
export function useProductDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProductDetailsQuery,
    ProductDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductDetailsQuery, ProductDetailsQueryVariables>(
    ProductDetailsDocument,
    options
  );
}
export function useProductDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductDetailsQuery,
    ProductDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductDetailsQuery, ProductDetailsQueryVariables>(
    ProductDetailsDocument,
    options
  );
}
export type ProductDetailsQueryHookResult = ReturnType<
  typeof useProductDetailsQuery
>;
export type ProductDetailsLazyQueryHookResult = ReturnType<
  typeof useProductDetailsLazyQuery
>;
export type ProductDetailsQueryResult = Apollo.QueryResult<
  ProductDetailsQuery,
  ProductDetailsQueryVariables
>;
export const ReviewsDocument = gql`
  query Reviews(
    $storeId: ID!
    $productId: ID!
    $connection: ReviewsConnectionInput!
  ) {
    product(storeId: $storeId, id: $productId) {
      reviewsStatistics {
        average
        starsCount {
          five
          four
          one
          three
          two
        }
        total
      }
      reviews(connection: $connection) {
        id
        content
        createdAt
        customer {
          name
        }
        customerId
        headline
        orderId
        rating
        showName
        reply {
          content
        }
      }
    }
  }
`;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      productId: // value for 'productId'
 *      connection: // value for 'connection'
 *   },
 * });
 */
export function useReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    options
  );
}
export function useReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    options
  );
}
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<
  ReviewsQuery,
  ReviewsQueryVariables
>;
export const StoreCollectionsDocument = gql`
  query StoreCollections(
    $storeId: ID!
    $connection: ProductCollectionConnectionInput
  ) {
    collections(connection: $connection, filter: { storeId: $storeId }) {
      totalCount
      nodes {
        ...CollectionInfo
      }
    }
  }
  ${CollectionInfoFragmentDoc}
`;

/**
 * __useStoreCollectionsQuery__
 *
 * To run a query within a React component, call `useStoreCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreCollectionsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      connection: // value for 'connection'
 *   },
 * });
 */
export function useStoreCollectionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreCollectionsQuery,
    StoreCollectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StoreCollectionsQuery, StoreCollectionsQueryVariables>(
    StoreCollectionsDocument,
    options
  );
}
export function useStoreCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreCollectionsQuery,
    StoreCollectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StoreCollectionsQuery,
    StoreCollectionsQueryVariables
  >(StoreCollectionsDocument, options);
}
export type StoreCollectionsQueryHookResult = ReturnType<
  typeof useStoreCollectionsQuery
>;
export type StoreCollectionsLazyQueryHookResult = ReturnType<
  typeof useStoreCollectionsLazyQuery
>;
export type StoreCollectionsQueryResult = Apollo.QueryResult<
  StoreCollectionsQuery,
  StoreCollectionsQueryVariables
>;
export const StoreProductsDocument = gql`
  query StoreProducts(
    $storeId: ID!
    $title: String
    $first: ConnectionLimitInt
    $offset: Int
    $priceFrom: Float
    $priceTo: Float
    $sortOrder: SortOrder
    $sortBy: ProductSortByField
  ) {
    products(
      connection: {
        first: $first
        offset: $offset
        sortBy: $sortBy
        sortOrder: $sortOrder
      }
      filter: {
        storeIds: [$storeId]
        title: $title
        minPrice: $priceFrom
        maxPrice: $priceTo
      }
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...ProductBasicInfo
      }
    }
  }
  ${ProductBasicInfoFragmentDoc}
`;

/**
 * __useStoreProductsQuery__
 *
 * To run a query within a React component, call `useStoreProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreProductsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      title: // value for 'title'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *      sortOrder: // value for 'sortOrder'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useStoreProductsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreProductsQuery,
    StoreProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StoreProductsQuery, StoreProductsQueryVariables>(
    StoreProductsDocument,
    options
  );
}
export function useStoreProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreProductsQuery,
    StoreProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StoreProductsQuery, StoreProductsQueryVariables>(
    StoreProductsDocument,
    options
  );
}
export type StoreProductsQueryHookResult = ReturnType<
  typeof useStoreProductsQuery
>;
export type StoreProductsLazyQueryHookResult = ReturnType<
  typeof useStoreProductsLazyQuery
>;
export type StoreProductsQueryResult = Apollo.QueryResult<
  StoreProductsQuery,
  StoreProductsQueryVariables
>;
export const SearchProductsDocument = gql`
  query SearchProducts(
    $connection: ProductsConnectionInput
    $filter: ProductsFilterInput
  ) {
    products(connection: $connection, filter: $filter) {
      totalCount
      nodes {
        id
        title
        handle
        type
        initialPrice {
          ...Money
        }
        images {
          ...Image
        }
        collections {
          nodes {
            id
            handle
          }
        }
        variants(first: 1) {
          nodes {
            id
            price {
              ...Money
            }
          }
        }
      }
    }
  }
  ${MoneyFragmentDoc}
  ${ImageFragmentDoc}
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      connection: // value for 'connection'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options
  );
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options
  );
}
export type SearchProductsQueryHookResult = ReturnType<
  typeof useSearchProductsQuery
>;
export type SearchProductsLazyQueryHookResult = ReturnType<
  typeof useSearchProductsLazyQuery
>;
export type SearchProductsQueryResult = Apollo.QueryResult<
  SearchProductsQuery,
  SearchProductsQueryVariables
>;
export const SearchAndFiltersDocument = gql`
  query SearchAndFilters(
    $storeId: ID!
    $connectionSettings: ProductsConnectionInput
    $filters: CatalogSearchFilters
  ) {
    searchCatalog(
      storeId: $storeId
      connectionSettings: $connectionSettings
      filters: $filters
    ) {
      products {
        ...ProductBasicInfo
      }
      metaData {
        totalCount
        collectionsProductsDistribution {
          collectionId
          count
          collection {
            isDeleted
            isArchived
            isVisible
            id
            title
          }
        }
        attributesProductsDistribution {
          count
          attributeValueId
          attributeValue {
            id
            name
            attribute {
              id
              name
            }
          }
        }
        optionsProductsDistribution {
          optionValueId
          count
          optionValue {
            id
            name
            option {
              id
              name
            }
          }
        }
      }
    }
  }
  ${ProductBasicInfoFragmentDoc}
`;

/**
 * __useSearchAndFiltersQuery__
 *
 * To run a query within a React component, call `useSearchAndFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAndFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAndFiltersQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      connectionSettings: // value for 'connectionSettings'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSearchAndFiltersQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchAndFiltersQuery,
    SearchAndFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchAndFiltersQuery, SearchAndFiltersQueryVariables>(
    SearchAndFiltersDocument,
    options
  );
}
export function useSearchAndFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchAndFiltersQuery,
    SearchAndFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchAndFiltersQuery,
    SearchAndFiltersQueryVariables
  >(SearchAndFiltersDocument, options);
}
export type SearchAndFiltersQueryHookResult = ReturnType<
  typeof useSearchAndFiltersQuery
>;
export type SearchAndFiltersLazyQueryHookResult = ReturnType<
  typeof useSearchAndFiltersLazyQuery
>;
export type SearchAndFiltersQueryResult = Apollo.QueryResult<
  SearchAndFiltersQuery,
  SearchAndFiltersQueryVariables
>;
export const CheckVariantsStatusDocument = gql`
  query CheckVariantsStatus($storeId: ID!, $variantIds: [ID!]!) {
    checkVariantsStatus(storeId: $storeId, variantIds: $variantIds) {
      id
      status
      trackQuantity
      quantity
    }
  }
`;

/**
 * __useCheckVariantsStatusQuery__
 *
 * To run a query within a React component, call `useCheckVariantsStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckVariantsStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckVariantsStatusQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      variantIds: // value for 'variantIds'
 *   },
 * });
 */
export function useCheckVariantsStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    CheckVariantsStatusQuery,
    CheckVariantsStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CheckVariantsStatusQuery,
    CheckVariantsStatusQueryVariables
  >(CheckVariantsStatusDocument, options);
}
export function useCheckVariantsStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckVariantsStatusQuery,
    CheckVariantsStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CheckVariantsStatusQuery,
    CheckVariantsStatusQueryVariables
  >(CheckVariantsStatusDocument, options);
}
export type CheckVariantsStatusQueryHookResult = ReturnType<
  typeof useCheckVariantsStatusQuery
>;
export type CheckVariantsStatusLazyQueryHookResult = ReturnType<
  typeof useCheckVariantsStatusLazyQuery
>;
export type CheckVariantsStatusQueryResult = Apollo.QueryResult<
  CheckVariantsStatusQuery,
  CheckVariantsStatusQueryVariables
>;
export const GetFiltersDocument = gql`
  query GetFilters($storeId: ID!) {
    getApplicableFilters(storeId: $storeId) {
      collections {
        title
        id
        isDeleted
        isArchived
        isVisible
      }
      optionValues {
        name
        id
        option {
          name
          id
        }
      }
      attributeValues {
        name
        id
        attribute {
          name
          id
        }
      }
    }
  }
`;

/**
 * __useGetFiltersQuery__
 *
 * To run a query within a React component, call `useGetFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFiltersQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useGetFiltersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFiltersQuery,
    GetFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFiltersQuery, GetFiltersQueryVariables>(
    GetFiltersDocument,
    options
  );
}
export function useGetFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFiltersQuery,
    GetFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFiltersQuery, GetFiltersQueryVariables>(
    GetFiltersDocument,
    options
  );
}
export type GetFiltersQueryHookResult = ReturnType<typeof useGetFiltersQuery>;
export type GetFiltersLazyQueryHookResult = ReturnType<
  typeof useGetFiltersLazyQuery
>;
export type GetFiltersQueryResult = Apollo.QueryResult<
  GetFiltersQuery,
  GetFiltersQueryVariables
>;
export const FullTextSearchAndFilterDocument = gql`
  query FullTextSearchAndFilter(
    $storeId: ID!
    $connectionSettings: ProductsConnectionInput
    $filters: CatalogSearchFilters
  ) {
    fullTextSearchAndFilter(
      storeId: $storeId
      connectionSettings: $connectionSettings
      filters: $filters
    ) {
      products {
        ...ProductBasicInfo
      }
      totalCount
    }
  }
  ${ProductBasicInfoFragmentDoc}
`;

/**
 * __useFullTextSearchAndFilterQuery__
 *
 * To run a query within a React component, call `useFullTextSearchAndFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullTextSearchAndFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullTextSearchAndFilterQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      connectionSettings: // value for 'connectionSettings'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useFullTextSearchAndFilterQuery(
  baseOptions: Apollo.QueryHookOptions<
    FullTextSearchAndFilterQuery,
    FullTextSearchAndFilterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FullTextSearchAndFilterQuery,
    FullTextSearchAndFilterQueryVariables
  >(FullTextSearchAndFilterDocument, options);
}
export function useFullTextSearchAndFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FullTextSearchAndFilterQuery,
    FullTextSearchAndFilterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FullTextSearchAndFilterQuery,
    FullTextSearchAndFilterQueryVariables
  >(FullTextSearchAndFilterDocument, options);
}
export type FullTextSearchAndFilterQueryHookResult = ReturnType<
  typeof useFullTextSearchAndFilterQuery
>;
export type FullTextSearchAndFilterLazyQueryHookResult = ReturnType<
  typeof useFullTextSearchAndFilterLazyQuery
>;
export type FullTextSearchAndFilterQueryResult = Apollo.QueryResult<
  FullTextSearchAndFilterQuery,
  FullTextSearchAndFilterQueryVariables
>;
export const CollectionProductsDocument = gql`
  query CollectionProducts(
    $storeId: ID!
    $handle: String!
    $first: ConnectionLimitInt
    $offset: Int
    $priceFrom: Float
    $priceTo: Float
    $sortOrder: SortOrder
    $sortBy: CollectionProductsSortBy
  ) {
    collection: storeCollectionByHandle(storeId: $storeId, handle: $handle) {
      ...CollectionInfo
      products(
        connection: {
          first: $first
          offset: $offset
          sortBy: $sortBy
          sortOrder: $sortOrder
        }
        filter: { minPrice: $priceFrom, maxPrice: $priceTo }
      ) {
        nodes {
          ...ProductBasicInfo
        }
        totalCount
      }
    }
  }
  ${CollectionInfoFragmentDoc}
  ${ProductBasicInfoFragmentDoc}
`;

/**
 * __useCollectionProductsQuery__
 *
 * To run a query within a React component, call `useCollectionProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionProductsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      handle: // value for 'handle'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *      sortOrder: // value for 'sortOrder'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useCollectionProductsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CollectionProductsQuery,
    CollectionProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CollectionProductsQuery,
    CollectionProductsQueryVariables
  >(CollectionProductsDocument, options);
}
export function useCollectionProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionProductsQuery,
    CollectionProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CollectionProductsQuery,
    CollectionProductsQueryVariables
  >(CollectionProductsDocument, options);
}
export type CollectionProductsQueryHookResult = ReturnType<
  typeof useCollectionProductsQuery
>;
export type CollectionProductsLazyQueryHookResult = ReturnType<
  typeof useCollectionProductsLazyQuery
>;
export type CollectionProductsQueryResult = Apollo.QueryResult<
  CollectionProductsQuery,
  CollectionProductsQueryVariables
>;
export const StoreDetailsByHandleDocument = gql`
  query StoreDetailsByHandle($storeHandle: String!) {
    store: storeByHandle(handle: $storeHandle) {
      ...StoreDetails
    }
  }
  ${StoreDetailsFragmentDoc}
`;

/**
 * __useStoreDetailsByHandleQuery__
 *
 * To run a query within a React component, call `useStoreDetailsByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreDetailsByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreDetailsByHandleQuery({
 *   variables: {
 *      storeHandle: // value for 'storeHandle'
 *   },
 * });
 */
export function useStoreDetailsByHandleQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreDetailsByHandleQuery,
    StoreDetailsByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StoreDetailsByHandleQuery,
    StoreDetailsByHandleQueryVariables
  >(StoreDetailsByHandleDocument, options);
}
export function useStoreDetailsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreDetailsByHandleQuery,
    StoreDetailsByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StoreDetailsByHandleQuery,
    StoreDetailsByHandleQueryVariables
  >(StoreDetailsByHandleDocument, options);
}
export type StoreDetailsByHandleQueryHookResult = ReturnType<
  typeof useStoreDetailsByHandleQuery
>;
export type StoreDetailsByHandleLazyQueryHookResult = ReturnType<
  typeof useStoreDetailsByHandleLazyQuery
>;
export type StoreDetailsByHandleQueryResult = Apollo.QueryResult<
  StoreDetailsByHandleQuery,
  StoreDetailsByHandleQueryVariables
>;
export const StoreDetailsByDomainDocument = gql`
  query StoreDetailsByDomain($storeDomain: String!) {
    store: storeByDomain(domainName: $storeDomain) {
      ...StoreDetails
    }
  }
  ${StoreDetailsFragmentDoc}
`;

/**
 * __useStoreDetailsByDomainQuery__
 *
 * To run a query within a React component, call `useStoreDetailsByDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreDetailsByDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreDetailsByDomainQuery({
 *   variables: {
 *      storeDomain: // value for 'storeDomain'
 *   },
 * });
 */
export function useStoreDetailsByDomainQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreDetailsByDomainQuery,
    StoreDetailsByDomainQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StoreDetailsByDomainQuery,
    StoreDetailsByDomainQueryVariables
  >(StoreDetailsByDomainDocument, options);
}
export function useStoreDetailsByDomainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreDetailsByDomainQuery,
    StoreDetailsByDomainQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StoreDetailsByDomainQuery,
    StoreDetailsByDomainQueryVariables
  >(StoreDetailsByDomainDocument, options);
}
export type StoreDetailsByDomainQueryHookResult = ReturnType<
  typeof useStoreDetailsByDomainQuery
>;
export type StoreDetailsByDomainLazyQueryHookResult = ReturnType<
  typeof useStoreDetailsByDomainLazyQuery
>;
export type StoreDetailsByDomainQueryResult = Apollo.QueryResult<
  StoreDetailsByDomainQuery,
  StoreDetailsByDomainQueryVariables
>;
export const ShippingDestinationsDocument = gql`
  query ShippingDestinations($storeId: ID!) {
    store(id: $storeId) {
      id
      shippingZones {
        totalCount
        nodes {
          id
          name
          countries {
            totalCount
            nodes {
              id
              name
              zoneId
              states {
                totalCount
                nodes {
                  id
                  name
                  cities {
                    totalCount
                    nodes {
                      id
                      name
                      regions {
                        totalCount
                        nodes {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useShippingDestinationsQuery__
 *
 * To run a query within a React component, call `useShippingDestinationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShippingDestinationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShippingDestinationsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useShippingDestinationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShippingDestinationsQuery,
    ShippingDestinationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ShippingDestinationsQuery,
    ShippingDestinationsQueryVariables
  >(ShippingDestinationsDocument, options);
}
export function useShippingDestinationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShippingDestinationsQuery,
    ShippingDestinationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ShippingDestinationsQuery,
    ShippingDestinationsQueryVariables
  >(ShippingDestinationsDocument, options);
}
export type ShippingDestinationsQueryHookResult = ReturnType<
  typeof useShippingDestinationsQuery
>;
export type ShippingDestinationsLazyQueryHookResult = ReturnType<
  typeof useShippingDestinationsLazyQuery
>;
export type ShippingDestinationsQueryResult = Apollo.QueryResult<
  ShippingDestinationsQuery,
  ShippingDestinationsQueryVariables
>;
export const ShippingRatesDocument = gql`
  query ShippingRates($storeId: ID!, $input: ShippingRatesInput) {
    store(id: $storeId) {
      id
      shippingRates(input: $input) {
        id
        name
        cost {
          ...Money
        }
      }
    }
  }
  ${MoneyFragmentDoc}
`;

/**
 * __useShippingRatesQuery__
 *
 * To run a query within a React component, call `useShippingRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShippingRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShippingRatesQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShippingRatesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShippingRatesQuery,
    ShippingRatesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShippingRatesQuery, ShippingRatesQueryVariables>(
    ShippingRatesDocument,
    options
  );
}
export function useShippingRatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShippingRatesQuery,
    ShippingRatesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ShippingRatesQuery, ShippingRatesQueryVariables>(
    ShippingRatesDocument,
    options
  );
}
export type ShippingRatesQueryHookResult = ReturnType<
  typeof useShippingRatesQuery
>;
export type ShippingRatesLazyQueryHookResult = ReturnType<
  typeof useShippingRatesLazyQuery
>;
export type ShippingRatesQueryResult = Apollo.QueryResult<
  ShippingRatesQuery,
  ShippingRatesQueryVariables
>;
export const PromoCodeByCodeDocument = gql`
  query promoCodeByCode($code: String!, $storeId: ID!) {
    promoCodeByCode(code: $code, storeId: $storeId) {
      code
      percentageOff
      isArchived
      status
    }
  }
`;

/**
 * __usePromoCodeByCodeQuery__
 *
 * To run a query within a React component, call `usePromoCodeByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromoCodeByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromoCodeByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function usePromoCodeByCodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    PromoCodeByCodeQuery,
    PromoCodeByCodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PromoCodeByCodeQuery, PromoCodeByCodeQueryVariables>(
    PromoCodeByCodeDocument,
    options
  );
}
export function usePromoCodeByCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PromoCodeByCodeQuery,
    PromoCodeByCodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PromoCodeByCodeQuery,
    PromoCodeByCodeQueryVariables
  >(PromoCodeByCodeDocument, options);
}
export type PromoCodeByCodeQueryHookResult = ReturnType<
  typeof usePromoCodeByCodeQuery
>;
export type PromoCodeByCodeLazyQueryHookResult = ReturnType<
  typeof usePromoCodeByCodeLazyQuery
>;
export type PromoCodeByCodeQueryResult = Apollo.QueryResult<
  PromoCodeByCodeQuery,
  PromoCodeByCodeQueryVariables
>;
export const StoreStaticPageByHandleDocument = gql`
  query StoreStaticPageByHandle($input: StaticPageStoreByHandleInput) {
    storeStaticPageByHandle(input: $input) {
      id
      handle
      htmlTemplate
      locale
      name
      title
      translations {
        htmlTemplate
        locale
        title
      }
      handle
      id
    }
  }
`;

/**
 * __useStoreStaticPageByHandleQuery__
 *
 * To run a query within a React component, call `useStoreStaticPageByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreStaticPageByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreStaticPageByHandleQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStoreStaticPageByHandleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StoreStaticPageByHandleQuery,
    StoreStaticPageByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StoreStaticPageByHandleQuery,
    StoreStaticPageByHandleQueryVariables
  >(StoreStaticPageByHandleDocument, options);
}
export function useStoreStaticPageByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreStaticPageByHandleQuery,
    StoreStaticPageByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StoreStaticPageByHandleQuery,
    StoreStaticPageByHandleQueryVariables
  >(StoreStaticPageByHandleDocument, options);
}
export type StoreStaticPageByHandleQueryHookResult = ReturnType<
  typeof useStoreStaticPageByHandleQuery
>;
export type StoreStaticPageByHandleLazyQueryHookResult = ReturnType<
  typeof useStoreStaticPageByHandleLazyQuery
>;
export type StoreStaticPageByHandleQueryResult = Apollo.QueryResult<
  StoreStaticPageByHandleQuery,
  StoreStaticPageByHandleQueryVariables
>;
export const GetOrderByIdDocument = gql`
  query GetOrderById($storeId: ID!, $orderId: ID!) {
    order(orderId: $orderId, storeId: $storeId) {
      ...OrderInfo
    }
  }
  ${OrderInfoFragmentDoc}
`;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderByIdQuery,
    GetOrderByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(
    GetOrderByIdDocument,
    options
  );
}
export function useGetOrderByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderByIdQuery,
    GetOrderByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(
    GetOrderByIdDocument,
    options
  );
}
export type GetOrderByIdQueryHookResult = ReturnType<
  typeof useGetOrderByIdQuery
>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<
  typeof useGetOrderByIdLazyQuery
>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<
  GetOrderByIdQuery,
  GetOrderByIdQueryVariables
>;
export const GetOrderStatusDocument = gql`
  query GetOrderStatus($storeId: ID!, $orderId: ID!) {
    order(orderId: $orderId, storeId: $storeId) {
      id
      status
      orderSerial
    }
  }
`;

/**
 * __useGetOrderStatusQuery__
 *
 * To run a query within a React component, call `useGetOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderStatusQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderStatusQuery,
    GetOrderStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderStatusQuery, GetOrderStatusQueryVariables>(
    GetOrderStatusDocument,
    options
  );
}
export function useGetOrderStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderStatusQuery,
    GetOrderStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderStatusQuery, GetOrderStatusQueryVariables>(
    GetOrderStatusDocument,
    options
  );
}
export type GetOrderStatusQueryHookResult = ReturnType<
  typeof useGetOrderStatusQuery
>;
export type GetOrderStatusLazyQueryHookResult = ReturnType<
  typeof useGetOrderStatusLazyQuery
>;
export type GetOrderStatusQueryResult = Apollo.QueryResult<
  GetOrderStatusQuery,
  GetOrderStatusQueryVariables
>;
export const GetOrderErrorsDocument = gql`
  query GetOrderErrors($storeId: ID!, $orderId: ID!) {
    order(orderId: $orderId, storeId: $storeId) {
      id
      errors {
        ...CheckoutErrors
      }
    }
  }
  ${CheckoutErrorsFragmentDoc}
`;

/**
 * __useGetOrderErrorsQuery__
 *
 * To run a query within a React component, call `useGetOrderErrorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderErrorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderErrorsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderErrorsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderErrorsQuery,
    GetOrderErrorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderErrorsQuery, GetOrderErrorsQueryVariables>(
    GetOrderErrorsDocument,
    options
  );
}
export function useGetOrderErrorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderErrorsQuery,
    GetOrderErrorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderErrorsQuery, GetOrderErrorsQueryVariables>(
    GetOrderErrorsDocument,
    options
  );
}
export type GetOrderErrorsQueryHookResult = ReturnType<
  typeof useGetOrderErrorsQuery
>;
export type GetOrderErrorsLazyQueryHookResult = ReturnType<
  typeof useGetOrderErrorsLazyQuery
>;
export type GetOrderErrorsQueryResult = Apollo.QueryResult<
  GetOrderErrorsQuery,
  GetOrderErrorsQueryVariables
>;
export const GetStorePaymentMethodsDocument = gql`
  query GetStorePaymentMethods($storeId: ID!) {
    storePaymentMethods(storeId: $storeId) {
      id
      type
      enabled
    }
  }
`;

/**
 * __useGetStorePaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetStorePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorePaymentMethodsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useGetStorePaymentMethodsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStorePaymentMethodsQuery,
    GetStorePaymentMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetStorePaymentMethodsQuery,
    GetStorePaymentMethodsQueryVariables
  >(GetStorePaymentMethodsDocument, options);
}
export function useGetStorePaymentMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStorePaymentMethodsQuery,
    GetStorePaymentMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetStorePaymentMethodsQuery,
    GetStorePaymentMethodsQueryVariables
  >(GetStorePaymentMethodsDocument, options);
}
export type GetStorePaymentMethodsQueryHookResult = ReturnType<
  typeof useGetStorePaymentMethodsQuery
>;
export type GetStorePaymentMethodsLazyQueryHookResult = ReturnType<
  typeof useGetStorePaymentMethodsLazyQuery
>;
export type GetStorePaymentMethodsQueryResult = Apollo.QueryResult<
  GetStorePaymentMethodsQuery,
  GetStorePaymentMethodsQueryVariables
>;
export const GetStoreCheckoutPaymentMethodsDocument = gql`
  query GetStoreCheckoutPaymentMethods($storeId: ID!) {
    storeCheckoutPaymentMethods(storeId: $storeId)
  }
`;

/**
 * __useGetStoreCheckoutPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetStoreCheckoutPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreCheckoutPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreCheckoutPaymentMethodsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useGetStoreCheckoutPaymentMethodsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStoreCheckoutPaymentMethodsQuery,
    GetStoreCheckoutPaymentMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetStoreCheckoutPaymentMethodsQuery,
    GetStoreCheckoutPaymentMethodsQueryVariables
  >(GetStoreCheckoutPaymentMethodsDocument, options);
}
export function useGetStoreCheckoutPaymentMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStoreCheckoutPaymentMethodsQuery,
    GetStoreCheckoutPaymentMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetStoreCheckoutPaymentMethodsQuery,
    GetStoreCheckoutPaymentMethodsQueryVariables
  >(GetStoreCheckoutPaymentMethodsDocument, options);
}
export type GetStoreCheckoutPaymentMethodsQueryHookResult = ReturnType<
  typeof useGetStoreCheckoutPaymentMethodsQuery
>;
export type GetStoreCheckoutPaymentMethodsLazyQueryHookResult = ReturnType<
  typeof useGetStoreCheckoutPaymentMethodsLazyQuery
>;
export type GetStoreCheckoutPaymentMethodsQueryResult = Apollo.QueryResult<
  GetStoreCheckoutPaymentMethodsQuery,
  GetStoreCheckoutPaymentMethodsQueryVariables
>;
export const StoreCheckoutDocument = gql`
  query StoreCheckout($storeId: ID!) {
    store(id: $storeId) {
      id
      checkout {
        successMessage
      }
    }
  }
`;

/**
 * __useStoreCheckoutQuery__
 *
 * To run a query within a React component, call `useStoreCheckoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreCheckoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreCheckoutQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreCheckoutQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoreCheckoutQuery,
    StoreCheckoutQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StoreCheckoutQuery, StoreCheckoutQueryVariables>(
    StoreCheckoutDocument,
    options
  );
}
export function useStoreCheckoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoreCheckoutQuery,
    StoreCheckoutQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StoreCheckoutQuery, StoreCheckoutQueryVariables>(
    StoreCheckoutDocument,
    options
  );
}
export type StoreCheckoutQueryHookResult = ReturnType<
  typeof useStoreCheckoutQuery
>;
export type StoreCheckoutLazyQueryHookResult = ReturnType<
  typeof useStoreCheckoutLazyQuery
>;
export type StoreCheckoutQueryResult = Apollo.QueryResult<
  StoreCheckoutQuery,
  StoreCheckoutQueryVariables
>;
export const ListCustomerAddressesDocument = gql`
  query ListCustomerAddresses($customerId: ID!, $storeId: ID!) {
    customerAddresses(customerId: $customerId, storeId: $storeId) {
      ...AddressInfo
    }
  }
  ${AddressInfoFragmentDoc}
`;

/**
 * __useListCustomerAddressesQuery__
 *
 * To run a query within a React component, call `useListCustomerAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomerAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomerAddressesQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useListCustomerAddressesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListCustomerAddressesQuery,
    ListCustomerAddressesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ListCustomerAddressesQuery,
    ListCustomerAddressesQueryVariables
  >(ListCustomerAddressesDocument, options);
}
export function useListCustomerAddressesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListCustomerAddressesQuery,
    ListCustomerAddressesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListCustomerAddressesQuery,
    ListCustomerAddressesQueryVariables
  >(ListCustomerAddressesDocument, options);
}
export type ListCustomerAddressesQueryHookResult = ReturnType<
  typeof useListCustomerAddressesQuery
>;
export type ListCustomerAddressesLazyQueryHookResult = ReturnType<
  typeof useListCustomerAddressesLazyQuery
>;
export type ListCustomerAddressesQueryResult = Apollo.QueryResult<
  ListCustomerAddressesQuery,
  ListCustomerAddressesQueryVariables
>;
export const ListCustomerOrdersDocument = gql`
  query ListCustomerOrders($id: ID!, $connection: OrdersConnectionInput) {
    customerOrders(id: $id, connection: $connection) {
      id
      name
      email
      phone
      orders(connection: $connection) {
        totalCount
        nodes {
          ...UserOrderInfo
        }
      }
    }
  }
  ${UserOrderInfoFragmentDoc}
`;

/**
 * __useListCustomerOrdersQuery__
 *
 * To run a query within a React component, call `useListCustomerOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomerOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomerOrdersQuery({
 *   variables: {
 *      id: // value for 'id'
 *      connection: // value for 'connection'
 *   },
 * });
 */
export function useListCustomerOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListCustomerOrdersQuery,
    ListCustomerOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ListCustomerOrdersQuery,
    ListCustomerOrdersQueryVariables
  >(ListCustomerOrdersDocument, options);
}
export function useListCustomerOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListCustomerOrdersQuery,
    ListCustomerOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListCustomerOrdersQuery,
    ListCustomerOrdersQueryVariables
  >(ListCustomerOrdersDocument, options);
}
export type ListCustomerOrdersQueryHookResult = ReturnType<
  typeof useListCustomerOrdersQuery
>;
export type ListCustomerOrdersLazyQueryHookResult = ReturnType<
  typeof useListCustomerOrdersLazyQuery
>;
export type ListCustomerOrdersQueryResult = Apollo.QueryResult<
  ListCustomerOrdersQuery,
  ListCustomerOrdersQueryVariables
>;
export const CustomerDetailsDocument = gql`
  query CustomerDetails($customerId: ID!, $connection: OrdersConnectionInput) {
    customerOrders(id: $customerId, connection: $connection) {
      ...CustomerInfo
      orders(connection: $connection) {
        totalCount
        nodes {
          id
          orderSerial
          createdAt
          totalPrice {
            ...Money
          }
          paymentStatus
          fulfillmentStatus
        }
      }
      addresses {
        ...AddressInfo
      }
    }
  }
  ${CustomerInfoFragmentDoc}
  ${MoneyFragmentDoc}
  ${AddressInfoFragmentDoc}
`;

/**
 * __useCustomerDetailsQuery__
 *
 * To run a query within a React component, call `useCustomerDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerDetailsQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      connection: // value for 'connection'
 *   },
 * });
 */
export function useCustomerDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CustomerDetailsQuery,
    CustomerDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomerDetailsQuery, CustomerDetailsQueryVariables>(
    CustomerDetailsDocument,
    options
  );
}
export function useCustomerDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerDetailsQuery,
    CustomerDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerDetailsQuery,
    CustomerDetailsQueryVariables
  >(CustomerDetailsDocument, options);
}
export type CustomerDetailsQueryHookResult = ReturnType<
  typeof useCustomerDetailsQuery
>;
export type CustomerDetailsLazyQueryHookResult = ReturnType<
  typeof useCustomerDetailsLazyQuery
>;
export type CustomerDetailsQueryResult = Apollo.QueryResult<
  CustomerDetailsQuery,
  CustomerDetailsQueryVariables
>;
export const ListCustomerReviewsDocument = gql`
  query ListCustomerReviews($input: listCustomerReviewsInput!) {
    listCustomerReviews(input: $input) {
      id
      createdAt
      headline
      content
      rating
      showName
      status
      product {
        id
        title
        images {
          ...Image
        }
      }
    }
  }
  ${ImageFragmentDoc}
`;

/**
 * __useListCustomerReviewsQuery__
 *
 * To run a query within a React component, call `useListCustomerReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomerReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomerReviewsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListCustomerReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListCustomerReviewsQuery,
    ListCustomerReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ListCustomerReviewsQuery,
    ListCustomerReviewsQueryVariables
  >(ListCustomerReviewsDocument, options);
}
export function useListCustomerReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListCustomerReviewsQuery,
    ListCustomerReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListCustomerReviewsQuery,
    ListCustomerReviewsQueryVariables
  >(ListCustomerReviewsDocument, options);
}
export type ListCustomerReviewsQueryHookResult = ReturnType<
  typeof useListCustomerReviewsQuery
>;
export type ListCustomerReviewsLazyQueryHookResult = ReturnType<
  typeof useListCustomerReviewsLazyQuery
>;
export type ListCustomerReviewsQueryResult = Apollo.QueryResult<
  ListCustomerReviewsQuery,
  ListCustomerReviewsQueryVariables
>;
export const GetStoreRobotsTxtDocument = gql`
  query GetStoreRobotsTxt($storeId: ID!) {
    getStoreRobotsTxt(storeId: $storeId) {
      content
      id
    }
  }
`;

/**
 * __useGetStoreRobotsTxtQuery__
 *
 * To run a query within a React component, call `useGetStoreRobotsTxtQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreRobotsTxtQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreRobotsTxtQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useGetStoreRobotsTxtQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStoreRobotsTxtQuery,
    GetStoreRobotsTxtQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetStoreRobotsTxtQuery,
    GetStoreRobotsTxtQueryVariables
  >(GetStoreRobotsTxtDocument, options);
}
export function useGetStoreRobotsTxtLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStoreRobotsTxtQuery,
    GetStoreRobotsTxtQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetStoreRobotsTxtQuery,
    GetStoreRobotsTxtQueryVariables
  >(GetStoreRobotsTxtDocument, options);
}
export type GetStoreRobotsTxtQueryHookResult = ReturnType<
  typeof useGetStoreRobotsTxtQuery
>;
export type GetStoreRobotsTxtLazyQueryHookResult = ReturnType<
  typeof useGetStoreRobotsTxtLazyQuery
>;
export type GetStoreRobotsTxtQueryResult = Apollo.QueryResult<
  GetStoreRobotsTxtQuery,
  GetStoreRobotsTxtQueryVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($storeId: ID!, $input: customerUserInput!) {
    signup(storeId: $storeId, input: $input)
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword(
    $storeId: ID!
    $storeUrl: String
    $email: String
    $locale: String
  ) {
    forgetCustomerPassword(
      storeId: $storeId
      storeUrl: $storeUrl
      email: $email
      locale: $locale
    )
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      storeUrl: // value for 'storeUrl'
 *      email: // value for 'email'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($storeId: ID!, $token: String, $newPassword: String) {
    resetCustomerPassword(
      storeId: $storeId
      token: $token
      newPassword: $newPassword
    )
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      name
      email
      phone
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
  query Login($storeId: String!, $phoneOrEmail: String!, $password: String!) {
    customerLoginV2(
      storeId: $storeId
      phoneOrEmail: $phoneOrEmail
      password: $password
    )
  }
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      phoneOrEmail: // value for 'phoneOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  );
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  );
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<
  LoginQuery,
  LoginQueryVariables
>;
export const StorePageByHandleDocument = gql`
  query StorePageByHandle($handle: String!, $storeId: ID!) {
    storePageByHandle(handle: $handle, storeId: $storeId) {
      id
      name
      handle
      status
      locale
      pageType
      seo {
        title
        description
      }
      translations {
        name
      }
      sections {
        ...StorePageSections
      }
    }
  }
  ${StorePageSectionsFragmentDoc}
`;

/**
 * __useStorePageByHandleQuery__
 *
 * To run a query within a React component, call `useStorePageByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useStorePageByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStorePageByHandleQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStorePageByHandleQuery(
  baseOptions: Apollo.QueryHookOptions<
    StorePageByHandleQuery,
    StorePageByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StorePageByHandleQuery,
    StorePageByHandleQueryVariables
  >(StorePageByHandleDocument, options);
}
export function useStorePageByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StorePageByHandleQuery,
    StorePageByHandleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StorePageByHandleQuery,
    StorePageByHandleQueryVariables
  >(StorePageByHandleDocument, options);
}
export type StorePageByHandleQueryHookResult = ReturnType<
  typeof useStorePageByHandleQuery
>;
export type StorePageByHandleLazyQueryHookResult = ReturnType<
  typeof useStorePageByHandleLazyQuery
>;
export type StorePageByHandleQueryResult = Apollo.QueryResult<
  StorePageByHandleQuery,
  StorePageByHandleQueryVariables
>;
