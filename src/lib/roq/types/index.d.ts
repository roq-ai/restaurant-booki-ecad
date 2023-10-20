/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model menu
 *
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>;
/**
 * Model reservation
 *
 */
export type reservation = $Result.DefaultSelection<Prisma.$reservationPayload>;
/**
 * Model restaurant
 *
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>;
/**
 * Model table
 *
 */
export type table = $Result.DefaultSelection<Prisma.$tablePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Menus
   * const menus = await prisma.menu.findMany()
   * ```
   */
  get menu(): Prisma.menuDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **reservation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reservations
   * const reservations = await prisma.reservation.findMany()
   * ```
   */
  get reservation(): Prisma.reservationDelegate<ExtArgs>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **table** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tables
   * const tables = await prisma.table.findMany()
   * ```
   */
  get table(): Prisma.tableDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    employee: 'employee';
    menu: 'menu';
    reservation: 'reservation';
    restaurant: 'restaurant';
    table: 'table';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'employee' | 'menu' | 'reservation' | 'restaurant' | 'table' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>;
        fields: Prisma.menuFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[];
          };
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$menuPayload>;
          };
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMenu>;
          };
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MenuGroupByOutputType>[];
          };
          count: {
            args: Prisma.menuCountArgs<ExtArgs>;
            result: $Utils.Optional<MenuCountAggregateOutputType> | number;
          };
        };
      };
      reservation: {
        payload: Prisma.$reservationPayload<ExtArgs>;
        fields: Prisma.reservationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reservationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reservationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          findFirst: {
            args: Prisma.reservationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reservationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          findMany: {
            args: Prisma.reservationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>[];
          };
          create: {
            args: Prisma.reservationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          createMany: {
            args: Prisma.reservationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reservationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          update: {
            args: Prisma.reservationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          deleteMany: {
            args: Prisma.reservationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reservationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reservationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>;
          };
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReservation>;
          };
          groupBy: {
            args: Prisma.reservationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReservationGroupByOutputType>[];
          };
          count: {
            args: Prisma.reservationCountArgs<ExtArgs>;
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number;
          };
        };
      };
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>;
        fields: Prisma.restaurantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[];
          };
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRestaurant>;
          };
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RestaurantGroupByOutputType>[];
          };
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>;
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number;
          };
        };
      };
      table: {
        payload: Prisma.$tablePayload<ExtArgs>;
        fields: Prisma.tableFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.tableFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.tableFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          findFirst: {
            args: Prisma.tableFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.tableFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          findMany: {
            args: Prisma.tableFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[];
          };
          create: {
            args: Prisma.tableCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          createMany: {
            args: Prisma.tableCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.tableDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          update: {
            args: Prisma.tableUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          deleteMany: {
            args: Prisma.tableDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.tableUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.tableUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tablePayload>;
          };
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTable>;
          };
          groupBy: {
            args: Prisma.tableGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TableGroupByOutputType>[];
          };
          count: {
            args: Prisma.tableCountArgs<ExtArgs>;
            result: $Utils.Optional<TableCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    employee: number;
    menu: number;
    table: number;
  };

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | RestaurantCountOutputTypeCountEmployeeArgs;
    menu?: boolean | RestaurantCountOutputTypeCountMenuArgs;
    table?: boolean | RestaurantCountOutputTypeCountTableArgs;
  };

  // Custom InputTypes

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the RestaurantCountOutputType
       */
      select?: RestaurantCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenuArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: menuWhereInput;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountTableArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: tableWhereInput;
  };

  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    reservation: number;
  };

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | TableCountOutputTypeCountReservationArgs;
  };

  // Custom InputTypes

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountReservationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reservationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employee: number;
    reservation: number;
    restaurant: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
    reservation?: boolean | UserCountOutputTypeCountReservationArgs;
    restaurant?: boolean | UserCountOutputTypeCountRestaurantArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reservationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestaurantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: restaurantWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    restaurant_id: string | null;
    position: string | null;
    salary: number | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    restaurant_id: string | null;
    position: string | null;
    salary: number | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    user_id: number;
    restaurant_id: number;
    position: number;
    salary: number;
    start_date: number;
    end_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    user_id: string;
    restaurant_id: string;
    position: string;
    salary: number;
    start_date: Date;
    end_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        restaurant_id?: boolean;
        position?: boolean;
        salary?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    position?: boolean;
    salary?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      restaurant: Prisma.$restaurantPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        restaurant_id: string;
        position: string;
        salary: number;
        start_date: Date;
        end_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurantDefaultArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly restaurant_id: FieldRef<'employee', 'String'>;
    readonly position: FieldRef<'employee', 'String'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly start_date: FieldRef<'employee', 'DateTime'>;
    readonly end_date: FieldRef<'employee', 'DateTime'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null;
    _avg: MenuAvgAggregateOutputType | null;
    _sum: MenuSumAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
  };

  export type MenuAvgAggregateOutputType = {
    price: number | null;
  };

  export type MenuSumAggregateOutputType = {
    price: number | null;
  };

  export type MenuMinAggregateOutputType = {
    id: string | null;
    restaurant_id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MenuMaxAggregateOutputType = {
    id: string | null;
    restaurant_id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MenuCountAggregateOutputType = {
    id: number;
    restaurant_id: number;
    name: number;
    description: number;
    price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MenuAvgAggregateInputType = {
    price?: true;
  };

  export type MenuSumAggregateInputType = {
    price?: true;
  };

  export type MenuMinAggregateInputType = {
    id?: true;
    restaurant_id?: true;
    name?: true;
    description?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MenuMaxAggregateInputType = {
    id?: true;
    restaurant_id?: true;
    name?: true;
    description?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MenuCountAggregateInputType = {
    id?: true;
    restaurant_id?: true;
    name?: true;
    description?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned menus
     **/
    _count?: true | MenuCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MenuAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MenuSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MenuMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MenuMaxAggregateInputType;
  };

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
    [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>;
  };

  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput;
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[];
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum;
    having?: menuScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuCountAggregateInputType | true;
    _avg?: MenuAvgAggregateInputType;
    _sum?: MenuSumAggregateInputType;
    _min?: MenuMinAggregateInputType;
    _max?: MenuMaxAggregateInputType;
  };

  export type MenuGroupByOutputType = {
    id: string;
    restaurant_id: string;
    name: string;
    description: string | null;
    price: number;
    created_at: Date;
    updated_at: Date;
    _count: MenuCountAggregateOutputType | null;
    _avg: MenuAvgAggregateOutputType | null;
    _sum: MenuSumAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
  };

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MenuGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
          : GetScalarType<T[P], MenuGroupByOutputType[P]>;
      }
    >
  >;

  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      restaurant_id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['menu']
  >;

  export type menuSelectScalar = {
    id?: boolean;
    restaurant_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
  };

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'menu';
    objects: {
      restaurant: Prisma.$restaurantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        restaurant_id: string;
        name: string;
        description: string | null;
        price: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['menu']
    >;
    composites: {};
  };

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<
    Prisma.$menuPayload,
    S
  >;

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    menuFindManyArgs,
    'select' | 'include'
  > & {
    select?: MenuCountAggregateInputType | true;
  };

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu']; meta: { name: 'menu' } };
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends menuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends menuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     *
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends menuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     *
     **/
    create<T extends menuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, menuCreateArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Menus.
     *     @param {menuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends menuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     *
     **/
    delete<T extends menuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, menuDeleteArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends menuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, menuUpdateArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends menuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends menuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     **/
    upsert<T extends menuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, menuUpsertArgs<ExtArgs>>,
    ): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
     **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MenuAggregateArgs>(
      args: Subset<T, MenuAggregateArgs>,
    ): Prisma.PrismaPromise<GetMenuAggregateType<T>>;

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the menu model
     */
    readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurantDefaultArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<'menu', 'String'>;
    readonly restaurant_id: FieldRef<'menu', 'String'>;
    readonly name: FieldRef<'menu', 'String'>;
    readonly description: FieldRef<'menu', 'String'>;
    readonly price: FieldRef<'menu', 'Int'>;
    readonly created_at: FieldRef<'menu', 'DateTime'>;
    readonly updated_at: FieldRef<'menu', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput;
  };

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput;
  };

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[];
  };

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[];
  };

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[];
  };

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>;
  };

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>;
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput;
  };

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>;
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput;
  };

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput;
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>;
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>;
  };

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput;
  };

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput;
  };

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
  };

  /**
   * Model reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
  };

  export type ReservationAvgAggregateOutputType = {
    number_of_guests: number | null;
  };

  export type ReservationSumAggregateOutputType = {
    number_of_guests: number | null;
  };

  export type ReservationMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    table_id: string | null;
    reservation_time: Date | null;
    number_of_guests: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReservationMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    table_id: string | null;
    reservation_time: Date | null;
    number_of_guests: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReservationCountAggregateOutputType = {
    id: number;
    user_id: number;
    table_id: number;
    reservation_time: number;
    number_of_guests: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReservationAvgAggregateInputType = {
    number_of_guests?: true;
  };

  export type ReservationSumAggregateInputType = {
    number_of_guests?: true;
  };

  export type ReservationMinAggregateInputType = {
    id?: true;
    user_id?: true;
    table_id?: true;
    reservation_time?: true;
    number_of_guests?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReservationMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    table_id?: true;
    reservation_time?: true;
    number_of_guests?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReservationCountAggregateInputType = {
    id?: true;
    user_id?: true;
    table_id?: true;
    reservation_time?: true;
    number_of_guests?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservation to aggregate.
     */
    where?: reservationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reservationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reservations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reservations
     **/
    _count?: true | ReservationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReservationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReservationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReservationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReservationMaxAggregateInputType;
  };

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
    [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>;
  };

  export type reservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput;
    orderBy?: reservationOrderByWithAggregationInput | reservationOrderByWithAggregationInput[];
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum;
    having?: reservationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservationCountAggregateInputType | true;
    _avg?: ReservationAvgAggregateInputType;
    _sum?: ReservationSumAggregateInputType;
    _min?: ReservationMinAggregateInputType;
    _max?: ReservationMaxAggregateInputType;
  };

  export type ReservationGroupByOutputType = {
    id: string;
    user_id: string;
    table_id: string;
    reservation_time: Date;
    number_of_guests: number;
    created_at: Date;
    updated_at: Date;
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
  };

  type GetReservationGroupByPayload<T extends reservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReservationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
          : GetScalarType<T[P], ReservationGroupByOutputType[P]>;
      }
    >
  >;

  export type reservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        table_id?: boolean;
        reservation_time?: boolean;
        number_of_guests?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        table?: boolean | tableDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['reservation']
    >;

  export type reservationSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    table_id?: boolean;
    reservation_time?: boolean;
    number_of_guests?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | tableDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'reservation';
    objects: {
      table: Prisma.$tablePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        table_id: string;
        reservation_time: Date;
        number_of_guests: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['reservation']
    >;
    composites: {};
  };

  type reservationGetPayload<S extends boolean | null | undefined | reservationDefaultArgs> = $Result.GetResult<
    Prisma.$reservationPayload,
    S
  >;

  type reservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reservationFindManyArgs,
    'select' | 'include'
  > & {
    select?: ReservationCountAggregateInputType | true;
  };

  export interface reservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservation']; meta: { name: 'reservation' } };
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {reservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reservationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reservationFindUniqueArgs<ExtArgs>>,
    ): Prisma__reservationClient<
      $Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Reservation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reservationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reservationClient<
      $Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reservationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindFirstArgs<ExtArgs>>,
    ): Prisma__reservationClient<
      $Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reservationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reservationClient<
      $Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     *
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reservationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Reservation.
     * @param {reservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     *
     **/
    create<T extends reservationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reservationCreateArgs<ExtArgs>>,
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reservations.
     *     @param {reservationCreateManyArgs} args - Arguments to create many Reservations.
     *     @example
     *     // Create many Reservations
     *     const reservation = await prisma.reservation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reservationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Reservation.
     * @param {reservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     *
     **/
    delete<T extends reservationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reservationDeleteArgs<ExtArgs>>,
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Reservation.
     * @param {reservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reservationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpdateArgs<ExtArgs>>,
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reservations.
     * @param {reservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reservationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reservationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Reservation.
     * @param {reservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     **/
    upsert<T extends reservationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpsertArgs<ExtArgs>>,
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
     **/
    count<T extends reservationCountArgs>(
      args?: Subset<T, reservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReservationAggregateArgs>(
      args: Subset<T, ReservationAggregateArgs>,
    ): Prisma.PrismaPromise<GetReservationAggregateType<T>>;

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reservationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservationGroupByArgs['orderBy'] }
        : { orderBy?: reservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reservationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reservation model
     */
    readonly fields: reservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    table<T extends tableDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, tableDefaultArgs<ExtArgs>>,
    ): Prisma__tableClient<
      $Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the reservation model
   */
  interface reservationFieldRefs {
    readonly id: FieldRef<'reservation', 'String'>;
    readonly user_id: FieldRef<'reservation', 'String'>;
    readonly table_id: FieldRef<'reservation', 'String'>;
    readonly reservation_time: FieldRef<'reservation', 'DateTime'>;
    readonly number_of_guests: FieldRef<'reservation', 'Int'>;
    readonly created_at: FieldRef<'reservation', 'DateTime'>;
    readonly updated_at: FieldRef<'reservation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * reservation findUnique
   */
  export type reservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput;
  };

  /**
   * reservation findUniqueOrThrow
   */
  export type reservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput;
  };

  /**
   * reservation findFirst
   */
  export type reservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reservations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[];
  };

  /**
   * reservation findFirstOrThrow
   */
  export type reservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reservations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[];
  };

  /**
   * reservation findMany
   */
  export type reservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reservations.
     */
    cursor?: reservationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reservations.
     */
    skip?: number;
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[];
  };

  /**
   * reservation create
   */
  export type reservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * The data needed to create a reservation.
     */
    data: XOR<reservationCreateInput, reservationUncheckedCreateInput>;
  };

  /**
   * reservation createMany
   */
  export type reservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservations.
     */
    data: reservationCreateManyInput | reservationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * reservation update
   */
  export type reservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * The data needed to update a reservation.
     */
    data: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>;
    /**
     * Choose, which reservation to update.
     */
    where: reservationWhereUniqueInput;
  };

  /**
   * reservation updateMany
   */
  export type reservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyInput>;
    /**
     * Filter which reservations to update
     */
    where?: reservationWhereInput;
  };

  /**
   * reservation upsert
   */
  export type reservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * The filter to search for the reservation to update in case it exists.
     */
    where: reservationWhereUniqueInput;
    /**
     * In case the reservation found by the `where` argument doesn't exist, create a new reservation with this data.
     */
    create: XOR<reservationCreateInput, reservationUncheckedCreateInput>;
    /**
     * In case the reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>;
  };

  /**
   * reservation delete
   */
  export type reservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    /**
     * Filter which reservation to delete.
     */
    where: reservationWhereUniqueInput;
  };

  /**
   * reservation deleteMany
   */
  export type reservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to delete
     */
    where?: reservationWhereInput;
  };

  /**
   * reservation without action
   */
  export type reservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
  };

  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  export type RestaurantMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type RestaurantMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type RestaurantCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type RestaurantMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type RestaurantMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type RestaurantCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned restaurants
     **/
    _count?: true | RestaurantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RestaurantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RestaurantMaxAggregateInputType;
  };

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>;
  };

  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput;
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[];
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum;
    having?: restaurantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantCountAggregateInputType | true;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
  };

  export type RestaurantGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RestaurantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
          : GetScalarType<T[P], RestaurantGroupByOutputType[P]>;
      }
    >
  >;

  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        employee?: boolean | restaurant$employeeArgs<ExtArgs>;
        menu?: boolean | restaurant$menuArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        table?: boolean | restaurant$tableArgs<ExtArgs>;
        _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['restaurant']
    >;

  export type restaurantSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | restaurant$employeeArgs<ExtArgs>;
    menu?: boolean | restaurant$menuArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    table?: boolean | restaurant$tableArgs<ExtArgs>;
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'restaurant';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
      menu: Prisma.$menuPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      table: Prisma.$tablePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['restaurant']
    >;
    composites: {};
  };

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<
    Prisma.$restaurantPayload,
    S
  >;

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    restaurantFindManyArgs,
    'select' | 'include'
  > & {
    select?: RestaurantCountAggregateInputType | true;
  };

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant']; meta: { name: 'restaurant' } };
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends restaurantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Restaurant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends restaurantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     *
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends restaurantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     *
     **/
    create<T extends restaurantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Restaurants.
     *     @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurant = await prisma.restaurant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends restaurantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     *
     **/
    delete<T extends restaurantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends restaurantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends restaurantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends restaurantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     **/
    upsert<T extends restaurantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
     **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RestaurantAggregateArgs>(
      args: Subset<T, RestaurantAggregateArgs>,
    ): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>;

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the restaurant model
     */
    readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends restaurant$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurant$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    menu<T extends restaurant$menuArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurant$menuArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    table<T extends restaurant$tableArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurant$tableArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly id: FieldRef<'restaurant', 'String'>;
    readonly description: FieldRef<'restaurant', 'String'>;
    readonly address: FieldRef<'restaurant', 'String'>;
    readonly city: FieldRef<'restaurant', 'String'>;
    readonly state: FieldRef<'restaurant', 'String'>;
    readonly zip_code: FieldRef<'restaurant', 'String'>;
    readonly name: FieldRef<'restaurant', 'String'>;
    readonly created_at: FieldRef<'restaurant', 'DateTime'>;
    readonly updated_at: FieldRef<'restaurant', 'DateTime'>;
    readonly user_id: FieldRef<'restaurant', 'String'>;
    readonly tenant_id: FieldRef<'restaurant', 'String'>;
  }

  // Custom InputTypes

  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The data needed to create a restaurant.
     */
    data: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>;
  };

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>;
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>;
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput;
  };

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput;
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>;
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>;
  };

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput;
  };

  /**
   * restaurant.employee
   */
  export type restaurant$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * restaurant.menu
   */
  export type restaurant$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude<ExtArgs> | null;
    where?: menuWhereInput;
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[];
    cursor?: menuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[];
  };

  /**
   * restaurant.table
   */
  export type restaurant$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    where?: tableWhereInput;
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[];
    cursor?: tableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
  };

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
  };

  /**
   * Model table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null;
    _avg: TableAvgAggregateOutputType | null;
    _sum: TableSumAggregateOutputType | null;
    _min: TableMinAggregateOutputType | null;
    _max: TableMaxAggregateOutputType | null;
  };

  export type TableAvgAggregateOutputType = {
    table_number: number | null;
    capacity: number | null;
  };

  export type TableSumAggregateOutputType = {
    table_number: number | null;
    capacity: number | null;
  };

  export type TableMinAggregateOutputType = {
    id: string | null;
    table_number: number | null;
    capacity: number | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TableMaxAggregateOutputType = {
    id: string | null;
    table_number: number | null;
    capacity: number | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TableCountAggregateOutputType = {
    id: number;
    table_number: number;
    capacity: number;
    restaurant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TableAvgAggregateInputType = {
    table_number?: true;
    capacity?: true;
  };

  export type TableSumAggregateInputType = {
    table_number?: true;
    capacity?: true;
  };

  export type TableMinAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TableMaxAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TableCountAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table to aggregate.
     */
    where?: tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tables
     **/
    _count?: true | TableCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TableAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TableSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TableMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TableMaxAggregateInputType;
  };

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
    [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>;
  };

  export type tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tableWhereInput;
    orderBy?: tableOrderByWithAggregationInput | tableOrderByWithAggregationInput[];
    by: TableScalarFieldEnum[] | TableScalarFieldEnum;
    having?: tableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TableCountAggregateInputType | true;
    _avg?: TableAvgAggregateInputType;
    _sum?: TableSumAggregateInputType;
    _min?: TableMinAggregateInputType;
    _max?: TableMaxAggregateInputType;
  };

  export type TableGroupByOutputType = {
    id: string;
    table_number: number;
    capacity: number;
    restaurant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TableCountAggregateOutputType | null;
    _avg: TableAvgAggregateOutputType | null;
    _sum: TableSumAggregateOutputType | null;
    _min: TableMinAggregateOutputType | null;
    _max: TableMaxAggregateOutputType | null;
  };

  type GetTableGroupByPayload<T extends tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TableGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TableGroupByOutputType[P]>
          : GetScalarType<T[P], TableGroupByOutputType[P]>;
      }
    >
  >;

  export type tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      table_number?: boolean;
      capacity?: boolean;
      restaurant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      reservation?: boolean | table$reservationArgs<ExtArgs>;
      restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
      _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['table']
  >;

  export type tableSelectScalar = {
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    restaurant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | table$reservationArgs<ExtArgs>;
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'table';
    objects: {
      reservation: Prisma.$reservationPayload<ExtArgs>[];
      restaurant: Prisma.$restaurantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        table_number: number;
        capacity: number;
        restaurant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['table']
    >;
    composites: {};
  };

  type tableGetPayload<S extends boolean | null | undefined | tableDefaultArgs> = $Result.GetResult<
    Prisma.$tablePayload,
    S
  >;

  type tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    tableFindManyArgs,
    'select' | 'include'
  > & {
    select?: TableCountAggregateInputType | true;
  };

  export interface tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['table']; meta: { name: 'table' } };
    /**
     * Find zero or one Table that matches the filter.
     * @param {tableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends tableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tableFindUniqueArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Table that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {tableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends tableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tableFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends tableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tableFindFirstArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends tableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tableFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     *
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends tableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tableFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Table.
     * @param {tableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     *
     **/
    create<T extends tableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tableCreateArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tables.
     *     @param {tableCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const table = await prisma.table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends tableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tableCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Table.
     * @param {tableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     *
     **/
    delete<T extends tableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tableDeleteArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Table.
     * @param {tableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends tableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tableUpdateArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tables.
     * @param {tableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends tableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tableDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends tableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tableUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Table.
     * @param {tableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     **/
    upsert<T extends tableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tableUpsertArgs<ExtArgs>>,
    ): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
     **/
    count<T extends tableCountArgs>(
      args?: Subset<T, tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TableAggregateArgs>(
      args: Subset<T, TableAggregateArgs>,
    ): Prisma.PrismaPromise<GetTableAggregateType<T>>;

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends tableGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tableGroupByArgs['orderBy'] }
        : { orderBy?: tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, tableGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the table model
     */
    readonly fields: tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tableClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reservation<T extends table$reservationArgs<ExtArgs> = {}>(
      args?: Subset<T, table$reservationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurantDefaultArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the table model
   */
  interface tableFieldRefs {
    readonly id: FieldRef<'table', 'String'>;
    readonly table_number: FieldRef<'table', 'Int'>;
    readonly capacity: FieldRef<'table', 'Int'>;
    readonly restaurant_id: FieldRef<'table', 'String'>;
    readonly created_at: FieldRef<'table', 'DateTime'>;
    readonly updated_at: FieldRef<'table', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * table findUnique
   */
  export type tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput;
  };

  /**
   * table findUniqueOrThrow
   */
  export type tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput;
  };

  /**
   * table findFirst
   */
  export type tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
  };

  /**
   * table findFirstOrThrow
   */
  export type tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
  };

  /**
   * table findMany
   */
  export type tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter, which tables to fetch.
     */
    where?: tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tables.
     */
    cursor?: tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tables.
     */
    skip?: number;
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
  };

  /**
   * table create
   */
  export type tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * The data needed to create a table.
     */
    data: XOR<tableCreateInput, tableUncheckedCreateInput>;
  };

  /**
   * table createMany
   */
  export type tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tableCreateManyInput | tableCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * table update
   */
  export type tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * The data needed to update a table.
     */
    data: XOR<tableUpdateInput, tableUncheckedUpdateInput>;
    /**
     * Choose, which table to update.
     */
    where: tableWhereUniqueInput;
  };

  /**
   * table updateMany
   */
  export type tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyInput>;
    /**
     * Filter which tables to update
     */
    where?: tableWhereInput;
  };

  /**
   * table upsert
   */
  export type tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * The filter to search for the table to update in case it exists.
     */
    where: tableWhereUniqueInput;
    /**
     * In case the table found by the `where` argument doesn't exist, create a new table with this data.
     */
    create: XOR<tableCreateInput, tableUncheckedCreateInput>;
    /**
     * In case the table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tableUpdateInput, tableUncheckedUpdateInput>;
  };

  /**
   * table delete
   */
  export type tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
    /**
     * Filter which table to delete.
     */
    where: tableWhereUniqueInput;
  };

  /**
   * table deleteMany
   */
  export type tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tableWhereInput;
  };

  /**
   * table.reservation
   */
  export type table$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    where?: reservationWhereInput;
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    cursor?: reservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[];
  };

  /**
   * table without action
   */
  export type tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tableInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      reservation?: boolean | user$reservationArgs<ExtArgs>;
      restaurant?: boolean | user$restaurantArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | user$employeeArgs<ExtArgs>;
    reservation?: boolean | user$reservationArgs<ExtArgs>;
    restaurant?: boolean | user$restaurantArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
      reservation: Prisma.$reservationPayload<ExtArgs>[];
      restaurant: Prisma.$restaurantPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    reservation<T extends user$reservationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reservationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    restaurant<T extends user$restaurantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$restaurantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.reservation
   */
  export type user$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reservationInclude<ExtArgs> | null;
    where?: reservationWhereInput;
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[];
    cursor?: reservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[];
  };

  /**
   * user.restaurant
   */
  export type user$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    where?: restaurantWhereInput;
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    cursor?: restaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    restaurant_id: 'restaurant_id';
    position: 'position';
    salary: 'salary';
    start_date: 'start_date';
    end_date: 'end_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const MenuScalarFieldEnum: {
    id: 'id';
    restaurant_id: 'restaurant_id';
    name: 'name';
    description: 'description';
    price: 'price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum];

  export const ReservationScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    table_id: 'table_id';
    reservation_time: 'reservation_time';
    number_of_guests: 'number_of_guests';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum];

  export const RestaurantScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum];

  export const TableScalarFieldEnum: {
    id: 'id';
    table_number: 'table_number';
    capacity: 'capacity';
    restaurant_id: 'restaurant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    restaurant_id?: UuidFilter<'employee'> | string;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    restaurant?: restaurantOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      user_id?: UuidFilter<'employee'> | string;
      restaurant_id?: UuidFilter<'employee'> | string;
      position?: StringFilter<'employee'> | string;
      salary?: IntFilter<'employee'> | number;
      start_date?: DateTimeFilter<'employee'> | Date | string;
      end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    restaurant_id?: UuidWithAggregatesFilter<'employee'> | string;
    position?: StringWithAggregatesFilter<'employee'> | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    start_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[];
    OR?: menuWhereInput[];
    NOT?: menuWhereInput | menuWhereInput[];
    id?: UuidFilter<'menu'> | string;
    restaurant_id?: UuidFilter<'menu'> | string;
    name?: StringFilter<'menu'> | string;
    description?: StringNullableFilter<'menu'> | string | null;
    price?: IntFilter<'menu'> | number;
    created_at?: DateTimeFilter<'menu'> | Date | string;
    updated_at?: DateTimeFilter<'menu'> | Date | string;
    restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
  };

  export type menuOrderByWithRelationInput = {
    id?: SortOrder;
    restaurant_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    restaurant?: restaurantOrderByWithRelationInput;
  };

  export type menuWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: menuWhereInput | menuWhereInput[];
      OR?: menuWhereInput[];
      NOT?: menuWhereInput | menuWhereInput[];
      restaurant_id?: UuidFilter<'menu'> | string;
      name?: StringFilter<'menu'> | string;
      description?: StringNullableFilter<'menu'> | string | null;
      price?: IntFilter<'menu'> | number;
      created_at?: DateTimeFilter<'menu'> | Date | string;
      updated_at?: DateTimeFilter<'menu'> | Date | string;
      restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
    },
    'id'
  >;

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder;
    restaurant_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: menuCountOrderByAggregateInput;
    _avg?: menuAvgOrderByAggregateInput;
    _max?: menuMaxOrderByAggregateInput;
    _min?: menuMinOrderByAggregateInput;
    _sum?: menuSumOrderByAggregateInput;
  };

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[];
    OR?: menuScalarWhereWithAggregatesInput[];
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'menu'> | string;
    restaurant_id?: UuidWithAggregatesFilter<'menu'> | string;
    name?: StringWithAggregatesFilter<'menu'> | string;
    description?: StringNullableWithAggregatesFilter<'menu'> | string | null;
    price?: IntWithAggregatesFilter<'menu'> | number;
    created_at?: DateTimeWithAggregatesFilter<'menu'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'menu'> | Date | string;
  };

  export type reservationWhereInput = {
    AND?: reservationWhereInput | reservationWhereInput[];
    OR?: reservationWhereInput[];
    NOT?: reservationWhereInput | reservationWhereInput[];
    id?: UuidFilter<'reservation'> | string;
    user_id?: UuidFilter<'reservation'> | string;
    table_id?: UuidFilter<'reservation'> | string;
    reservation_time?: DateTimeFilter<'reservation'> | Date | string;
    number_of_guests?: IntFilter<'reservation'> | number;
    created_at?: DateTimeFilter<'reservation'> | Date | string;
    updated_at?: DateTimeFilter<'reservation'> | Date | string;
    table?: XOR<TableRelationFilter, tableWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reservationOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    table_id?: SortOrder;
    reservation_time?: SortOrder;
    number_of_guests?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    table?: tableOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reservationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reservationWhereInput | reservationWhereInput[];
      OR?: reservationWhereInput[];
      NOT?: reservationWhereInput | reservationWhereInput[];
      user_id?: UuidFilter<'reservation'> | string;
      table_id?: UuidFilter<'reservation'> | string;
      reservation_time?: DateTimeFilter<'reservation'> | Date | string;
      number_of_guests?: IntFilter<'reservation'> | number;
      created_at?: DateTimeFilter<'reservation'> | Date | string;
      updated_at?: DateTimeFilter<'reservation'> | Date | string;
      table?: XOR<TableRelationFilter, tableWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reservationOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    table_id?: SortOrder;
    reservation_time?: SortOrder;
    number_of_guests?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reservationCountOrderByAggregateInput;
    _avg?: reservationAvgOrderByAggregateInput;
    _max?: reservationMaxOrderByAggregateInput;
    _min?: reservationMinOrderByAggregateInput;
    _sum?: reservationSumOrderByAggregateInput;
  };

  export type reservationScalarWhereWithAggregatesInput = {
    AND?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[];
    OR?: reservationScalarWhereWithAggregatesInput[];
    NOT?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'reservation'> | string;
    user_id?: UuidWithAggregatesFilter<'reservation'> | string;
    table_id?: UuidWithAggregatesFilter<'reservation'> | string;
    reservation_time?: DateTimeWithAggregatesFilter<'reservation'> | Date | string;
    number_of_guests?: IntWithAggregatesFilter<'reservation'> | number;
    created_at?: DateTimeWithAggregatesFilter<'reservation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'reservation'> | Date | string;
  };

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[];
    OR?: restaurantWhereInput[];
    NOT?: restaurantWhereInput | restaurantWhereInput[];
    id?: UuidFilter<'restaurant'> | string;
    description?: StringNullableFilter<'restaurant'> | string | null;
    address?: StringNullableFilter<'restaurant'> | string | null;
    city?: StringNullableFilter<'restaurant'> | string | null;
    state?: StringNullableFilter<'restaurant'> | string | null;
    zip_code?: StringNullableFilter<'restaurant'> | string | null;
    name?: StringFilter<'restaurant'> | string;
    created_at?: DateTimeFilter<'restaurant'> | Date | string;
    updated_at?: DateTimeFilter<'restaurant'> | Date | string;
    user_id?: UuidFilter<'restaurant'> | string;
    tenant_id?: StringFilter<'restaurant'> | string;
    employee?: EmployeeListRelationFilter;
    menu?: MenuListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    table?: TableListRelationFilter;
  };

  export type restaurantOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
    menu?: menuOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    table?: tableOrderByRelationAggregateInput;
  };

  export type restaurantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: restaurantWhereInput | restaurantWhereInput[];
      OR?: restaurantWhereInput[];
      NOT?: restaurantWhereInput | restaurantWhereInput[];
      description?: StringNullableFilter<'restaurant'> | string | null;
      address?: StringNullableFilter<'restaurant'> | string | null;
      city?: StringNullableFilter<'restaurant'> | string | null;
      state?: StringNullableFilter<'restaurant'> | string | null;
      zip_code?: StringNullableFilter<'restaurant'> | string | null;
      name?: StringFilter<'restaurant'> | string;
      created_at?: DateTimeFilter<'restaurant'> | Date | string;
      updated_at?: DateTimeFilter<'restaurant'> | Date | string;
      user_id?: UuidFilter<'restaurant'> | string;
      tenant_id?: StringFilter<'restaurant'> | string;
      employee?: EmployeeListRelationFilter;
      menu?: MenuListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      table?: TableListRelationFilter;
    },
    'id'
  >;

  export type restaurantOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: restaurantCountOrderByAggregateInput;
    _max?: restaurantMaxOrderByAggregateInput;
    _min?: restaurantMinOrderByAggregateInput;
  };

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[];
    OR?: restaurantScalarWhereWithAggregatesInput[];
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'restaurant'> | string;
    description?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    address?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    city?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    state?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    name?: StringWithAggregatesFilter<'restaurant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'restaurant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'restaurant'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'restaurant'> | string;
    tenant_id?: StringWithAggregatesFilter<'restaurant'> | string;
  };

  export type tableWhereInput = {
    AND?: tableWhereInput | tableWhereInput[];
    OR?: tableWhereInput[];
    NOT?: tableWhereInput | tableWhereInput[];
    id?: UuidFilter<'table'> | string;
    table_number?: IntFilter<'table'> | number;
    capacity?: IntFilter<'table'> | number;
    restaurant_id?: UuidFilter<'table'> | string;
    created_at?: DateTimeFilter<'table'> | Date | string;
    updated_at?: DateTimeFilter<'table'> | Date | string;
    reservation?: ReservationListRelationFilter;
    restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
  };

  export type tableOrderByWithRelationInput = {
    id?: SortOrder;
    table_number?: SortOrder;
    capacity?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    reservation?: reservationOrderByRelationAggregateInput;
    restaurant?: restaurantOrderByWithRelationInput;
  };

  export type tableWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: tableWhereInput | tableWhereInput[];
      OR?: tableWhereInput[];
      NOT?: tableWhereInput | tableWhereInput[];
      table_number?: IntFilter<'table'> | number;
      capacity?: IntFilter<'table'> | number;
      restaurant_id?: UuidFilter<'table'> | string;
      created_at?: DateTimeFilter<'table'> | Date | string;
      updated_at?: DateTimeFilter<'table'> | Date | string;
      reservation?: ReservationListRelationFilter;
      restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
    },
    'id'
  >;

  export type tableOrderByWithAggregationInput = {
    id?: SortOrder;
    table_number?: SortOrder;
    capacity?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: tableCountOrderByAggregateInput;
    _avg?: tableAvgOrderByAggregateInput;
    _max?: tableMaxOrderByAggregateInput;
    _min?: tableMinOrderByAggregateInput;
    _sum?: tableSumOrderByAggregateInput;
  };

  export type tableScalarWhereWithAggregatesInput = {
    AND?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[];
    OR?: tableScalarWhereWithAggregatesInput[];
    NOT?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'table'> | string;
    table_number?: IntWithAggregatesFilter<'table'> | number;
    capacity?: IntWithAggregatesFilter<'table'> | number;
    restaurant_id?: UuidWithAggregatesFilter<'table'> | string;
    created_at?: DateTimeWithAggregatesFilter<'table'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'table'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    employee?: EmployeeListRelationFilter;
    reservation?: ReservationListRelationFilter;
    restaurant?: RestaurantListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
    reservation?: reservationOrderByRelationAggregateInput;
    restaurant?: restaurantOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      employee?: EmployeeListRelationFilter;
      reservation?: ReservationListRelationFilter;
      restaurant?: RestaurantListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutMenuInput;
  };

  export type menuUncheckedCreateInput = {
    id?: string;
    restaurant_id: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type menuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutMenuNestedInput;
  };

  export type menuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuCreateManyInput = {
    id?: string;
    restaurant_id: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type menuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationCreateInput = {
    id?: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    table: tableCreateNestedOneWithoutReservationInput;
    user: userCreateNestedOneWithoutReservationInput;
  };

  export type reservationUncheckedCreateInput = {
    id?: string;
    user_id: string;
    table_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    table?: tableUpdateOneRequiredWithoutReservationNestedInput;
    user?: userUpdateOneRequiredWithoutReservationNestedInput;
  };

  export type reservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    table_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationCreateManyInput = {
    id?: string;
    user_id: string;
    table_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    table_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type restaurantCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutRestaurantInput;
    menu?: menuCreateNestedManyWithoutRestaurantInput;
    user: userCreateNestedOneWithoutRestaurantInput;
    table?: tableCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutRestaurantInput;
    menu?: menuUncheckedCreateNestedManyWithoutRestaurantInput;
    table?: tableUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUpdateManyWithoutRestaurantNestedInput;
    user?: userUpdateOneRequiredWithoutRestaurantNestedInput;
    table?: tableUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUncheckedUpdateManyWithoutRestaurantNestedInput;
    table?: tableUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type restaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type restaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type tableCreateInput = {
    id?: string;
    table_number: number;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationCreateNestedManyWithoutTableInput;
    restaurant: restaurantCreateNestedOneWithoutTableInput;
  };

  export type tableUncheckedCreateInput = {
    id?: string;
    table_number: number;
    capacity: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationUncheckedCreateNestedManyWithoutTableInput;
  };

  export type tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUpdateManyWithoutTableNestedInput;
    restaurant?: restaurantUpdateOneRequiredWithoutTableNestedInput;
  };

  export type tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUncheckedUpdateManyWithoutTableNestedInput;
  };

  export type tableCreateManyInput = {
    id?: string;
    table_number: number;
    capacity: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    reservation?: reservationCreateNestedManyWithoutUserInput;
    restaurant?: restaurantCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    reservation?: reservationUncheckedCreateNestedManyWithoutUserInput;
    restaurant?: restaurantUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    reservation?: reservationUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    reservation?: reservationUncheckedUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type RestaurantRelationFilter = {
    is?: restaurantWhereInput;
    isNot?: restaurantWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder;
    restaurant_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type menuAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder;
    restaurant_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder;
    restaurant_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type menuSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type TableRelationFilter = {
    is?: tableWhereInput;
    isNot?: tableWhereInput;
  };

  export type reservationCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    table_id?: SortOrder;
    reservation_time?: SortOrder;
    number_of_guests?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reservationAvgOrderByAggregateInput = {
    number_of_guests?: SortOrder;
  };

  export type reservationMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    table_id?: SortOrder;
    reservation_time?: SortOrder;
    number_of_guests?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reservationMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    table_id?: SortOrder;
    reservation_time?: SortOrder;
    number_of_guests?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reservationSumOrderByAggregateInput = {
    number_of_guests?: SortOrder;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type MenuListRelationFilter = {
    every?: menuWhereInput;
    some?: menuWhereInput;
    none?: menuWhereInput;
  };

  export type TableListRelationFilter = {
    every?: tableWhereInput;
    some?: tableWhereInput;
    none?: tableWhereInput;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type menuOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type tableOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type restaurantCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type restaurantMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type restaurantMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type ReservationListRelationFilter = {
    every?: reservationWhereInput;
    some?: reservationWhereInput;
    none?: reservationWhereInput;
  };

  export type reservationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type tableCountOrderByAggregateInput = {
    id?: SortOrder;
    table_number?: SortOrder;
    capacity?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tableAvgOrderByAggregateInput = {
    table_number?: SortOrder;
    capacity?: SortOrder;
  };

  export type tableMaxOrderByAggregateInput = {
    id?: SortOrder;
    table_number?: SortOrder;
    capacity?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tableMinOrderByAggregateInput = {
    id?: SortOrder;
    table_number?: SortOrder;
    capacity?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tableSumOrderByAggregateInput = {
    table_number?: SortOrder;
    capacity?: SortOrder;
  };

  export type RestaurantListRelationFilter = {
    every?: restaurantWhereInput;
    some?: restaurantWhereInput;
    none?: restaurantWhereInput;
  };

  export type restaurantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type restaurantCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<restaurantCreateWithoutEmployeeInput, restaurantUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutEmployeeInput;
    connect?: restaurantWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type restaurantUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<restaurantCreateWithoutEmployeeInput, restaurantUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutEmployeeInput;
    upsert?: restaurantUpsertWithoutEmployeeInput;
    connect?: restaurantWhereUniqueInput;
    update?: XOR<
      XOR<restaurantUpdateToOneWithWhereWithoutEmployeeInput, restaurantUpdateWithoutEmployeeInput>,
      restaurantUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type restaurantCreateNestedOneWithoutMenuInput = {
    create?: XOR<restaurantCreateWithoutMenuInput, restaurantUncheckedCreateWithoutMenuInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutMenuInput;
    connect?: restaurantWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type restaurantUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<restaurantCreateWithoutMenuInput, restaurantUncheckedCreateWithoutMenuInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutMenuInput;
    upsert?: restaurantUpsertWithoutMenuInput;
    connect?: restaurantWhereUniqueInput;
    update?: XOR<
      XOR<restaurantUpdateToOneWithWhereWithoutMenuInput, restaurantUpdateWithoutMenuInput>,
      restaurantUncheckedUpdateWithoutMenuInput
    >;
  };

  export type tableCreateNestedOneWithoutReservationInput = {
    create?: XOR<tableCreateWithoutReservationInput, tableUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: tableCreateOrConnectWithoutReservationInput;
    connect?: tableWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReservationInput = {
    create?: XOR<userCreateWithoutReservationInput, userUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: userCreateOrConnectWithoutReservationInput;
    connect?: userWhereUniqueInput;
  };

  export type tableUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<tableCreateWithoutReservationInput, tableUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: tableCreateOrConnectWithoutReservationInput;
    upsert?: tableUpsertWithoutReservationInput;
    connect?: tableWhereUniqueInput;
    update?: XOR<
      XOR<tableUpdateToOneWithWhereWithoutReservationInput, tableUpdateWithoutReservationInput>,
      tableUncheckedUpdateWithoutReservationInput
    >;
  };

  export type userUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<userCreateWithoutReservationInput, userUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: userCreateOrConnectWithoutReservationInput;
    upsert?: userUpsertWithoutReservationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReservationInput, userUpdateWithoutReservationInput>,
      userUncheckedUpdateWithoutReservationInput
    >;
  };

  export type employeeCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>
      | employeeCreateWithoutRestaurantInput[]
      | employeeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutRestaurantInput | employeeCreateOrConnectWithoutRestaurantInput[];
    createMany?: employeeCreateManyRestaurantInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type menuCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>
      | menuCreateWithoutRestaurantInput[]
      | menuUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: menuCreateOrConnectWithoutRestaurantInput | menuCreateOrConnectWithoutRestaurantInput[];
    createMany?: menuCreateManyRestaurantInputEnvelope;
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<userCreateWithoutRestaurantInput, userUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: userCreateOrConnectWithoutRestaurantInput;
    connect?: userWhereUniqueInput;
  };

  export type tableCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>
      | tableCreateWithoutRestaurantInput[]
      | tableUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: tableCreateOrConnectWithoutRestaurantInput | tableCreateOrConnectWithoutRestaurantInput[];
    createMany?: tableCreateManyRestaurantInputEnvelope;
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>
      | employeeCreateWithoutRestaurantInput[]
      | employeeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutRestaurantInput | employeeCreateOrConnectWithoutRestaurantInput[];
    createMany?: employeeCreateManyRestaurantInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type menuUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>
      | menuCreateWithoutRestaurantInput[]
      | menuUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: menuCreateOrConnectWithoutRestaurantInput | menuCreateOrConnectWithoutRestaurantInput[];
    createMany?: menuCreateManyRestaurantInputEnvelope;
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[];
  };

  export type tableUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>
      | tableCreateWithoutRestaurantInput[]
      | tableUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: tableCreateOrConnectWithoutRestaurantInput | tableCreateOrConnectWithoutRestaurantInput[];
    createMany?: tableCreateManyRestaurantInputEnvelope;
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>
      | employeeCreateWithoutRestaurantInput[]
      | employeeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutRestaurantInput | employeeCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutRestaurantInput
      | employeeUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: employeeCreateManyRestaurantInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutRestaurantInput
      | employeeUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutRestaurantInput
      | employeeUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type menuUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>
      | menuCreateWithoutRestaurantInput[]
      | menuUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: menuCreateOrConnectWithoutRestaurantInput | menuCreateOrConnectWithoutRestaurantInput[];
    upsert?: menuUpsertWithWhereUniqueWithoutRestaurantInput | menuUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: menuCreateManyRestaurantInputEnvelope;
    set?: menuWhereUniqueInput | menuWhereUniqueInput[];
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[];
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[];
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[];
    update?: menuUpdateWithWhereUniqueWithoutRestaurantInput | menuUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: menuUpdateManyWithWhereWithoutRestaurantInput | menuUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutRestaurantNestedInput = {
    create?: XOR<userCreateWithoutRestaurantInput, userUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: userCreateOrConnectWithoutRestaurantInput;
    upsert?: userUpsertWithoutRestaurantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRestaurantInput, userUpdateWithoutRestaurantInput>,
      userUncheckedUpdateWithoutRestaurantInput
    >;
  };

  export type tableUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>
      | tableCreateWithoutRestaurantInput[]
      | tableUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: tableCreateOrConnectWithoutRestaurantInput | tableCreateOrConnectWithoutRestaurantInput[];
    upsert?: tableUpsertWithWhereUniqueWithoutRestaurantInput | tableUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: tableCreateManyRestaurantInputEnvelope;
    set?: tableWhereUniqueInput | tableWhereUniqueInput[];
    disconnect?: tableWhereUniqueInput | tableWhereUniqueInput[];
    delete?: tableWhereUniqueInput | tableWhereUniqueInput[];
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[];
    update?: tableUpdateWithWhereUniqueWithoutRestaurantInput | tableUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: tableUpdateManyWithWhereWithoutRestaurantInput | tableUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: tableScalarWhereInput | tableScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>
      | employeeCreateWithoutRestaurantInput[]
      | employeeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutRestaurantInput | employeeCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutRestaurantInput
      | employeeUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: employeeCreateManyRestaurantInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutRestaurantInput
      | employeeUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutRestaurantInput
      | employeeUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type menuUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>
      | menuCreateWithoutRestaurantInput[]
      | menuUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: menuCreateOrConnectWithoutRestaurantInput | menuCreateOrConnectWithoutRestaurantInput[];
    upsert?: menuUpsertWithWhereUniqueWithoutRestaurantInput | menuUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: menuCreateManyRestaurantInputEnvelope;
    set?: menuWhereUniqueInput | menuWhereUniqueInput[];
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[];
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[];
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[];
    update?: menuUpdateWithWhereUniqueWithoutRestaurantInput | menuUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: menuUpdateManyWithWhereWithoutRestaurantInput | menuUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[];
  };

  export type tableUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>
      | tableCreateWithoutRestaurantInput[]
      | tableUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: tableCreateOrConnectWithoutRestaurantInput | tableCreateOrConnectWithoutRestaurantInput[];
    upsert?: tableUpsertWithWhereUniqueWithoutRestaurantInput | tableUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: tableCreateManyRestaurantInputEnvelope;
    set?: tableWhereUniqueInput | tableWhereUniqueInput[];
    disconnect?: tableWhereUniqueInput | tableWhereUniqueInput[];
    delete?: tableWhereUniqueInput | tableWhereUniqueInput[];
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[];
    update?: tableUpdateWithWhereUniqueWithoutRestaurantInput | tableUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: tableUpdateManyWithWhereWithoutRestaurantInput | tableUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: tableScalarWhereInput | tableScalarWhereInput[];
  };

  export type reservationCreateNestedManyWithoutTableInput = {
    create?:
      | XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>
      | reservationCreateWithoutTableInput[]
      | reservationUncheckedCreateWithoutTableInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutTableInput | reservationCreateOrConnectWithoutTableInput[];
    createMany?: reservationCreateManyTableInputEnvelope;
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
  };

  export type restaurantCreateNestedOneWithoutTableInput = {
    create?: XOR<restaurantCreateWithoutTableInput, restaurantUncheckedCreateWithoutTableInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutTableInput;
    connect?: restaurantWhereUniqueInput;
  };

  export type reservationUncheckedCreateNestedManyWithoutTableInput = {
    create?:
      | XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>
      | reservationCreateWithoutTableInput[]
      | reservationUncheckedCreateWithoutTableInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutTableInput | reservationCreateOrConnectWithoutTableInput[];
    createMany?: reservationCreateManyTableInputEnvelope;
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
  };

  export type reservationUpdateManyWithoutTableNestedInput = {
    create?:
      | XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>
      | reservationCreateWithoutTableInput[]
      | reservationUncheckedCreateWithoutTableInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutTableInput | reservationCreateOrConnectWithoutTableInput[];
    upsert?: reservationUpsertWithWhereUniqueWithoutTableInput | reservationUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: reservationCreateManyTableInputEnvelope;
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    update?: reservationUpdateWithWhereUniqueWithoutTableInput | reservationUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: reservationUpdateManyWithWhereWithoutTableInput | reservationUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[];
  };

  export type restaurantUpdateOneRequiredWithoutTableNestedInput = {
    create?: XOR<restaurantCreateWithoutTableInput, restaurantUncheckedCreateWithoutTableInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutTableInput;
    upsert?: restaurantUpsertWithoutTableInput;
    connect?: restaurantWhereUniqueInput;
    update?: XOR<
      XOR<restaurantUpdateToOneWithWhereWithoutTableInput, restaurantUpdateWithoutTableInput>,
      restaurantUncheckedUpdateWithoutTableInput
    >;
  };

  export type reservationUncheckedUpdateManyWithoutTableNestedInput = {
    create?:
      | XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>
      | reservationCreateWithoutTableInput[]
      | reservationUncheckedCreateWithoutTableInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutTableInput | reservationCreateOrConnectWithoutTableInput[];
    upsert?: reservationUpsertWithWhereUniqueWithoutTableInput | reservationUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: reservationCreateManyTableInputEnvelope;
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    update?: reservationUpdateWithWhereUniqueWithoutTableInput | reservationUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: reservationUpdateManyWithWhereWithoutTableInput | reservationUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type reservationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>
      | reservationCreateWithoutUserInput[]
      | reservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutUserInput | reservationCreateOrConnectWithoutUserInput[];
    createMany?: reservationCreateManyUserInputEnvelope;
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
  };

  export type restaurantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>
      | restaurantCreateWithoutUserInput[]
      | restaurantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: restaurantCreateOrConnectWithoutUserInput | restaurantCreateOrConnectWithoutUserInput[];
    createMany?: restaurantCreateManyUserInputEnvelope;
    connect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type reservationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>
      | reservationCreateWithoutUserInput[]
      | reservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutUserInput | reservationCreateOrConnectWithoutUserInput[];
    createMany?: reservationCreateManyUserInputEnvelope;
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
  };

  export type restaurantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>
      | restaurantCreateWithoutUserInput[]
      | restaurantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: restaurantCreateOrConnectWithoutUserInput | restaurantCreateOrConnectWithoutUserInput[];
    createMany?: restaurantCreateManyUserInputEnvelope;
    connect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type reservationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>
      | reservationCreateWithoutUserInput[]
      | reservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutUserInput | reservationCreateOrConnectWithoutUserInput[];
    upsert?: reservationUpsertWithWhereUniqueWithoutUserInput | reservationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reservationCreateManyUserInputEnvelope;
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    update?: reservationUpdateWithWhereUniqueWithoutUserInput | reservationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reservationUpdateManyWithWhereWithoutUserInput | reservationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[];
  };

  export type restaurantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>
      | restaurantCreateWithoutUserInput[]
      | restaurantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: restaurantCreateOrConnectWithoutUserInput | restaurantCreateOrConnectWithoutUserInput[];
    upsert?: restaurantUpsertWithWhereUniqueWithoutUserInput | restaurantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: restaurantCreateManyUserInputEnvelope;
    set?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    disconnect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    delete?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    connect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    update?: restaurantUpdateWithWhereUniqueWithoutUserInput | restaurantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: restaurantUpdateManyWithWhereWithoutUserInput | restaurantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: restaurantScalarWhereInput | restaurantScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type reservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>
      | reservationCreateWithoutUserInput[]
      | reservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reservationCreateOrConnectWithoutUserInput | reservationCreateOrConnectWithoutUserInput[];
    upsert?: reservationUpsertWithWhereUniqueWithoutUserInput | reservationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reservationCreateManyUserInputEnvelope;
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[];
    update?: reservationUpdateWithWhereUniqueWithoutUserInput | reservationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reservationUpdateManyWithWhereWithoutUserInput | reservationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[];
  };

  export type restaurantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>
      | restaurantCreateWithoutUserInput[]
      | restaurantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: restaurantCreateOrConnectWithoutUserInput | restaurantCreateOrConnectWithoutUserInput[];
    upsert?: restaurantUpsertWithWhereUniqueWithoutUserInput | restaurantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: restaurantCreateManyUserInputEnvelope;
    set?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    disconnect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    delete?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    connect?: restaurantWhereUniqueInput | restaurantWhereUniqueInput[];
    update?: restaurantUpdateWithWhereUniqueWithoutUserInput | restaurantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: restaurantUpdateManyWithWhereWithoutUserInput | restaurantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: restaurantScalarWhereInput | restaurantScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type restaurantCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    menu?: menuCreateNestedManyWithoutRestaurantInput;
    user: userCreateNestedOneWithoutRestaurantInput;
    table?: tableCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    menu?: menuUncheckedCreateNestedManyWithoutRestaurantInput;
    table?: tableUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutEmployeeInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutEmployeeInput, restaurantUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationCreateNestedManyWithoutUserInput;
    restaurant?: restaurantCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationUncheckedCreateNestedManyWithoutUserInput;
    restaurant?: restaurantUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type restaurantUpsertWithoutEmployeeInput = {
    update: XOR<restaurantUpdateWithoutEmployeeInput, restaurantUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<restaurantCreateWithoutEmployeeInput, restaurantUncheckedCreateWithoutEmployeeInput>;
    where?: restaurantWhereInput;
  };

  export type restaurantUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: restaurantWhereInput;
    data: XOR<restaurantUpdateWithoutEmployeeInput, restaurantUncheckedUpdateWithoutEmployeeInput>;
  };

  export type restaurantUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    menu?: menuUpdateManyWithoutRestaurantNestedInput;
    user?: userUpdateOneRequiredWithoutRestaurantNestedInput;
    table?: tableUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    menu?: menuUncheckedUpdateManyWithoutRestaurantNestedInput;
    table?: tableUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUncheckedUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type restaurantCreateWithoutMenuInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutRestaurantInput;
    user: userCreateNestedOneWithoutRestaurantInput;
    table?: tableCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutMenuInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutRestaurantInput;
    table?: tableUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutMenuInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutMenuInput, restaurantUncheckedCreateWithoutMenuInput>;
  };

  export type restaurantUpsertWithoutMenuInput = {
    update: XOR<restaurantUpdateWithoutMenuInput, restaurantUncheckedUpdateWithoutMenuInput>;
    create: XOR<restaurantCreateWithoutMenuInput, restaurantUncheckedCreateWithoutMenuInput>;
    where?: restaurantWhereInput;
  };

  export type restaurantUpdateToOneWithWhereWithoutMenuInput = {
    where?: restaurantWhereInput;
    data: XOR<restaurantUpdateWithoutMenuInput, restaurantUncheckedUpdateWithoutMenuInput>;
  };

  export type restaurantUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutRestaurantNestedInput;
    user?: userUpdateOneRequiredWithoutRestaurantNestedInput;
    table?: tableUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutRestaurantNestedInput;
    table?: tableUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type tableCreateWithoutReservationInput = {
    id?: string;
    table_number: number;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutTableInput;
  };

  export type tableUncheckedCreateWithoutReservationInput = {
    id?: string;
    table_number: number;
    capacity: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tableCreateOrConnectWithoutReservationInput = {
    where: tableWhereUniqueInput;
    create: XOR<tableCreateWithoutReservationInput, tableUncheckedCreateWithoutReservationInput>;
  };

  export type userCreateWithoutReservationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    restaurant?: restaurantCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReservationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    restaurant?: restaurantUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReservationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReservationInput, userUncheckedCreateWithoutReservationInput>;
  };

  export type tableUpsertWithoutReservationInput = {
    update: XOR<tableUpdateWithoutReservationInput, tableUncheckedUpdateWithoutReservationInput>;
    create: XOR<tableCreateWithoutReservationInput, tableUncheckedCreateWithoutReservationInput>;
    where?: tableWhereInput;
  };

  export type tableUpdateToOneWithWhereWithoutReservationInput = {
    where?: tableWhereInput;
    data: XOR<tableUpdateWithoutReservationInput, tableUncheckedUpdateWithoutReservationInput>;
  };

  export type tableUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutTableNestedInput;
  };

  export type tableUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutReservationInput = {
    update: XOR<userUpdateWithoutReservationInput, userUncheckedUpdateWithoutReservationInput>;
    create: XOR<userCreateWithoutReservationInput, userUncheckedCreateWithoutReservationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReservationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReservationInput, userUncheckedUpdateWithoutReservationInput>;
  };

  export type userUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    restaurant?: restaurantUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type employeeCreateWithoutRestaurantInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    user_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutRestaurantInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>;
  };

  export type employeeCreateManyRestaurantInputEnvelope = {
    data: employeeCreateManyRestaurantInput | employeeCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type menuCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type menuUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type menuCreateOrConnectWithoutRestaurantInput = {
    where: menuWhereUniqueInput;
    create: XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>;
  };

  export type menuCreateManyRestaurantInputEnvelope = {
    data: menuCreateManyRestaurantInput | menuCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutRestaurantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    reservation?: reservationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    reservation?: reservationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRestaurantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRestaurantInput, userUncheckedCreateWithoutRestaurantInput>;
  };

  export type tableCreateWithoutRestaurantInput = {
    id?: string;
    table_number: number;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationCreateNestedManyWithoutTableInput;
  };

  export type tableUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    table_number: number;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    reservation?: reservationUncheckedCreateNestedManyWithoutTableInput;
  };

  export type tableCreateOrConnectWithoutRestaurantInput = {
    where: tableWhereUniqueInput;
    create: XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>;
  };

  export type tableCreateManyRestaurantInputEnvelope = {
    data: tableCreateManyRestaurantInput | tableCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutRestaurantInput, employeeUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<employeeCreateWithoutRestaurantInput, employeeUncheckedCreateWithoutRestaurantInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutRestaurantInput, employeeUncheckedUpdateWithoutRestaurantInput>;
  };

  export type employeeUpdateManyWithWhereWithoutRestaurantInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutRestaurantInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    restaurant_id?: UuidFilter<'employee'> | string;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type menuUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: menuWhereUniqueInput;
    update: XOR<menuUpdateWithoutRestaurantInput, menuUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<menuCreateWithoutRestaurantInput, menuUncheckedCreateWithoutRestaurantInput>;
  };

  export type menuUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: menuWhereUniqueInput;
    data: XOR<menuUpdateWithoutRestaurantInput, menuUncheckedUpdateWithoutRestaurantInput>;
  };

  export type menuUpdateManyWithWhereWithoutRestaurantInput = {
    where: menuScalarWhereInput;
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyWithoutRestaurantInput>;
  };

  export type menuScalarWhereInput = {
    AND?: menuScalarWhereInput | menuScalarWhereInput[];
    OR?: menuScalarWhereInput[];
    NOT?: menuScalarWhereInput | menuScalarWhereInput[];
    id?: UuidFilter<'menu'> | string;
    restaurant_id?: UuidFilter<'menu'> | string;
    name?: StringFilter<'menu'> | string;
    description?: StringNullableFilter<'menu'> | string | null;
    price?: IntFilter<'menu'> | number;
    created_at?: DateTimeFilter<'menu'> | Date | string;
    updated_at?: DateTimeFilter<'menu'> | Date | string;
  };

  export type userUpsertWithoutRestaurantInput = {
    update: XOR<userUpdateWithoutRestaurantInput, userUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<userCreateWithoutRestaurantInput, userUncheckedCreateWithoutRestaurantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRestaurantInput, userUncheckedUpdateWithoutRestaurantInput>;
  };

  export type userUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    reservation?: reservationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    reservation?: reservationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type tableUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: tableWhereUniqueInput;
    update: XOR<tableUpdateWithoutRestaurantInput, tableUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<tableCreateWithoutRestaurantInput, tableUncheckedCreateWithoutRestaurantInput>;
  };

  export type tableUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: tableWhereUniqueInput;
    data: XOR<tableUpdateWithoutRestaurantInput, tableUncheckedUpdateWithoutRestaurantInput>;
  };

  export type tableUpdateManyWithWhereWithoutRestaurantInput = {
    where: tableScalarWhereInput;
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyWithoutRestaurantInput>;
  };

  export type tableScalarWhereInput = {
    AND?: tableScalarWhereInput | tableScalarWhereInput[];
    OR?: tableScalarWhereInput[];
    NOT?: tableScalarWhereInput | tableScalarWhereInput[];
    id?: UuidFilter<'table'> | string;
    table_number?: IntFilter<'table'> | number;
    capacity?: IntFilter<'table'> | number;
    restaurant_id?: UuidFilter<'table'> | string;
    created_at?: DateTimeFilter<'table'> | Date | string;
    updated_at?: DateTimeFilter<'table'> | Date | string;
  };

  export type reservationCreateWithoutTableInput = {
    id?: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReservationInput;
  };

  export type reservationUncheckedCreateWithoutTableInput = {
    id?: string;
    user_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationCreateOrConnectWithoutTableInput = {
    where: reservationWhereUniqueInput;
    create: XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>;
  };

  export type reservationCreateManyTableInputEnvelope = {
    data: reservationCreateManyTableInput | reservationCreateManyTableInput[];
    skipDuplicates?: boolean;
  };

  export type restaurantCreateWithoutTableInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutRestaurantInput;
    menu?: menuCreateNestedManyWithoutRestaurantInput;
    user: userCreateNestedOneWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutTableInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutRestaurantInput;
    menu?: menuUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutTableInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutTableInput, restaurantUncheckedCreateWithoutTableInput>;
  };

  export type reservationUpsertWithWhereUniqueWithoutTableInput = {
    where: reservationWhereUniqueInput;
    update: XOR<reservationUpdateWithoutTableInput, reservationUncheckedUpdateWithoutTableInput>;
    create: XOR<reservationCreateWithoutTableInput, reservationUncheckedCreateWithoutTableInput>;
  };

  export type reservationUpdateWithWhereUniqueWithoutTableInput = {
    where: reservationWhereUniqueInput;
    data: XOR<reservationUpdateWithoutTableInput, reservationUncheckedUpdateWithoutTableInput>;
  };

  export type reservationUpdateManyWithWhereWithoutTableInput = {
    where: reservationScalarWhereInput;
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyWithoutTableInput>;
  };

  export type reservationScalarWhereInput = {
    AND?: reservationScalarWhereInput | reservationScalarWhereInput[];
    OR?: reservationScalarWhereInput[];
    NOT?: reservationScalarWhereInput | reservationScalarWhereInput[];
    id?: UuidFilter<'reservation'> | string;
    user_id?: UuidFilter<'reservation'> | string;
    table_id?: UuidFilter<'reservation'> | string;
    reservation_time?: DateTimeFilter<'reservation'> | Date | string;
    number_of_guests?: IntFilter<'reservation'> | number;
    created_at?: DateTimeFilter<'reservation'> | Date | string;
    updated_at?: DateTimeFilter<'reservation'> | Date | string;
  };

  export type restaurantUpsertWithoutTableInput = {
    update: XOR<restaurantUpdateWithoutTableInput, restaurantUncheckedUpdateWithoutTableInput>;
    create: XOR<restaurantCreateWithoutTableInput, restaurantUncheckedCreateWithoutTableInput>;
    where?: restaurantWhereInput;
  };

  export type restaurantUpdateToOneWithWhereWithoutTableInput = {
    where?: restaurantWhereInput;
    data: XOR<restaurantUpdateWithoutTableInput, restaurantUncheckedUpdateWithoutTableInput>;
  };

  export type restaurantUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUpdateManyWithoutRestaurantNestedInput;
    user?: userUpdateOneRequiredWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    restaurant_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reservationCreateWithoutUserInput = {
    id?: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    table: tableCreateNestedOneWithoutReservationInput;
  };

  export type reservationUncheckedCreateWithoutUserInput = {
    id?: string;
    table_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationCreateOrConnectWithoutUserInput = {
    where: reservationWhereUniqueInput;
    create: XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>;
  };

  export type reservationCreateManyUserInputEnvelope = {
    data: reservationCreateManyUserInput | reservationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type restaurantCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutRestaurantInput;
    menu?: menuCreateNestedManyWithoutRestaurantInput;
    table?: tableCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutRestaurantInput;
    menu?: menuUncheckedCreateNestedManyWithoutRestaurantInput;
    table?: tableUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutUserInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>;
  };

  export type restaurantCreateManyUserInputEnvelope = {
    data: restaurantCreateManyUserInput | restaurantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type reservationUpsertWithWhereUniqueWithoutUserInput = {
    where: reservationWhereUniqueInput;
    update: XOR<reservationUpdateWithoutUserInput, reservationUncheckedUpdateWithoutUserInput>;
    create: XOR<reservationCreateWithoutUserInput, reservationUncheckedCreateWithoutUserInput>;
  };

  export type reservationUpdateWithWhereUniqueWithoutUserInput = {
    where: reservationWhereUniqueInput;
    data: XOR<reservationUpdateWithoutUserInput, reservationUncheckedUpdateWithoutUserInput>;
  };

  export type reservationUpdateManyWithWhereWithoutUserInput = {
    where: reservationScalarWhereInput;
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyWithoutUserInput>;
  };

  export type restaurantUpsertWithWhereUniqueWithoutUserInput = {
    where: restaurantWhereUniqueInput;
    update: XOR<restaurantUpdateWithoutUserInput, restaurantUncheckedUpdateWithoutUserInput>;
    create: XOR<restaurantCreateWithoutUserInput, restaurantUncheckedCreateWithoutUserInput>;
  };

  export type restaurantUpdateWithWhereUniqueWithoutUserInput = {
    where: restaurantWhereUniqueInput;
    data: XOR<restaurantUpdateWithoutUserInput, restaurantUncheckedUpdateWithoutUserInput>;
  };

  export type restaurantUpdateManyWithWhereWithoutUserInput = {
    where: restaurantScalarWhereInput;
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyWithoutUserInput>;
  };

  export type restaurantScalarWhereInput = {
    AND?: restaurantScalarWhereInput | restaurantScalarWhereInput[];
    OR?: restaurantScalarWhereInput[];
    NOT?: restaurantScalarWhereInput | restaurantScalarWhereInput[];
    id?: UuidFilter<'restaurant'> | string;
    description?: StringNullableFilter<'restaurant'> | string | null;
    address?: StringNullableFilter<'restaurant'> | string | null;
    city?: StringNullableFilter<'restaurant'> | string | null;
    state?: StringNullableFilter<'restaurant'> | string | null;
    zip_code?: StringNullableFilter<'restaurant'> | string | null;
    name?: StringFilter<'restaurant'> | string;
    created_at?: DateTimeFilter<'restaurant'> | Date | string;
    updated_at?: DateTimeFilter<'restaurant'> | Date | string;
    user_id?: UuidFilter<'restaurant'> | string;
    tenant_id?: StringFilter<'restaurant'> | string;
  };

  export type employeeCreateManyRestaurantInput = {
    id?: string;
    user_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type menuCreateManyRestaurantInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tableCreateManyRestaurantInput = {
    id?: string;
    table_number: number;
    capacity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type menuUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tableUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUpdateManyWithoutTableNestedInput;
  };

  export type tableUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: reservationUncheckedUpdateManyWithoutTableNestedInput;
  };

  export type tableUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_number?: IntFieldUpdateOperationsInput | number;
    capacity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationCreateManyTableInput = {
    id?: string;
    user_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReservationNestedInput;
  };

  export type reservationUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    restaurant_id: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reservationCreateManyUserInput = {
    id?: string;
    table_id: string;
    reservation_time: Date | string;
    number_of_guests: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type restaurantCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    table?: tableUpdateOneRequiredWithoutReservationNestedInput;
  };

  export type reservationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reservationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    table_id?: StringFieldUpdateOperationsInput | string;
    reservation_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_guests?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type restaurantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUpdateManyWithoutRestaurantNestedInput;
    table?: tableUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutRestaurantNestedInput;
    menu?: menuUncheckedUpdateManyWithoutRestaurantNestedInput;
    table?: tableUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
   */
  export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TableCountOutputTypeDefaultArgs instead
   */
  export type TableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TableCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use menuDefaultArgs instead
   */
  export type menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = menuDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reservationDefaultArgs instead
   */
  export type reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reservationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use restaurantDefaultArgs instead
   */
  export type restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    restaurantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use tableDefaultArgs instead
   */
  export type tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tableDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
