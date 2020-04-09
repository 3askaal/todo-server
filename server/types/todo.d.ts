import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};









export type TAdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum TCacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type TMutation = {
   __typename?: 'Mutation';
  createTodo: TTodo;
  updateTodo: TTodo;
  deleteTodo: TTodo;
  checkAll: Scalars['Boolean'];
  uncheckAll: Scalars['Boolean'];
  deleteAll: Scalars['Boolean'];
};


export type TMutationCreateTodoArgs = {
  data?: Maybe<TTodoInput>;
};


export type TMutationUpdateTodoArgs = {
  _id: Scalars['ID'];
  data?: Maybe<TTodoInput>;
};


export type TMutationDeleteTodoArgs = {
  _id: Scalars['ID'];
};

export type TQuery = {
   __typename?: 'Query';
  Todos: Array<Maybe<TTodo>>;
};

export type TTodo = {
   __typename?: 'Todo';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type TTodoInput = {
  content?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type TResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Todo: ResolverTypeWrapper<TTodo>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  TodoInput: TTodoInput,
  CacheControlScope: TCacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  AdditionalEntityFields: TAdditionalEntityFields,
};

/** Mapping between all available schema types and the resolvers parents */
export type TResolversParentTypes = {
  Query: {},
  Todo: TTodo,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Mutation: {},
  TodoInput: TTodoInput,
  CacheControlScope: TCacheControlScope,
  Upload: Scalars['Upload'],
  AdditionalEntityFields: TAdditionalEntityFields,
};

export type TUnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<TAdditionalEntityFields>>>; };

export type TUnionDirectiveResolver<Result, Parent, ContextType = any, Args = TUnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TAbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<TAdditionalEntityFields>>>; };

export type TAbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = TAbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TEntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<TAdditionalEntityFields>>>; };

export type TEntityDirectiveResolver<Result, Parent, ContextType = any, Args = TEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type TColumnDirectiveResolver<Result, Parent, ContextType = any, Args = TColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TIdDirectiveArgs = {  };

export type TIdDirectiveResolver<Result, Parent, ContextType = any, Args = TIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TLinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type TLinkDirectiveResolver<Result, Parent, ContextType = any, Args = TLinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TEmbeddedDirectiveArgs = {  };

export type TEmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = TEmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TMapDirectiveArgs = {   path: Scalars['String']; };

export type TMapDirectiveResolver<Result, Parent, ContextType = any, Args = TMapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TMutationResolvers<ContextType = any, ParentType extends TResolversParentTypes['Mutation'] = TResolversParentTypes['Mutation']> = {
  createTodo?: Resolver<TResolversTypes['Todo'], ParentType, ContextType, RequireFields<TMutationCreateTodoArgs, never>>,
  updateTodo?: Resolver<TResolversTypes['Todo'], ParentType, ContextType, RequireFields<TMutationUpdateTodoArgs, '_id'>>,
  deleteTodo?: Resolver<TResolversTypes['Todo'], ParentType, ContextType, RequireFields<TMutationDeleteTodoArgs, '_id'>>,
  checkAll?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>,
  uncheckAll?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>,
  deleteAll?: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>,
};

export type TQueryResolvers<ContextType = any, ParentType extends TResolversParentTypes['Query'] = TResolversParentTypes['Query']> = {
  Todos?: Resolver<Array<Maybe<TResolversTypes['Todo']>>, ParentType, ContextType>,
};

export type TTodoResolvers<ContextType = any, ParentType extends TResolversParentTypes['Todo'] = TResolversParentTypes['Todo']> = {
  _id?: Resolver<TResolversTypes['ID'], ParentType, ContextType>,
  content?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>,
  completed?: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>,
  created?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>,
  updated?: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface TUploadScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type TResolvers<ContextType = any> = {
  Mutation?: TMutationResolvers<ContextType>,
  Query?: TQueryResolvers<ContextType>,
  Todo?: TTodoResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


export type TDirectiveResolvers<ContextType = any> = {
  union?: TUnionDirectiveResolver<any, any, ContextType>,
  abstractEntity?: TAbstractEntityDirectiveResolver<any, any, ContextType>,
  entity?: TEntityDirectiveResolver<any, any, ContextType>,
  column?: TColumnDirectiveResolver<any, any, ContextType>,
  id?: TIdDirectiveResolver<any, any, ContextType>,
  link?: TLinkDirectiveResolver<any, any, ContextType>,
  embedded?: TEmbeddedDirectiveResolver<any, any, ContextType>,
  map?: TMapDirectiveResolver<any, any, ContextType>,
};


import { ObjectID } from 'mongodb';