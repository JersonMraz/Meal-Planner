
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Ingredients
 * 
 */
export type Ingredients = $Result.DefaultSelection<Prisma.$IngredientsPayload>
/**
 * Model Instructions
 * 
 */
export type Instructions = $Result.DefaultSelection<Prisma.$InstructionsPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Meal_Tags
 * 
 */
export type Meal_Tags = $Result.DefaultSelection<Prisma.$Meal_TagsPayload>
/**
 * Model Nutrition
 * 
 */
export type Nutrition = $Result.DefaultSelection<Prisma.$NutritionPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Favorites
 * const favorites = await prisma.favorite.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Favorites
   * const favorites = await prisma.favorite.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **Ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.IngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructions`: Exposes CRUD operations for the **Instructions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructions
    * const instructions = await prisma.instructions.findMany()
    * ```
    */
  get instructions(): Prisma.InstructionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal_Tags`: Exposes CRUD operations for the **Meal_Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meal_Tags
    * const meal_Tags = await prisma.meal_Tags.findMany()
    * ```
    */
  get meal_Tags(): Prisma.Meal_TagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutrition`: Exposes CRUD operations for the **Nutrition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutritions
    * const nutritions = await prisma.nutrition.findMany()
    * ```
    */
  get nutrition(): Prisma.NutritionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Favorite: 'Favorite',
    Ingredients: 'Ingredients',
    Instructions: 'Instructions',
    Meal: 'Meal',
    Meal_Tags: 'Meal_Tags',
    Nutrition: 'Nutrition',
    Tags: 'Tags',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "favorite" | "ingredients" | "instructions" | "meal" | "meal_Tags" | "nutrition" | "tags" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Ingredients: {
        payload: Prisma.$IngredientsPayload<ExtArgs>
        fields: Prisma.IngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findMany: {
            args: Prisma.IngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          create: {
            args: Prisma.IngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          createMany: {
            args: Prisma.IngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          delete: {
            args: Prisma.IngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          update: {
            args: Prisma.IngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          upsert: {
            args: Prisma.IngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.IngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      Instructions: {
        payload: Prisma.$InstructionsPayload<ExtArgs>
        fields: Prisma.InstructionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          findFirst: {
            args: Prisma.InstructionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          findMany: {
            args: Prisma.InstructionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          create: {
            args: Prisma.InstructionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          createMany: {
            args: Prisma.InstructionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          delete: {
            args: Prisma.InstructionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          update: {
            args: Prisma.InstructionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          deleteMany: {
            args: Prisma.InstructionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          upsert: {
            args: Prisma.InstructionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          aggregate: {
            args: Prisma.InstructionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructions>
          }
          groupBy: {
            args: Prisma.InstructionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructionsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructionsCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Meal_Tags: {
        payload: Prisma.$Meal_TagsPayload<ExtArgs>
        fields: Prisma.Meal_TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Meal_TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Meal_TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          findFirst: {
            args: Prisma.Meal_TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Meal_TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          findMany: {
            args: Prisma.Meal_TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>[]
          }
          create: {
            args: Prisma.Meal_TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          createMany: {
            args: Prisma.Meal_TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Meal_TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>[]
          }
          delete: {
            args: Prisma.Meal_TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          update: {
            args: Prisma.Meal_TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          deleteMany: {
            args: Prisma.Meal_TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Meal_TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Meal_TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>[]
          }
          upsert: {
            args: Prisma.Meal_TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meal_TagsPayload>
          }
          aggregate: {
            args: Prisma.Meal_TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal_Tags>
          }
          groupBy: {
            args: Prisma.Meal_TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meal_TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Meal_TagsCountArgs<ExtArgs>
            result: $Utils.Optional<Meal_TagsCountAggregateOutputType> | number
          }
        }
      }
      Nutrition: {
        payload: Prisma.$NutritionPayload<ExtArgs>
        fields: Prisma.NutritionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          findFirst: {
            args: Prisma.NutritionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          findMany: {
            args: Prisma.NutritionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>[]
          }
          create: {
            args: Prisma.NutritionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          createMany: {
            args: Prisma.NutritionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>[]
          }
          delete: {
            args: Prisma.NutritionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          update: {
            args: Prisma.NutritionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          deleteMany: {
            args: Prisma.NutritionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>[]
          }
          upsert: {
            args: Prisma.NutritionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionPayload>
          }
          aggregate: {
            args: Prisma.NutritionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutrition>
          }
          groupBy: {
            args: Prisma.NutritionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    favorite?: FavoriteOmit
    ingredients?: IngredientsOmit
    instructions?: InstructionsOmit
    meal?: MealOmit
    meal_Tags?: Meal_TagsOmit
    nutrition?: NutritionOmit
    tags?: TagsOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    Favorite: number
    Ingredients: number
    Instructions: number
    Meal_Tags: number
    Nutrition: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | MealCountOutputTypeCountFavoriteArgs
    Ingredients?: boolean | MealCountOutputTypeCountIngredientsArgs
    Instructions?: boolean | MealCountOutputTypeCountInstructionsArgs
    Meal_Tags?: boolean | MealCountOutputTypeCountMeal_TagsArgs
    Nutrition?: boolean | MealCountOutputTypeCountNutritionArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountInstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionsWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountMeal_TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meal_TagsWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountNutritionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    Meal_Tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal_Tags?: boolean | TagsCountOutputTypeCountMeal_TagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountMeal_TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meal_TagsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Favorite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | UserCountOutputTypeCountFavoriteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    meal_id: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    meal_id: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    meal_id: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    meal_id: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    user_id: number
    meal_id: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    user_id: number
    meal_id: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "meal_id", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      Meal: Prisma.$MealPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      meal_id: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly user_id: FieldRef<"Favorite", 'Int'>
    readonly meal_id: FieldRef<"Favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsAvgAggregateOutputType = {
    id: number | null
    meal_id: number | null
  }

  export type IngredientsSumAggregateOutputType = {
    id: number | null
    meal_id: number | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: number | null
    meal_id: number | null
    name: string | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: number | null
    meal_id: number | null
    name: string | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    meal_id: number
    name: number
    _all: number
  }


  export type IngredientsAvgAggregateInputType = {
    id?: true
    meal_id?: true
  }

  export type IngredientsSumAggregateInputType = {
    id?: true
    meal_id?: true
  }

  export type IngredientsMinAggregateInputType = {
    id?: true
    meal_id?: true
    name?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    meal_id?: true
    name?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    meal_id?: true
    name?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to aggregate.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type IngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithAggregationInput | IngredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: IngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _avg?: IngredientsAvgAggregateInputType
    _sum?: IngredientsSumAggregateInputType
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: number
    meal_id: number
    name: string
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends IngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    name?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    name?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    name?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectScalar = {
    id?: boolean
    meal_id?: boolean
    name?: boolean
  }

  export type IngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meal_id" | "name", ExtArgs["result"]["ingredients"]>
  export type IngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $IngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredients"
    objects: {
      Meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meal_id: number
      name: string
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }

  type IngredientsGetPayload<S extends boolean | null | undefined | IngredientsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsPayload, S>

  type IngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface IngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredients'], meta: { name: 'Ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {IngredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientsFindUniqueArgs>(args: SelectSubset<T, IngredientsFindUniqueArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientsFindFirstArgs>(args?: SelectSubset<T, IngredientsFindFirstArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientsFindManyArgs>(args?: SelectSubset<T, IngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients.
     * @param {IngredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
     */
    create<T extends IngredientsCreateArgs>(args: SelectSubset<T, IngredientsCreateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientsCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientsCreateManyArgs>(args?: SelectSubset<T, IngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientsCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients.
     * @param {IngredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
     */
    delete<T extends IngredientsDeleteArgs>(args: SelectSubset<T, IngredientsDeleteArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients.
     * @param {IngredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientsUpdateArgs>(args: SelectSubset<T, IngredientsUpdateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientsDeleteManyArgs>(args?: SelectSubset<T, IngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientsUpdateManyArgs>(args: SelectSubset<T, IngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientsUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients.
     * @param {IngredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
     */
    upsert<T extends IngredientsUpsertArgs>(args: SelectSubset<T, IngredientsUpsertArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientsCountArgs>(
      args?: Subset<T, IngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsGroupByArgs} args - Group by arguments.
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
      T extends IngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredients model
   */
  readonly fields: IngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredients model
   */
  interface IngredientsFieldRefs {
    readonly id: FieldRef<"Ingredients", 'Int'>
    readonly meal_id: FieldRef<"Ingredients", 'Int'>
    readonly name: FieldRef<"Ingredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredients findUnique
   */
  export type IngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findUniqueOrThrow
   */
  export type IngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findFirst
   */
  export type IngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findFirstOrThrow
   */
  export type IngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findMany
   */
  export type IngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients create
   */
  export type IngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredients.
     */
    data: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
  }

  /**
   * Ingredients createMany
   */
  export type IngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients createManyAndReturn
   */
  export type IngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredients update
   */
  export type IngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredients.
     */
    data: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
    /**
     * Choose, which Ingredients to update.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients updateMany
   */
  export type IngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients updateManyAndReturn
   */
  export type IngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredients upsert
   */
  export type IngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredients to update in case it exists.
     */
    where: IngredientsWhereUniqueInput
    /**
     * In case the Ingredients found by the `where` argument doesn't exist, create a new Ingredients with this data.
     */
    create: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
    /**
     * In case the Ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
  }

  /**
   * Ingredients delete
   */
  export type IngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter which Ingredients to delete.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients deleteMany
   */
  export type IngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredients without action
   */
  export type IngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
  }


  /**
   * Model Instructions
   */

  export type AggregateInstructions = {
    _count: InstructionsCountAggregateOutputType | null
    _avg: InstructionsAvgAggregateOutputType | null
    _sum: InstructionsSumAggregateOutputType | null
    _min: InstructionsMinAggregateOutputType | null
    _max: InstructionsMaxAggregateOutputType | null
  }

  export type InstructionsAvgAggregateOutputType = {
    id: number | null
    meal_id: number | null
    step_number: number | null
  }

  export type InstructionsSumAggregateOutputType = {
    id: number | null
    meal_id: number | null
    step_number: number | null
  }

  export type InstructionsMinAggregateOutputType = {
    id: number | null
    meal_id: number | null
    step_number: number | null
    description: string | null
  }

  export type InstructionsMaxAggregateOutputType = {
    id: number | null
    meal_id: number | null
    step_number: number | null
    description: string | null
  }

  export type InstructionsCountAggregateOutputType = {
    id: number
    meal_id: number
    step_number: number
    description: number
    _all: number
  }


  export type InstructionsAvgAggregateInputType = {
    id?: true
    meal_id?: true
    step_number?: true
  }

  export type InstructionsSumAggregateInputType = {
    id?: true
    meal_id?: true
    step_number?: true
  }

  export type InstructionsMinAggregateInputType = {
    id?: true
    meal_id?: true
    step_number?: true
    description?: true
  }

  export type InstructionsMaxAggregateInputType = {
    id?: true
    meal_id?: true
    step_number?: true
    description?: true
  }

  export type InstructionsCountAggregateInputType = {
    id?: true
    meal_id?: true
    step_number?: true
    description?: true
    _all?: true
  }

  export type InstructionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to aggregate.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructions
    **/
    _count?: true | InstructionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructionsMaxAggregateInputType
  }

  export type GetInstructionsAggregateType<T extends InstructionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructions[P]>
      : GetScalarType<T[P], AggregateInstructions[P]>
  }




  export type InstructionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionsWhereInput
    orderBy?: InstructionsOrderByWithAggregationInput | InstructionsOrderByWithAggregationInput[]
    by: InstructionsScalarFieldEnum[] | InstructionsScalarFieldEnum
    having?: InstructionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructionsCountAggregateInputType | true
    _avg?: InstructionsAvgAggregateInputType
    _sum?: InstructionsSumAggregateInputType
    _min?: InstructionsMinAggregateInputType
    _max?: InstructionsMaxAggregateInputType
  }

  export type InstructionsGroupByOutputType = {
    id: number
    meal_id: number
    step_number: number
    description: string
    _count: InstructionsCountAggregateOutputType | null
    _avg: InstructionsAvgAggregateOutputType | null
    _sum: InstructionsSumAggregateOutputType | null
    _min: InstructionsMinAggregateOutputType | null
    _max: InstructionsMaxAggregateOutputType | null
  }

  type GetInstructionsGroupByPayload<T extends InstructionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructionsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructionsGroupByOutputType[P]>
        }
      >
    >


  export type InstructionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    step_number?: boolean
    description?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    step_number?: boolean
    description?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    step_number?: boolean
    description?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectScalar = {
    id?: boolean
    meal_id?: boolean
    step_number?: boolean
    description?: boolean
  }

  export type InstructionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meal_id" | "step_number" | "description", ExtArgs["result"]["instructions"]>
  export type InstructionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type InstructionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type InstructionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $InstructionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructions"
    objects: {
      Meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meal_id: number
      step_number: number
      description: string
    }, ExtArgs["result"]["instructions"]>
    composites: {}
  }

  type InstructionsGetPayload<S extends boolean | null | undefined | InstructionsDefaultArgs> = $Result.GetResult<Prisma.$InstructionsPayload, S>

  type InstructionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructionsCountAggregateInputType | true
    }

  export interface InstructionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructions'], meta: { name: 'Instructions' } }
    /**
     * Find zero or one Instructions that matches the filter.
     * @param {InstructionsFindUniqueArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructionsFindUniqueArgs>(args: SelectSubset<T, InstructionsFindUniqueArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructionsFindUniqueOrThrowArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructionsFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindFirstArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructionsFindFirstArgs>(args?: SelectSubset<T, InstructionsFindFirstArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindFirstOrThrowArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructionsFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructions
     * const instructions = await prisma.instructions.findMany()
     * 
     * // Get first 10 Instructions
     * const instructions = await prisma.instructions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructionsWithIdOnly = await prisma.instructions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructionsFindManyArgs>(args?: SelectSubset<T, InstructionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructions.
     * @param {InstructionsCreateArgs} args - Arguments to create a Instructions.
     * @example
     * // Create one Instructions
     * const Instructions = await prisma.instructions.create({
     *   data: {
     *     // ... data to create a Instructions
     *   }
     * })
     * 
     */
    create<T extends InstructionsCreateArgs>(args: SelectSubset<T, InstructionsCreateArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructions.
     * @param {InstructionsCreateManyArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instructions = await prisma.instructions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructionsCreateManyArgs>(args?: SelectSubset<T, InstructionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructions and returns the data saved in the database.
     * @param {InstructionsCreateManyAndReturnArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instructions = await prisma.instructions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructions and only return the `id`
     * const instructionsWithIdOnly = await prisma.instructions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructionsCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructions.
     * @param {InstructionsDeleteArgs} args - Arguments to delete one Instructions.
     * @example
     * // Delete one Instructions
     * const Instructions = await prisma.instructions.delete({
     *   where: {
     *     // ... filter to delete one Instructions
     *   }
     * })
     * 
     */
    delete<T extends InstructionsDeleteArgs>(args: SelectSubset<T, InstructionsDeleteArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructions.
     * @param {InstructionsUpdateArgs} args - Arguments to update one Instructions.
     * @example
     * // Update one Instructions
     * const instructions = await prisma.instructions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructionsUpdateArgs>(args: SelectSubset<T, InstructionsUpdateArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructions.
     * @param {InstructionsDeleteManyArgs} args - Arguments to filter Instructions to delete.
     * @example
     * // Delete a few Instructions
     * const { count } = await prisma.instructions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructionsDeleteManyArgs>(args?: SelectSubset<T, InstructionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructions
     * const instructions = await prisma.instructions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructionsUpdateManyArgs>(args: SelectSubset<T, InstructionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions and returns the data updated in the database.
     * @param {InstructionsUpdateManyAndReturnArgs} args - Arguments to update many Instructions.
     * @example
     * // Update many Instructions
     * const instructions = await prisma.instructions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructions and only return the `id`
     * const instructionsWithIdOnly = await prisma.instructions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructionsUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructions.
     * @param {InstructionsUpsertArgs} args - Arguments to update or create a Instructions.
     * @example
     * // Update or create a Instructions
     * const instructions = await prisma.instructions.upsert({
     *   create: {
     *     // ... data to create a Instructions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructions we want to update
     *   }
     * })
     */
    upsert<T extends InstructionsUpsertArgs>(args: SelectSubset<T, InstructionsUpsertArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsCountArgs} args - Arguments to filter Instructions to count.
     * @example
     * // Count the number of Instructions
     * const count = await prisma.instructions.count({
     *   where: {
     *     // ... the filter for the Instructions we want to count
     *   }
     * })
    **/
    count<T extends InstructionsCountArgs>(
      args?: Subset<T, InstructionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructionsAggregateArgs>(args: Subset<T, InstructionsAggregateArgs>): Prisma.PrismaPromise<GetInstructionsAggregateType<T>>

    /**
     * Group by Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsGroupByArgs} args - Group by arguments.
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
      T extends InstructionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructionsGroupByArgs['orderBy'] }
        : { orderBy?: InstructionsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructions model
   */
  readonly fields: InstructionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructions model
   */
  interface InstructionsFieldRefs {
    readonly id: FieldRef<"Instructions", 'Int'>
    readonly meal_id: FieldRef<"Instructions", 'Int'>
    readonly step_number: FieldRef<"Instructions", 'Int'>
    readonly description: FieldRef<"Instructions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructions findUnique
   */
  export type InstructionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions findUniqueOrThrow
   */
  export type InstructionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions findFirst
   */
  export type InstructionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions findFirstOrThrow
   */
  export type InstructionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions findMany
   */
  export type InstructionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions create
   */
  export type InstructionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructions.
     */
    data: XOR<InstructionsCreateInput, InstructionsUncheckedCreateInput>
  }

  /**
   * Instructions createMany
   */
  export type InstructionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructions.
     */
    data: InstructionsCreateManyInput | InstructionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instructions createManyAndReturn
   */
  export type InstructionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * The data used to create many Instructions.
     */
    data: InstructionsCreateManyInput | InstructionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructions update
   */
  export type InstructionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructions.
     */
    data: XOR<InstructionsUpdateInput, InstructionsUncheckedUpdateInput>
    /**
     * Choose, which Instructions to update.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions updateMany
   */
  export type InstructionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
  }

  /**
   * Instructions updateManyAndReturn
   */
  export type InstructionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructions upsert
   */
  export type InstructionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructions to update in case it exists.
     */
    where: InstructionsWhereUniqueInput
    /**
     * In case the Instructions found by the `where` argument doesn't exist, create a new Instructions with this data.
     */
    create: XOR<InstructionsCreateInput, InstructionsUncheckedCreateInput>
    /**
     * In case the Instructions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructionsUpdateInput, InstructionsUncheckedUpdateInput>
  }

  /**
   * Instructions delete
   */
  export type InstructionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter which Instructions to delete.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions deleteMany
   */
  export type InstructionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to delete
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to delete.
     */
    limit?: number
  }

  /**
   * Instructions without action
   */
  export type InstructionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    prep_time: number | null
    cook_time: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    prep_time: number | null
    cook_time: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    cuisine: string | null
    diet_type: string | null
    prep_time: number | null
    cook_time: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    cuisine: string | null
    diet_type: string | null
    prep_time: number | null
    cook_time: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    name: number
    category: number
    cuisine: number
    diet_type: number
    prep_time: number
    cook_time: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    prep_time?: true
    cook_time?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    prep_time?: true
    cook_time?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    cuisine?: true
    diet_type?: true
    prep_time?: true
    cook_time?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    cuisine?: true
    diet_type?: true
    prep_time?: true
    cook_time?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    cuisine?: true
    diet_type?: true
    prep_time?: true
    cook_time?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    cuisine?: boolean
    diet_type?: boolean
    prep_time?: boolean
    cook_time?: boolean
    Favorite?: boolean | Meal$FavoriteArgs<ExtArgs>
    Ingredients?: boolean | Meal$IngredientsArgs<ExtArgs>
    Instructions?: boolean | Meal$InstructionsArgs<ExtArgs>
    Meal_Tags?: boolean | Meal$Meal_TagsArgs<ExtArgs>
    Nutrition?: boolean | Meal$NutritionArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    cuisine?: boolean
    diet_type?: boolean
    prep_time?: boolean
    cook_time?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    cuisine?: boolean
    diet_type?: boolean
    prep_time?: boolean
    cook_time?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    cuisine?: boolean
    diet_type?: boolean
    prep_time?: boolean
    cook_time?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "cuisine" | "diet_type" | "prep_time" | "cook_time", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | Meal$FavoriteArgs<ExtArgs>
    Ingredients?: boolean | Meal$IngredientsArgs<ExtArgs>
    Instructions?: boolean | Meal$InstructionsArgs<ExtArgs>
    Meal_Tags?: boolean | Meal$Meal_TagsArgs<ExtArgs>
    Nutrition?: boolean | Meal$NutritionArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
      Ingredients: Prisma.$IngredientsPayload<ExtArgs>[]
      Instructions: Prisma.$InstructionsPayload<ExtArgs>[]
      Meal_Tags: Prisma.$Meal_TagsPayload<ExtArgs>[]
      Nutrition: Prisma.$NutritionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
      cuisine: string
      diet_type: string
      prep_time: number
      cook_time: number
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Favorite<T extends Meal$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, Meal$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ingredients<T extends Meal$IngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$IngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Instructions<T extends Meal$InstructionsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$InstructionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Meal_Tags<T extends Meal$Meal_TagsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$Meal_TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Nutrition<T extends Meal$NutritionArgs<ExtArgs> = {}>(args?: Subset<T, Meal$NutritionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly category: FieldRef<"Meal", 'String'>
    readonly cuisine: FieldRef<"Meal", 'String'>
    readonly diet_type: FieldRef<"Meal", 'String'>
    readonly prep_time: FieldRef<"Meal", 'Int'>
    readonly cook_time: FieldRef<"Meal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.Favorite
   */
  export type Meal$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Meal.Ingredients
   */
  export type Meal$IngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    cursor?: IngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Meal.Instructions
   */
  export type Meal$InstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    where?: InstructionsWhereInput
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    cursor?: InstructionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Meal.Meal_Tags
   */
  export type Meal$Meal_TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    where?: Meal_TagsWhereInput
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    cursor?: Meal_TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_TagsScalarFieldEnum | Meal_TagsScalarFieldEnum[]
  }

  /**
   * Meal.Nutrition
   */
  export type Meal$NutritionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    where?: NutritionWhereInput
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    cursor?: NutritionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Meal_Tags
   */

  export type AggregateMeal_Tags = {
    _count: Meal_TagsCountAggregateOutputType | null
    _avg: Meal_TagsAvgAggregateOutputType | null
    _sum: Meal_TagsSumAggregateOutputType | null
    _min: Meal_TagsMinAggregateOutputType | null
    _max: Meal_TagsMaxAggregateOutputType | null
  }

  export type Meal_TagsAvgAggregateOutputType = {
    meal_id: number | null
    tag_id: number | null
  }

  export type Meal_TagsSumAggregateOutputType = {
    meal_id: number | null
    tag_id: number | null
  }

  export type Meal_TagsMinAggregateOutputType = {
    meal_id: number | null
    tag_id: number | null
  }

  export type Meal_TagsMaxAggregateOutputType = {
    meal_id: number | null
    tag_id: number | null
  }

  export type Meal_TagsCountAggregateOutputType = {
    meal_id: number
    tag_id: number
    _all: number
  }


  export type Meal_TagsAvgAggregateInputType = {
    meal_id?: true
    tag_id?: true
  }

  export type Meal_TagsSumAggregateInputType = {
    meal_id?: true
    tag_id?: true
  }

  export type Meal_TagsMinAggregateInputType = {
    meal_id?: true
    tag_id?: true
  }

  export type Meal_TagsMaxAggregateInputType = {
    meal_id?: true
    tag_id?: true
  }

  export type Meal_TagsCountAggregateInputType = {
    meal_id?: true
    tag_id?: true
    _all?: true
  }

  export type Meal_TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal_Tags to aggregate.
     */
    where?: Meal_TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meal_Tags to fetch.
     */
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Meal_TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meal_Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meal_Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meal_Tags
    **/
    _count?: true | Meal_TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meal_TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meal_TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meal_TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meal_TagsMaxAggregateInputType
  }

  export type GetMeal_TagsAggregateType<T extends Meal_TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal_Tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal_Tags[P]>
      : GetScalarType<T[P], AggregateMeal_Tags[P]>
  }




  export type Meal_TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meal_TagsWhereInput
    orderBy?: Meal_TagsOrderByWithAggregationInput | Meal_TagsOrderByWithAggregationInput[]
    by: Meal_TagsScalarFieldEnum[] | Meal_TagsScalarFieldEnum
    having?: Meal_TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meal_TagsCountAggregateInputType | true
    _avg?: Meal_TagsAvgAggregateInputType
    _sum?: Meal_TagsSumAggregateInputType
    _min?: Meal_TagsMinAggregateInputType
    _max?: Meal_TagsMaxAggregateInputType
  }

  export type Meal_TagsGroupByOutputType = {
    meal_id: number
    tag_id: number
    _count: Meal_TagsCountAggregateOutputType | null
    _avg: Meal_TagsAvgAggregateOutputType | null
    _sum: Meal_TagsSumAggregateOutputType | null
    _min: Meal_TagsMinAggregateOutputType | null
    _max: Meal_TagsMaxAggregateOutputType | null
  }

  type GetMeal_TagsGroupByPayload<T extends Meal_TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meal_TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meal_TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meal_TagsGroupByOutputType[P]>
            : GetScalarType<T[P], Meal_TagsGroupByOutputType[P]>
        }
      >
    >


  export type Meal_TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meal_id?: boolean
    tag_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_Tags"]>

  export type Meal_TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meal_id?: boolean
    tag_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_Tags"]>

  export type Meal_TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meal_id?: boolean
    tag_id?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_Tags"]>

  export type Meal_TagsSelectScalar = {
    meal_id?: boolean
    tag_id?: boolean
  }

  export type Meal_TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"meal_id" | "tag_id", ExtArgs["result"]["meal_Tags"]>
  export type Meal_TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }
  export type Meal_TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }
  export type Meal_TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }

  export type $Meal_TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal_Tags"
    objects: {
      Meal: Prisma.$MealPayload<ExtArgs>
      Tags: Prisma.$TagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      meal_id: number
      tag_id: number
    }, ExtArgs["result"]["meal_Tags"]>
    composites: {}
  }

  type Meal_TagsGetPayload<S extends boolean | null | undefined | Meal_TagsDefaultArgs> = $Result.GetResult<Prisma.$Meal_TagsPayload, S>

  type Meal_TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Meal_TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meal_TagsCountAggregateInputType | true
    }

  export interface Meal_TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal_Tags'], meta: { name: 'Meal_Tags' } }
    /**
     * Find zero or one Meal_Tags that matches the filter.
     * @param {Meal_TagsFindUniqueArgs} args - Arguments to find a Meal_Tags
     * @example
     * // Get one Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Meal_TagsFindUniqueArgs>(args: SelectSubset<T, Meal_TagsFindUniqueArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal_Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Meal_TagsFindUniqueOrThrowArgs} args - Arguments to find a Meal_Tags
     * @example
     * // Get one Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Meal_TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, Meal_TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsFindFirstArgs} args - Arguments to find a Meal_Tags
     * @example
     * // Get one Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Meal_TagsFindFirstArgs>(args?: SelectSubset<T, Meal_TagsFindFirstArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsFindFirstOrThrowArgs} args - Arguments to find a Meal_Tags
     * @example
     * // Get one Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Meal_TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, Meal_TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meal_Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findMany()
     * 
     * // Get first 10 Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.findMany({ take: 10 })
     * 
     * // Only select the `meal_id`
     * const meal_TagsWithMeal_idOnly = await prisma.meal_Tags.findMany({ select: { meal_id: true } })
     * 
     */
    findMany<T extends Meal_TagsFindManyArgs>(args?: SelectSubset<T, Meal_TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal_Tags.
     * @param {Meal_TagsCreateArgs} args - Arguments to create a Meal_Tags.
     * @example
     * // Create one Meal_Tags
     * const Meal_Tags = await prisma.meal_Tags.create({
     *   data: {
     *     // ... data to create a Meal_Tags
     *   }
     * })
     * 
     */
    create<T extends Meal_TagsCreateArgs>(args: SelectSubset<T, Meal_TagsCreateArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meal_Tags.
     * @param {Meal_TagsCreateManyArgs} args - Arguments to create many Meal_Tags.
     * @example
     * // Create many Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Meal_TagsCreateManyArgs>(args?: SelectSubset<T, Meal_TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meal_Tags and returns the data saved in the database.
     * @param {Meal_TagsCreateManyAndReturnArgs} args - Arguments to create many Meal_Tags.
     * @example
     * // Create many Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meal_Tags and only return the `meal_id`
     * const meal_TagsWithMeal_idOnly = await prisma.meal_Tags.createManyAndReturn({
     *   select: { meal_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Meal_TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, Meal_TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal_Tags.
     * @param {Meal_TagsDeleteArgs} args - Arguments to delete one Meal_Tags.
     * @example
     * // Delete one Meal_Tags
     * const Meal_Tags = await prisma.meal_Tags.delete({
     *   where: {
     *     // ... filter to delete one Meal_Tags
     *   }
     * })
     * 
     */
    delete<T extends Meal_TagsDeleteArgs>(args: SelectSubset<T, Meal_TagsDeleteArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal_Tags.
     * @param {Meal_TagsUpdateArgs} args - Arguments to update one Meal_Tags.
     * @example
     * // Update one Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Meal_TagsUpdateArgs>(args: SelectSubset<T, Meal_TagsUpdateArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meal_Tags.
     * @param {Meal_TagsDeleteManyArgs} args - Arguments to filter Meal_Tags to delete.
     * @example
     * // Delete a few Meal_Tags
     * const { count } = await prisma.meal_Tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Meal_TagsDeleteManyArgs>(args?: SelectSubset<T, Meal_TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Meal_TagsUpdateManyArgs>(args: SelectSubset<T, Meal_TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_Tags and returns the data updated in the database.
     * @param {Meal_TagsUpdateManyAndReturnArgs} args - Arguments to update many Meal_Tags.
     * @example
     * // Update many Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meal_Tags and only return the `meal_id`
     * const meal_TagsWithMeal_idOnly = await prisma.meal_Tags.updateManyAndReturn({
     *   select: { meal_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Meal_TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, Meal_TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal_Tags.
     * @param {Meal_TagsUpsertArgs} args - Arguments to update or create a Meal_Tags.
     * @example
     * // Update or create a Meal_Tags
     * const meal_Tags = await prisma.meal_Tags.upsert({
     *   create: {
     *     // ... data to create a Meal_Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal_Tags we want to update
     *   }
     * })
     */
    upsert<T extends Meal_TagsUpsertArgs>(args: SelectSubset<T, Meal_TagsUpsertArgs<ExtArgs>>): Prisma__Meal_TagsClient<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meal_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsCountArgs} args - Arguments to filter Meal_Tags to count.
     * @example
     * // Count the number of Meal_Tags
     * const count = await prisma.meal_Tags.count({
     *   where: {
     *     // ... the filter for the Meal_Tags we want to count
     *   }
     * })
    **/
    count<T extends Meal_TagsCountArgs>(
      args?: Subset<T, Meal_TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meal_TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Meal_TagsAggregateArgs>(args: Subset<T, Meal_TagsAggregateArgs>): Prisma.PrismaPromise<GetMeal_TagsAggregateType<T>>

    /**
     * Group by Meal_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_TagsGroupByArgs} args - Group by arguments.
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
      T extends Meal_TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Meal_TagsGroupByArgs['orderBy'] }
        : { orderBy?: Meal_TagsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Meal_TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeal_TagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal_Tags model
   */
  readonly fields: Meal_TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal_Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Meal_TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tags<T extends TagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagsDefaultArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal_Tags model
   */
  interface Meal_TagsFieldRefs {
    readonly meal_id: FieldRef<"Meal_Tags", 'Int'>
    readonly tag_id: FieldRef<"Meal_Tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Meal_Tags findUnique
   */
  export type Meal_TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter, which Meal_Tags to fetch.
     */
    where: Meal_TagsWhereUniqueInput
  }

  /**
   * Meal_Tags findUniqueOrThrow
   */
  export type Meal_TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter, which Meal_Tags to fetch.
     */
    where: Meal_TagsWhereUniqueInput
  }

  /**
   * Meal_Tags findFirst
   */
  export type Meal_TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter, which Meal_Tags to fetch.
     */
    where?: Meal_TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meal_Tags to fetch.
     */
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meal_Tags.
     */
    cursor?: Meal_TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meal_Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meal_Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meal_Tags.
     */
    distinct?: Meal_TagsScalarFieldEnum | Meal_TagsScalarFieldEnum[]
  }

  /**
   * Meal_Tags findFirstOrThrow
   */
  export type Meal_TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter, which Meal_Tags to fetch.
     */
    where?: Meal_TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meal_Tags to fetch.
     */
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meal_Tags.
     */
    cursor?: Meal_TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meal_Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meal_Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meal_Tags.
     */
    distinct?: Meal_TagsScalarFieldEnum | Meal_TagsScalarFieldEnum[]
  }

  /**
   * Meal_Tags findMany
   */
  export type Meal_TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter, which Meal_Tags to fetch.
     */
    where?: Meal_TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meal_Tags to fetch.
     */
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meal_Tags.
     */
    cursor?: Meal_TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meal_Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meal_Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meal_Tags.
     */
    distinct?: Meal_TagsScalarFieldEnum | Meal_TagsScalarFieldEnum[]
  }

  /**
   * Meal_Tags create
   */
  export type Meal_TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal_Tags.
     */
    data: XOR<Meal_TagsCreateInput, Meal_TagsUncheckedCreateInput>
  }

  /**
   * Meal_Tags createMany
   */
  export type Meal_TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meal_Tags.
     */
    data: Meal_TagsCreateManyInput | Meal_TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal_Tags createManyAndReturn
   */
  export type Meal_TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Meal_Tags.
     */
    data: Meal_TagsCreateManyInput | Meal_TagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal_Tags update
   */
  export type Meal_TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal_Tags.
     */
    data: XOR<Meal_TagsUpdateInput, Meal_TagsUncheckedUpdateInput>
    /**
     * Choose, which Meal_Tags to update.
     */
    where: Meal_TagsWhereUniqueInput
  }

  /**
   * Meal_Tags updateMany
   */
  export type Meal_TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meal_Tags.
     */
    data: XOR<Meal_TagsUpdateManyMutationInput, Meal_TagsUncheckedUpdateManyInput>
    /**
     * Filter which Meal_Tags to update
     */
    where?: Meal_TagsWhereInput
    /**
     * Limit how many Meal_Tags to update.
     */
    limit?: number
  }

  /**
   * Meal_Tags updateManyAndReturn
   */
  export type Meal_TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * The data used to update Meal_Tags.
     */
    data: XOR<Meal_TagsUpdateManyMutationInput, Meal_TagsUncheckedUpdateManyInput>
    /**
     * Filter which Meal_Tags to update
     */
    where?: Meal_TagsWhereInput
    /**
     * Limit how many Meal_Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal_Tags upsert
   */
  export type Meal_TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal_Tags to update in case it exists.
     */
    where: Meal_TagsWhereUniqueInput
    /**
     * In case the Meal_Tags found by the `where` argument doesn't exist, create a new Meal_Tags with this data.
     */
    create: XOR<Meal_TagsCreateInput, Meal_TagsUncheckedCreateInput>
    /**
     * In case the Meal_Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Meal_TagsUpdateInput, Meal_TagsUncheckedUpdateInput>
  }

  /**
   * Meal_Tags delete
   */
  export type Meal_TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    /**
     * Filter which Meal_Tags to delete.
     */
    where: Meal_TagsWhereUniqueInput
  }

  /**
   * Meal_Tags deleteMany
   */
  export type Meal_TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal_Tags to delete
     */
    where?: Meal_TagsWhereInput
    /**
     * Limit how many Meal_Tags to delete.
     */
    limit?: number
  }

  /**
   * Meal_Tags without action
   */
  export type Meal_TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
  }


  /**
   * Model Nutrition
   */

  export type AggregateNutrition = {
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  export type NutritionAvgAggregateOutputType = {
    id: number | null
    meal_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type NutritionSumAggregateOutputType = {
    id: number | null
    meal_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type NutritionMinAggregateOutputType = {
    id: number | null
    meal_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type NutritionMaxAggregateOutputType = {
    id: number | null
    meal_id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type NutritionCountAggregateOutputType = {
    id: number
    meal_id: number
    calories: number
    protein: number
    carbs: number
    fat: number
    _all: number
  }


  export type NutritionAvgAggregateInputType = {
    id?: true
    meal_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type NutritionSumAggregateInputType = {
    id?: true
    meal_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type NutritionMinAggregateInputType = {
    id?: true
    meal_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type NutritionMaxAggregateInputType = {
    id?: true
    meal_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type NutritionCountAggregateInputType = {
    id?: true
    meal_id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    _all?: true
  }

  export type NutritionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutrition to aggregate.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutritions
    **/
    _count?: true | NutritionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionMaxAggregateInputType
  }

  export type GetNutritionAggregateType<T extends NutritionAggregateArgs> = {
        [P in keyof T & keyof AggregateNutrition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutrition[P]>
      : GetScalarType<T[P], AggregateNutrition[P]>
  }




  export type NutritionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionWhereInput
    orderBy?: NutritionOrderByWithAggregationInput | NutritionOrderByWithAggregationInput[]
    by: NutritionScalarFieldEnum[] | NutritionScalarFieldEnum
    having?: NutritionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionCountAggregateInputType | true
    _avg?: NutritionAvgAggregateInputType
    _sum?: NutritionSumAggregateInputType
    _min?: NutritionMinAggregateInputType
    _max?: NutritionMaxAggregateInputType
  }

  export type NutritionGroupByOutputType = {
    id: number
    meal_id: number
    calories: number
    protein: number
    carbs: number
    fat: number
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  type GetNutritionGroupByPayload<T extends NutritionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionGroupByOutputType[P]>
        }
      >
    >


  export type NutritionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutrition"]>

  export type NutritionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutrition"]>

  export type NutritionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_id?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutrition"]>

  export type NutritionSelectScalar = {
    id?: boolean
    meal_id?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
  }

  export type NutritionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meal_id" | "calories" | "protein" | "carbs" | "fat", ExtArgs["result"]["nutrition"]>
  export type NutritionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type NutritionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type NutritionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $NutritionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutrition"
    objects: {
      Meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meal_id: number
      calories: number
      protein: number
      carbs: number
      fat: number
    }, ExtArgs["result"]["nutrition"]>
    composites: {}
  }

  type NutritionGetPayload<S extends boolean | null | undefined | NutritionDefaultArgs> = $Result.GetResult<Prisma.$NutritionPayload, S>

  type NutritionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionCountAggregateInputType | true
    }

  export interface NutritionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nutrition'], meta: { name: 'Nutrition' } }
    /**
     * Find zero or one Nutrition that matches the filter.
     * @param {NutritionFindUniqueArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionFindUniqueArgs>(args: SelectSubset<T, NutritionFindUniqueArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nutrition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionFindUniqueOrThrowArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutrition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindFirstArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionFindFirstArgs>(args?: SelectSubset<T, NutritionFindFirstArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutrition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindFirstOrThrowArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutritions
     * const nutritions = await prisma.nutrition.findMany()
     * 
     * // Get first 10 Nutritions
     * const nutritions = await prisma.nutrition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionFindManyArgs>(args?: SelectSubset<T, NutritionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nutrition.
     * @param {NutritionCreateArgs} args - Arguments to create a Nutrition.
     * @example
     * // Create one Nutrition
     * const Nutrition = await prisma.nutrition.create({
     *   data: {
     *     // ... data to create a Nutrition
     *   }
     * })
     * 
     */
    create<T extends NutritionCreateArgs>(args: SelectSubset<T, NutritionCreateArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nutritions.
     * @param {NutritionCreateManyArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutrition = await prisma.nutrition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionCreateManyArgs>(args?: SelectSubset<T, NutritionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nutritions and returns the data saved in the database.
     * @param {NutritionCreateManyAndReturnArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutrition = await prisma.nutrition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nutritions and only return the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nutrition.
     * @param {NutritionDeleteArgs} args - Arguments to delete one Nutrition.
     * @example
     * // Delete one Nutrition
     * const Nutrition = await prisma.nutrition.delete({
     *   where: {
     *     // ... filter to delete one Nutrition
     *   }
     * })
     * 
     */
    delete<T extends NutritionDeleteArgs>(args: SelectSubset<T, NutritionDeleteArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nutrition.
     * @param {NutritionUpdateArgs} args - Arguments to update one Nutrition.
     * @example
     * // Update one Nutrition
     * const nutrition = await prisma.nutrition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionUpdateArgs>(args: SelectSubset<T, NutritionUpdateArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nutritions.
     * @param {NutritionDeleteManyArgs} args - Arguments to filter Nutritions to delete.
     * @example
     * // Delete a few Nutritions
     * const { count } = await prisma.nutrition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionDeleteManyArgs>(args?: SelectSubset<T, NutritionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutritions
     * const nutrition = await prisma.nutrition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionUpdateManyArgs>(args: SelectSubset<T, NutritionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions and returns the data updated in the database.
     * @param {NutritionUpdateManyAndReturnArgs} args - Arguments to update many Nutritions.
     * @example
     * // Update many Nutritions
     * const nutrition = await prisma.nutrition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nutritions and only return the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NutritionUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nutrition.
     * @param {NutritionUpsertArgs} args - Arguments to update or create a Nutrition.
     * @example
     * // Update or create a Nutrition
     * const nutrition = await prisma.nutrition.upsert({
     *   create: {
     *     // ... data to create a Nutrition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutrition we want to update
     *   }
     * })
     */
    upsert<T extends NutritionUpsertArgs>(args: SelectSubset<T, NutritionUpsertArgs<ExtArgs>>): Prisma__NutritionClient<$Result.GetResult<Prisma.$NutritionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionCountArgs} args - Arguments to filter Nutritions to count.
     * @example
     * // Count the number of Nutritions
     * const count = await prisma.nutrition.count({
     *   where: {
     *     // ... the filter for the Nutritions we want to count
     *   }
     * })
    **/
    count<T extends NutritionCountArgs>(
      args?: Subset<T, NutritionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NutritionAggregateArgs>(args: Subset<T, NutritionAggregateArgs>): Prisma.PrismaPromise<GetNutritionAggregateType<T>>

    /**
     * Group by Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionGroupByArgs} args - Group by arguments.
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
      T extends NutritionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionGroupByArgs['orderBy'] }
        : { orderBy?: NutritionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nutrition model
   */
  readonly fields: NutritionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutrition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nutrition model
   */
  interface NutritionFieldRefs {
    readonly id: FieldRef<"Nutrition", 'Int'>
    readonly meal_id: FieldRef<"Nutrition", 'Int'>
    readonly calories: FieldRef<"Nutrition", 'Int'>
    readonly protein: FieldRef<"Nutrition", 'Int'>
    readonly carbs: FieldRef<"Nutrition", 'Int'>
    readonly fat: FieldRef<"Nutrition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nutrition findUnique
   */
  export type NutritionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition findUniqueOrThrow
   */
  export type NutritionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition findFirst
   */
  export type NutritionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition findFirstOrThrow
   */
  export type NutritionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutrition to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition findMany
   */
  export type NutritionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionOrderByWithRelationInput | NutritionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutritions.
     */
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionScalarFieldEnum | NutritionScalarFieldEnum[]
  }

  /**
   * Nutrition create
   */
  export type NutritionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The data needed to create a Nutrition.
     */
    data: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
  }

  /**
   * Nutrition createMany
   */
  export type NutritionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionCreateManyInput | NutritionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutrition createManyAndReturn
   */
  export type NutritionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionCreateManyInput | NutritionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nutrition update
   */
  export type NutritionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The data needed to update a Nutrition.
     */
    data: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
    /**
     * Choose, which Nutrition to update.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition updateMany
   */
  export type NutritionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionWhereInput
    /**
     * Limit how many Nutritions to update.
     */
    limit?: number
  }

  /**
   * Nutrition updateManyAndReturn
   */
  export type NutritionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionWhereInput
    /**
     * Limit how many Nutritions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nutrition upsert
   */
  export type NutritionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * The filter to search for the Nutrition to update in case it exists.
     */
    where: NutritionWhereUniqueInput
    /**
     * In case the Nutrition found by the `where` argument doesn't exist, create a new Nutrition with this data.
     */
    create: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
    /**
     * In case the Nutrition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
  }

  /**
   * Nutrition delete
   */
  export type NutritionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
    /**
     * Filter which Nutrition to delete.
     */
    where: NutritionWhereUniqueInput
  }

  /**
   * Nutrition deleteMany
   */
  export type NutritionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to delete
     */
    where?: NutritionWhereInput
    /**
     * Limit how many Nutritions to delete.
     */
    limit?: number
  }

  /**
   * Nutrition without action
   */
  export type NutritionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutrition
     */
    select?: NutritionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutrition
     */
    omit?: NutritionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Meal_Tags?: boolean | Tags$Meal_TagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tags"]>
  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meal_Tags?: boolean | Tags$Meal_TagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      Meal_Tags: Prisma.$Meal_TagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsFindUniqueArgs>(args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsFindFirstArgs>(args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsFindManyArgs>(args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends TagsCreateArgs>(args: SelectSubset<T, TagsCreateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsCreateManyArgs>(args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends TagsDeleteArgs>(args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsUpdateArgs>(args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsDeleteManyArgs>(args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsUpdateManyArgs>(args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends TagsUpsertArgs>(args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
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
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meal_Tags<T extends Tags$Meal_TagsArgs<ExtArgs> = {}>(args?: Subset<T, Tags$Meal_TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meal_TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tags model
   */
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly name: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags createManyAndReturn
   */
  export type TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags updateManyAndReturn
   */
  export type TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tags.Meal_Tags
   */
  export type Tags$Meal_TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal_Tags
     */
    select?: Meal_TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal_Tags
     */
    omit?: Meal_TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meal_TagsInclude<ExtArgs> | null
    where?: Meal_TagsWhereInput
    orderBy?: Meal_TagsOrderByWithRelationInput | Meal_TagsOrderByWithRelationInput[]
    cursor?: Meal_TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_TagsScalarFieldEnum | Meal_TagsScalarFieldEnum[]
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Favorite<T extends User$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Favorite
   */
  export type User$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    meal_id: 'meal_id'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    meal_id: 'meal_id',
    name: 'name'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const InstructionsScalarFieldEnum: {
    id: 'id',
    meal_id: 'meal_id',
    step_number: 'step_number',
    description: 'description'
  };

  export type InstructionsScalarFieldEnum = (typeof InstructionsScalarFieldEnum)[keyof typeof InstructionsScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    cuisine: 'cuisine',
    diet_type: 'diet_type',
    prep_time: 'prep_time',
    cook_time: 'cook_time'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const Meal_TagsScalarFieldEnum: {
    meal_id: 'meal_id',
    tag_id: 'tag_id'
  };

  export type Meal_TagsScalarFieldEnum = (typeof Meal_TagsScalarFieldEnum)[keyof typeof Meal_TagsScalarFieldEnum]


  export const NutritionScalarFieldEnum: {
    id: 'id',
    meal_id: 'meal_id',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat'
  };

  export type NutritionScalarFieldEnum = (typeof NutritionScalarFieldEnum)[keyof typeof NutritionScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    user_id?: IntFilter<"Favorite"> | number
    meal_id?: IntFilter<"Favorite"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
    Meal?: MealOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    user_id?: IntFilter<"Favorite"> | number
    meal_id?: IntFilter<"Favorite"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    user_id?: IntWithAggregatesFilter<"Favorite"> | number
    meal_id?: IntWithAggregatesFilter<"Favorite"> | number
  }

  export type IngredientsWhereInput = {
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    meal_id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type IngredientsOrderByWithRelationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    name?: SortOrder
    Meal?: MealOrderByWithRelationInput
  }

  export type IngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    meal_id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type IngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    name?: SortOrder
    _count?: IngredientsCountOrderByAggregateInput
    _avg?: IngredientsAvgOrderByAggregateInput
    _max?: IngredientsMaxOrderByAggregateInput
    _min?: IngredientsMinOrderByAggregateInput
    _sum?: IngredientsSumOrderByAggregateInput
  }

  export type IngredientsScalarWhereWithAggregatesInput = {
    AND?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    OR?: IngredientsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredients"> | number
    meal_id?: IntWithAggregatesFilter<"Ingredients"> | number
    name?: StringWithAggregatesFilter<"Ingredients"> | string
  }

  export type InstructionsWhereInput = {
    AND?: InstructionsWhereInput | InstructionsWhereInput[]
    OR?: InstructionsWhereInput[]
    NOT?: InstructionsWhereInput | InstructionsWhereInput[]
    id?: IntFilter<"Instructions"> | number
    meal_id?: IntFilter<"Instructions"> | number
    step_number?: IntFilter<"Instructions"> | number
    description?: StringFilter<"Instructions"> | string
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type InstructionsOrderByWithRelationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
    description?: SortOrder
    Meal?: MealOrderByWithRelationInput
  }

  export type InstructionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructionsWhereInput | InstructionsWhereInput[]
    OR?: InstructionsWhereInput[]
    NOT?: InstructionsWhereInput | InstructionsWhereInput[]
    meal_id?: IntFilter<"Instructions"> | number
    step_number?: IntFilter<"Instructions"> | number
    description?: StringFilter<"Instructions"> | string
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type InstructionsOrderByWithAggregationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
    description?: SortOrder
    _count?: InstructionsCountOrderByAggregateInput
    _avg?: InstructionsAvgOrderByAggregateInput
    _max?: InstructionsMaxOrderByAggregateInput
    _min?: InstructionsMinOrderByAggregateInput
    _sum?: InstructionsSumOrderByAggregateInput
  }

  export type InstructionsScalarWhereWithAggregatesInput = {
    AND?: InstructionsScalarWhereWithAggregatesInput | InstructionsScalarWhereWithAggregatesInput[]
    OR?: InstructionsScalarWhereWithAggregatesInput[]
    NOT?: InstructionsScalarWhereWithAggregatesInput | InstructionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instructions"> | number
    meal_id?: IntWithAggregatesFilter<"Instructions"> | number
    step_number?: IntWithAggregatesFilter<"Instructions"> | number
    description?: StringWithAggregatesFilter<"Instructions"> | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    name?: StringFilter<"Meal"> | string
    category?: StringFilter<"Meal"> | string
    cuisine?: StringFilter<"Meal"> | string
    diet_type?: StringFilter<"Meal"> | string
    prep_time?: IntFilter<"Meal"> | number
    cook_time?: IntFilter<"Meal"> | number
    Favorite?: FavoriteListRelationFilter
    Ingredients?: IngredientsListRelationFilter
    Instructions?: InstructionsListRelationFilter
    Meal_Tags?: Meal_TagsListRelationFilter
    Nutrition?: NutritionListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    cuisine?: SortOrder
    diet_type?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
    Favorite?: FavoriteOrderByRelationAggregateInput
    Ingredients?: IngredientsOrderByRelationAggregateInput
    Instructions?: InstructionsOrderByRelationAggregateInput
    Meal_Tags?: Meal_TagsOrderByRelationAggregateInput
    Nutrition?: NutritionOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    name?: StringFilter<"Meal"> | string
    category?: StringFilter<"Meal"> | string
    cuisine?: StringFilter<"Meal"> | string
    diet_type?: StringFilter<"Meal"> | string
    prep_time?: IntFilter<"Meal"> | number
    cook_time?: IntFilter<"Meal"> | number
    Favorite?: FavoriteListRelationFilter
    Ingredients?: IngredientsListRelationFilter
    Instructions?: InstructionsListRelationFilter
    Meal_Tags?: Meal_TagsListRelationFilter
    Nutrition?: NutritionListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    cuisine?: SortOrder
    diet_type?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    name?: StringWithAggregatesFilter<"Meal"> | string
    category?: StringWithAggregatesFilter<"Meal"> | string
    cuisine?: StringWithAggregatesFilter<"Meal"> | string
    diet_type?: StringWithAggregatesFilter<"Meal"> | string
    prep_time?: IntWithAggregatesFilter<"Meal"> | number
    cook_time?: IntWithAggregatesFilter<"Meal"> | number
  }

  export type Meal_TagsWhereInput = {
    AND?: Meal_TagsWhereInput | Meal_TagsWhereInput[]
    OR?: Meal_TagsWhereInput[]
    NOT?: Meal_TagsWhereInput | Meal_TagsWhereInput[]
    meal_id?: IntFilter<"Meal_Tags"> | number
    tag_id?: IntFilter<"Meal_Tags"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    Tags?: XOR<TagsScalarRelationFilter, TagsWhereInput>
  }

  export type Meal_TagsOrderByWithRelationInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
    Meal?: MealOrderByWithRelationInput
    Tags?: TagsOrderByWithRelationInput
  }

  export type Meal_TagsWhereUniqueInput = Prisma.AtLeast<{
    meal_id_tag_id?: Meal_TagsMeal_idTag_idCompoundUniqueInput
    AND?: Meal_TagsWhereInput | Meal_TagsWhereInput[]
    OR?: Meal_TagsWhereInput[]
    NOT?: Meal_TagsWhereInput | Meal_TagsWhereInput[]
    meal_id?: IntFilter<"Meal_Tags"> | number
    tag_id?: IntFilter<"Meal_Tags"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    Tags?: XOR<TagsScalarRelationFilter, TagsWhereInput>
  }, "meal_id_tag_id">

  export type Meal_TagsOrderByWithAggregationInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
    _count?: Meal_TagsCountOrderByAggregateInput
    _avg?: Meal_TagsAvgOrderByAggregateInput
    _max?: Meal_TagsMaxOrderByAggregateInput
    _min?: Meal_TagsMinOrderByAggregateInput
    _sum?: Meal_TagsSumOrderByAggregateInput
  }

  export type Meal_TagsScalarWhereWithAggregatesInput = {
    AND?: Meal_TagsScalarWhereWithAggregatesInput | Meal_TagsScalarWhereWithAggregatesInput[]
    OR?: Meal_TagsScalarWhereWithAggregatesInput[]
    NOT?: Meal_TagsScalarWhereWithAggregatesInput | Meal_TagsScalarWhereWithAggregatesInput[]
    meal_id?: IntWithAggregatesFilter<"Meal_Tags"> | number
    tag_id?: IntWithAggregatesFilter<"Meal_Tags"> | number
  }

  export type NutritionWhereInput = {
    AND?: NutritionWhereInput | NutritionWhereInput[]
    OR?: NutritionWhereInput[]
    NOT?: NutritionWhereInput | NutritionWhereInput[]
    id?: IntFilter<"Nutrition"> | number
    meal_id?: IntFilter<"Nutrition"> | number
    calories?: IntFilter<"Nutrition"> | number
    protein?: IntFilter<"Nutrition"> | number
    carbs?: IntFilter<"Nutrition"> | number
    fat?: IntFilter<"Nutrition"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type NutritionOrderByWithRelationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    Meal?: MealOrderByWithRelationInput
  }

  export type NutritionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionWhereInput | NutritionWhereInput[]
    OR?: NutritionWhereInput[]
    NOT?: NutritionWhereInput | NutritionWhereInput[]
    meal_id?: IntFilter<"Nutrition"> | number
    calories?: IntFilter<"Nutrition"> | number
    protein?: IntFilter<"Nutrition"> | number
    carbs?: IntFilter<"Nutrition"> | number
    fat?: IntFilter<"Nutrition"> | number
    Meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type NutritionOrderByWithAggregationInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    _count?: NutritionCountOrderByAggregateInput
    _avg?: NutritionAvgOrderByAggregateInput
    _max?: NutritionMaxOrderByAggregateInput
    _min?: NutritionMinOrderByAggregateInput
    _sum?: NutritionSumOrderByAggregateInput
  }

  export type NutritionScalarWhereWithAggregatesInput = {
    AND?: NutritionScalarWhereWithAggregatesInput | NutritionScalarWhereWithAggregatesInput[]
    OR?: NutritionScalarWhereWithAggregatesInput[]
    NOT?: NutritionScalarWhereWithAggregatesInput | NutritionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nutrition"> | number
    meal_id?: IntWithAggregatesFilter<"Nutrition"> | number
    calories?: IntWithAggregatesFilter<"Nutrition"> | number
    protein?: IntWithAggregatesFilter<"Nutrition"> | number
    carbs?: IntWithAggregatesFilter<"Nutrition"> | number
    fat?: IntWithAggregatesFilter<"Nutrition"> | number
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    Meal_Tags?: Meal_TagsListRelationFilter
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Meal_Tags?: Meal_TagsOrderByRelationAggregateInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    Meal_Tags?: Meal_TagsListRelationFilter
  }, "id" | "name">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    name?: StringWithAggregatesFilter<"Tags"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Favorite?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    Favorite?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Favorite?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FavoriteCreateInput = {
    Meal: MealCreateNestedOneWithoutFavoriteInput
    User: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    user_id: number
    meal_id: number
  }

  export type FavoriteUpdateInput = {
    Meal?: MealUpdateOneRequiredWithoutFavoriteNestedInput
    User?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateManyInput = {
    id?: number
    user_id: number
    meal_id: number
  }

  export type FavoriteUpdateManyMutationInput = {

  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsCreateInput = {
    name: string
    Meal: MealCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientsUncheckedCreateInput = {
    id?: number
    meal_id: number
    name: string
  }

  export type IngredientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsCreateManyInput = {
    id?: number
    meal_id: number
    name: string
  }

  export type IngredientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsCreateInput = {
    step_number: number
    description: string
    Meal: MealCreateNestedOneWithoutInstructionsInput
  }

  export type InstructionsUncheckedCreateInput = {
    id?: number
    meal_id: number
    step_number: number
    description: string
  }

  export type InstructionsUpdateInput = {
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    Meal?: MealUpdateOneRequiredWithoutInstructionsNestedInput
  }

  export type InstructionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsCreateManyInput = {
    id?: number
    meal_id: number
    step_number: number
    description: string
  }

  export type InstructionsUpdateManyMutationInput = {
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MealCreateInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsCreateNestedManyWithoutMealInput
    Instructions?: InstructionsCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutMealInput
    Nutrition?: NutritionCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutMealInput
    Instructions?: InstructionsUncheckedCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutMealInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUncheckedUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUncheckedUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
  }

  export type MealUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
  }

  export type Meal_TagsCreateInput = {
    Meal: MealCreateNestedOneWithoutMeal_TagsInput
    Tags: TagsCreateNestedOneWithoutMeal_TagsInput
  }

  export type Meal_TagsUncheckedCreateInput = {
    meal_id: number
    tag_id: number
  }

  export type Meal_TagsUpdateInput = {
    Meal?: MealUpdateOneRequiredWithoutMeal_TagsNestedInput
    Tags?: TagsUpdateOneRequiredWithoutMeal_TagsNestedInput
  }

  export type Meal_TagsUncheckedUpdateInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type Meal_TagsCreateManyInput = {
    meal_id: number
    tag_id: number
  }

  export type Meal_TagsUpdateManyMutationInput = {

  }

  export type Meal_TagsUncheckedUpdateManyInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionCreateInput = {
    calories: number
    protein: number
    carbs: number
    fat: number
    Meal: MealCreateNestedOneWithoutNutritionInput
  }

  export type NutritionUncheckedCreateInput = {
    id?: number
    meal_id: number
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type NutritionUpdateInput = {
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    Meal?: MealUpdateOneRequiredWithoutNutritionNestedInput
  }

  export type NutritionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionCreateManyInput = {
    id?: number
    meal_id: number
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type NutritionUpdateManyMutationInput = {
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type TagsCreateInput = {
    name: string
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: number
    name: string
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Meal_Tags?: Meal_TagsUpdateManyWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagsCreateManyInput = {
    id?: number
    name: string
  }

  export type TagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    Favorite?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsAvgOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
  }

  export type IngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsSumOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type InstructionsCountOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
    description?: SortOrder
  }

  export type InstructionsAvgOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
  }

  export type InstructionsMaxOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
    description?: SortOrder
  }

  export type InstructionsMinOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
    description?: SortOrder
  }

  export type InstructionsSumOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    step_number?: SortOrder
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type IngredientsListRelationFilter = {
    every?: IngredientsWhereInput
    some?: IngredientsWhereInput
    none?: IngredientsWhereInput
  }

  export type InstructionsListRelationFilter = {
    every?: InstructionsWhereInput
    some?: InstructionsWhereInput
    none?: InstructionsWhereInput
  }

  export type Meal_TagsListRelationFilter = {
    every?: Meal_TagsWhereInput
    some?: Meal_TagsWhereInput
    none?: Meal_TagsWhereInput
  }

  export type NutritionListRelationFilter = {
    every?: NutritionWhereInput
    some?: NutritionWhereInput
    none?: NutritionWhereInput
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Meal_TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    cuisine?: SortOrder
    diet_type?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    cuisine?: SortOrder
    diet_type?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    cuisine?: SortOrder
    diet_type?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: TagsWhereInput
    isNot?: TagsWhereInput
  }

  export type Meal_TagsMeal_idTag_idCompoundUniqueInput = {
    meal_id: number
    tag_id: number
  }

  export type Meal_TagsCountOrderByAggregateInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
  }

  export type Meal_TagsAvgOrderByAggregateInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
  }

  export type Meal_TagsMaxOrderByAggregateInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
  }

  export type Meal_TagsMinOrderByAggregateInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
  }

  export type Meal_TagsSumOrderByAggregateInput = {
    meal_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NutritionCountOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type NutritionAvgOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type NutritionMaxOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type NutritionMinOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type NutritionSumOrderByAggregateInput = {
    id?: SortOrder
    meal_id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MealCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<MealCreateWithoutFavoriteInput, MealUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MealCreateOrConnectWithoutFavoriteInput
    connect?: MealWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<MealCreateWithoutFavoriteInput, MealUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MealCreateOrConnectWithoutFavoriteInput
    upsert?: MealUpsertWithoutFavoriteInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutFavoriteInput, MealUpdateWithoutFavoriteInput>, MealUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    upsert?: UserUpsertWithoutFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteInput, UserUpdateWithoutFavoriteInput>, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    connect?: MealWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MealUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    upsert?: MealUpsertWithoutIngredientsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutIngredientsInput, MealUpdateWithoutIngredientsInput>, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type MealCreateNestedOneWithoutInstructionsInput = {
    create?: XOR<MealCreateWithoutInstructionsInput, MealUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: MealCreateOrConnectWithoutInstructionsInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: XOR<MealCreateWithoutInstructionsInput, MealUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: MealCreateOrConnectWithoutInstructionsInput
    upsert?: MealUpsertWithoutInstructionsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutInstructionsInput, MealUpdateWithoutInstructionsInput>, MealUncheckedUpdateWithoutInstructionsInput>
  }

  export type FavoriteCreateNestedManyWithoutMealInput = {
    create?: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput> | FavoriteCreateWithoutMealInput[] | FavoriteUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutMealInput | FavoriteCreateOrConnectWithoutMealInput[]
    createMany?: FavoriteCreateManyMealInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IngredientsCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput> | IngredientsCreateWithoutMealInput[] | IngredientsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutMealInput | IngredientsCreateOrConnectWithoutMealInput[]
    createMany?: IngredientsCreateManyMealInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type InstructionsCreateNestedManyWithoutMealInput = {
    create?: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput> | InstructionsCreateWithoutMealInput[] | InstructionsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutMealInput | InstructionsCreateOrConnectWithoutMealInput[]
    createMany?: InstructionsCreateManyMealInputEnvelope
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
  }

  export type Meal_TagsCreateNestedManyWithoutMealInput = {
    create?: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput> | Meal_TagsCreateWithoutMealInput[] | Meal_TagsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutMealInput | Meal_TagsCreateOrConnectWithoutMealInput[]
    createMany?: Meal_TagsCreateManyMealInputEnvelope
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
  }

  export type NutritionCreateNestedManyWithoutMealInput = {
    create?: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput> | NutritionCreateWithoutMealInput[] | NutritionUncheckedCreateWithoutMealInput[]
    connectOrCreate?: NutritionCreateOrConnectWithoutMealInput | NutritionCreateOrConnectWithoutMealInput[]
    createMany?: NutritionCreateManyMealInputEnvelope
    connect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput> | FavoriteCreateWithoutMealInput[] | FavoriteUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutMealInput | FavoriteCreateOrConnectWithoutMealInput[]
    createMany?: FavoriteCreateManyMealInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IngredientsUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput> | IngredientsCreateWithoutMealInput[] | IngredientsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutMealInput | IngredientsCreateOrConnectWithoutMealInput[]
    createMany?: IngredientsCreateManyMealInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type InstructionsUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput> | InstructionsCreateWithoutMealInput[] | InstructionsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutMealInput | InstructionsCreateOrConnectWithoutMealInput[]
    createMany?: InstructionsCreateManyMealInputEnvelope
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
  }

  export type Meal_TagsUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput> | Meal_TagsCreateWithoutMealInput[] | Meal_TagsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutMealInput | Meal_TagsCreateOrConnectWithoutMealInput[]
    createMany?: Meal_TagsCreateManyMealInputEnvelope
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
  }

  export type NutritionUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput> | NutritionCreateWithoutMealInput[] | NutritionUncheckedCreateWithoutMealInput[]
    connectOrCreate?: NutritionCreateOrConnectWithoutMealInput | NutritionCreateOrConnectWithoutMealInput[]
    createMany?: NutritionCreateManyMealInputEnvelope
    connect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
  }

  export type FavoriteUpdateManyWithoutMealNestedInput = {
    create?: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput> | FavoriteCreateWithoutMealInput[] | FavoriteUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutMealInput | FavoriteCreateOrConnectWithoutMealInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutMealInput | FavoriteUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: FavoriteCreateManyMealInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutMealInput | FavoriteUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutMealInput | FavoriteUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IngredientsUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput> | IngredientsCreateWithoutMealInput[] | IngredientsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutMealInput | IngredientsCreateOrConnectWithoutMealInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutMealInput | IngredientsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientsCreateManyMealInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutMealInput | IngredientsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutMealInput | IngredientsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type InstructionsUpdateManyWithoutMealNestedInput = {
    create?: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput> | InstructionsCreateWithoutMealInput[] | InstructionsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutMealInput | InstructionsCreateOrConnectWithoutMealInput[]
    upsert?: InstructionsUpsertWithWhereUniqueWithoutMealInput | InstructionsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: InstructionsCreateManyMealInputEnvelope
    set?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    disconnect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    delete?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    update?: InstructionsUpdateWithWhereUniqueWithoutMealInput | InstructionsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: InstructionsUpdateManyWithWhereWithoutMealInput | InstructionsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
  }

  export type Meal_TagsUpdateManyWithoutMealNestedInput = {
    create?: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput> | Meal_TagsCreateWithoutMealInput[] | Meal_TagsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutMealInput | Meal_TagsCreateOrConnectWithoutMealInput[]
    upsert?: Meal_TagsUpsertWithWhereUniqueWithoutMealInput | Meal_TagsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: Meal_TagsCreateManyMealInputEnvelope
    set?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    disconnect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    delete?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    update?: Meal_TagsUpdateWithWhereUniqueWithoutMealInput | Meal_TagsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: Meal_TagsUpdateManyWithWhereWithoutMealInput | Meal_TagsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
  }

  export type NutritionUpdateManyWithoutMealNestedInput = {
    create?: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput> | NutritionCreateWithoutMealInput[] | NutritionUncheckedCreateWithoutMealInput[]
    connectOrCreate?: NutritionCreateOrConnectWithoutMealInput | NutritionCreateOrConnectWithoutMealInput[]
    upsert?: NutritionUpsertWithWhereUniqueWithoutMealInput | NutritionUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: NutritionCreateManyMealInputEnvelope
    set?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    disconnect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    delete?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    connect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    update?: NutritionUpdateWithWhereUniqueWithoutMealInput | NutritionUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: NutritionUpdateManyWithWhereWithoutMealInput | NutritionUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: NutritionScalarWhereInput | NutritionScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput> | FavoriteCreateWithoutMealInput[] | FavoriteUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutMealInput | FavoriteCreateOrConnectWithoutMealInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutMealInput | FavoriteUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: FavoriteCreateManyMealInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutMealInput | FavoriteUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutMealInput | FavoriteUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IngredientsUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput> | IngredientsCreateWithoutMealInput[] | IngredientsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutMealInput | IngredientsCreateOrConnectWithoutMealInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutMealInput | IngredientsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientsCreateManyMealInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutMealInput | IngredientsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutMealInput | IngredientsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type InstructionsUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput> | InstructionsCreateWithoutMealInput[] | InstructionsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutMealInput | InstructionsCreateOrConnectWithoutMealInput[]
    upsert?: InstructionsUpsertWithWhereUniqueWithoutMealInput | InstructionsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: InstructionsCreateManyMealInputEnvelope
    set?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    disconnect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    delete?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    update?: InstructionsUpdateWithWhereUniqueWithoutMealInput | InstructionsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: InstructionsUpdateManyWithWhereWithoutMealInput | InstructionsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
  }

  export type Meal_TagsUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput> | Meal_TagsCreateWithoutMealInput[] | Meal_TagsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutMealInput | Meal_TagsCreateOrConnectWithoutMealInput[]
    upsert?: Meal_TagsUpsertWithWhereUniqueWithoutMealInput | Meal_TagsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: Meal_TagsCreateManyMealInputEnvelope
    set?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    disconnect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    delete?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    update?: Meal_TagsUpdateWithWhereUniqueWithoutMealInput | Meal_TagsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: Meal_TagsUpdateManyWithWhereWithoutMealInput | Meal_TagsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
  }

  export type NutritionUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput> | NutritionCreateWithoutMealInput[] | NutritionUncheckedCreateWithoutMealInput[]
    connectOrCreate?: NutritionCreateOrConnectWithoutMealInput | NutritionCreateOrConnectWithoutMealInput[]
    upsert?: NutritionUpsertWithWhereUniqueWithoutMealInput | NutritionUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: NutritionCreateManyMealInputEnvelope
    set?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    disconnect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    delete?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    connect?: NutritionWhereUniqueInput | NutritionWhereUniqueInput[]
    update?: NutritionUpdateWithWhereUniqueWithoutMealInput | NutritionUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: NutritionUpdateManyWithWhereWithoutMealInput | NutritionUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: NutritionScalarWhereInput | NutritionScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutMeal_TagsInput = {
    create?: XOR<MealCreateWithoutMeal_TagsInput, MealUncheckedCreateWithoutMeal_TagsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMeal_TagsInput
    connect?: MealWhereUniqueInput
  }

  export type TagsCreateNestedOneWithoutMeal_TagsInput = {
    create?: XOR<TagsCreateWithoutMeal_TagsInput, TagsUncheckedCreateWithoutMeal_TagsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutMeal_TagsInput
    connect?: TagsWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutMeal_TagsNestedInput = {
    create?: XOR<MealCreateWithoutMeal_TagsInput, MealUncheckedCreateWithoutMeal_TagsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMeal_TagsInput
    upsert?: MealUpsertWithoutMeal_TagsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutMeal_TagsInput, MealUpdateWithoutMeal_TagsInput>, MealUncheckedUpdateWithoutMeal_TagsInput>
  }

  export type TagsUpdateOneRequiredWithoutMeal_TagsNestedInput = {
    create?: XOR<TagsCreateWithoutMeal_TagsInput, TagsUncheckedCreateWithoutMeal_TagsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutMeal_TagsInput
    upsert?: TagsUpsertWithoutMeal_TagsInput
    connect?: TagsWhereUniqueInput
    update?: XOR<XOR<TagsUpdateToOneWithWhereWithoutMeal_TagsInput, TagsUpdateWithoutMeal_TagsInput>, TagsUncheckedUpdateWithoutMeal_TagsInput>
  }

  export type MealCreateNestedOneWithoutNutritionInput = {
    create?: XOR<MealCreateWithoutNutritionInput, MealUncheckedCreateWithoutNutritionInput>
    connectOrCreate?: MealCreateOrConnectWithoutNutritionInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutNutritionNestedInput = {
    create?: XOR<MealCreateWithoutNutritionInput, MealUncheckedCreateWithoutNutritionInput>
    connectOrCreate?: MealCreateOrConnectWithoutNutritionInput
    upsert?: MealUpsertWithoutNutritionInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutNutritionInput, MealUpdateWithoutNutritionInput>, MealUncheckedUpdateWithoutNutritionInput>
  }

  export type Meal_TagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput> | Meal_TagsCreateWithoutTagsInput[] | Meal_TagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutTagsInput | Meal_TagsCreateOrConnectWithoutTagsInput[]
    createMany?: Meal_TagsCreateManyTagsInputEnvelope
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
  }

  export type Meal_TagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput> | Meal_TagsCreateWithoutTagsInput[] | Meal_TagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutTagsInput | Meal_TagsCreateOrConnectWithoutTagsInput[]
    createMany?: Meal_TagsCreateManyTagsInputEnvelope
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
  }

  export type Meal_TagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput> | Meal_TagsCreateWithoutTagsInput[] | Meal_TagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutTagsInput | Meal_TagsCreateOrConnectWithoutTagsInput[]
    upsert?: Meal_TagsUpsertWithWhereUniqueWithoutTagsInput | Meal_TagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: Meal_TagsCreateManyTagsInputEnvelope
    set?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    disconnect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    delete?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    update?: Meal_TagsUpdateWithWhereUniqueWithoutTagsInput | Meal_TagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: Meal_TagsUpdateManyWithWhereWithoutTagsInput | Meal_TagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
  }

  export type Meal_TagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput> | Meal_TagsCreateWithoutTagsInput[] | Meal_TagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: Meal_TagsCreateOrConnectWithoutTagsInput | Meal_TagsCreateOrConnectWithoutTagsInput[]
    upsert?: Meal_TagsUpsertWithWhereUniqueWithoutTagsInput | Meal_TagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: Meal_TagsCreateManyTagsInputEnvelope
    set?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    disconnect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    delete?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    connect?: Meal_TagsWhereUniqueInput | Meal_TagsWhereUniqueInput[]
    update?: Meal_TagsUpdateWithWhereUniqueWithoutTagsInput | Meal_TagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: Meal_TagsUpdateManyWithWhereWithoutTagsInput | Meal_TagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MealCreateWithoutFavoriteInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Ingredients?: IngredientsCreateNestedManyWithoutMealInput
    Instructions?: InstructionsCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutMealInput
    Nutrition?: NutritionCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutFavoriteInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutMealInput
    Instructions?: InstructionsUncheckedCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutMealInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutFavoriteInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutFavoriteInput, MealUncheckedCreateWithoutFavoriteInput>
  }

  export type UserCreateWithoutFavoriteInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFavoriteInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
  }

  export type MealUpsertWithoutFavoriteInput = {
    update: XOR<MealUpdateWithoutFavoriteInput, MealUncheckedUpdateWithoutFavoriteInput>
    create: XOR<MealCreateWithoutFavoriteInput, MealUncheckedCreateWithoutFavoriteInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutFavoriteInput, MealUncheckedUpdateWithoutFavoriteInput>
  }

  export type MealUpdateWithoutFavoriteInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Ingredients?: IngredientsUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Ingredients?: IngredientsUncheckedUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUncheckedUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutMealNestedInput
  }

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateWithoutFavoriteInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateWithoutIngredientsInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteCreateNestedManyWithoutMealInput
    Instructions?: InstructionsCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutMealInput
    Nutrition?: NutritionCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMealInput
    Instructions?: InstructionsUncheckedCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutMealInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutIngredientsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
  }

  export type MealUpsertWithoutIngredientsInput = {
    update: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type MealUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUncheckedUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUncheckedUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateWithoutInstructionsInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutMealInput
    Nutrition?: NutritionCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutInstructionsInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutMealInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutInstructionsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutInstructionsInput, MealUncheckedCreateWithoutInstructionsInput>
  }

  export type MealUpsertWithoutInstructionsInput = {
    update: XOR<MealUpdateWithoutInstructionsInput, MealUncheckedUpdateWithoutInstructionsInput>
    create: XOR<MealCreateWithoutInstructionsInput, MealUncheckedCreateWithoutInstructionsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutInstructionsInput, MealUncheckedUpdateWithoutInstructionsInput>
  }

  export type MealUpdateWithoutInstructionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUncheckedUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutMealNestedInput
  }

  export type FavoriteCreateWithoutMealInput = {
    User: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutMealInput = {
    id?: number
    user_id: number
  }

  export type FavoriteCreateOrConnectWithoutMealInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput>
  }

  export type FavoriteCreateManyMealInputEnvelope = {
    data: FavoriteCreateManyMealInput | FavoriteCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type IngredientsCreateWithoutMealInput = {
    name: string
  }

  export type IngredientsUncheckedCreateWithoutMealInput = {
    id?: number
    name: string
  }

  export type IngredientsCreateOrConnectWithoutMealInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput>
  }

  export type IngredientsCreateManyMealInputEnvelope = {
    data: IngredientsCreateManyMealInput | IngredientsCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type InstructionsCreateWithoutMealInput = {
    step_number: number
    description: string
  }

  export type InstructionsUncheckedCreateWithoutMealInput = {
    id?: number
    step_number: number
    description: string
  }

  export type InstructionsCreateOrConnectWithoutMealInput = {
    where: InstructionsWhereUniqueInput
    create: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput>
  }

  export type InstructionsCreateManyMealInputEnvelope = {
    data: InstructionsCreateManyMealInput | InstructionsCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type Meal_TagsCreateWithoutMealInput = {
    Tags: TagsCreateNestedOneWithoutMeal_TagsInput
  }

  export type Meal_TagsUncheckedCreateWithoutMealInput = {
    tag_id: number
  }

  export type Meal_TagsCreateOrConnectWithoutMealInput = {
    where: Meal_TagsWhereUniqueInput
    create: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput>
  }

  export type Meal_TagsCreateManyMealInputEnvelope = {
    data: Meal_TagsCreateManyMealInput | Meal_TagsCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type NutritionCreateWithoutMealInput = {
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type NutritionUncheckedCreateWithoutMealInput = {
    id?: number
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type NutritionCreateOrConnectWithoutMealInput = {
    where: NutritionWhereUniqueInput
    create: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput>
  }

  export type NutritionCreateManyMealInputEnvelope = {
    data: NutritionCreateManyMealInput | NutritionCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteUpsertWithWhereUniqueWithoutMealInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutMealInput, FavoriteUncheckedUpdateWithoutMealInput>
    create: XOR<FavoriteCreateWithoutMealInput, FavoriteUncheckedCreateWithoutMealInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutMealInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutMealInput, FavoriteUncheckedUpdateWithoutMealInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutMealInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutMealInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    user_id?: IntFilter<"Favorite"> | number
    meal_id?: IntFilter<"Favorite"> | number
  }

  export type IngredientsUpsertWithWhereUniqueWithoutMealInput = {
    where: IngredientsWhereUniqueInput
    update: XOR<IngredientsUpdateWithoutMealInput, IngredientsUncheckedUpdateWithoutMealInput>
    create: XOR<IngredientsCreateWithoutMealInput, IngredientsUncheckedCreateWithoutMealInput>
  }

  export type IngredientsUpdateWithWhereUniqueWithoutMealInput = {
    where: IngredientsWhereUniqueInput
    data: XOR<IngredientsUpdateWithoutMealInput, IngredientsUncheckedUpdateWithoutMealInput>
  }

  export type IngredientsUpdateManyWithWhereWithoutMealInput = {
    where: IngredientsScalarWhereInput
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyWithoutMealInput>
  }

  export type IngredientsScalarWhereInput = {
    AND?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    OR?: IngredientsScalarWhereInput[]
    NOT?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    meal_id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
  }

  export type InstructionsUpsertWithWhereUniqueWithoutMealInput = {
    where: InstructionsWhereUniqueInput
    update: XOR<InstructionsUpdateWithoutMealInput, InstructionsUncheckedUpdateWithoutMealInput>
    create: XOR<InstructionsCreateWithoutMealInput, InstructionsUncheckedCreateWithoutMealInput>
  }

  export type InstructionsUpdateWithWhereUniqueWithoutMealInput = {
    where: InstructionsWhereUniqueInput
    data: XOR<InstructionsUpdateWithoutMealInput, InstructionsUncheckedUpdateWithoutMealInput>
  }

  export type InstructionsUpdateManyWithWhereWithoutMealInput = {
    where: InstructionsScalarWhereInput
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyWithoutMealInput>
  }

  export type InstructionsScalarWhereInput = {
    AND?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
    OR?: InstructionsScalarWhereInput[]
    NOT?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
    id?: IntFilter<"Instructions"> | number
    meal_id?: IntFilter<"Instructions"> | number
    step_number?: IntFilter<"Instructions"> | number
    description?: StringFilter<"Instructions"> | string
  }

  export type Meal_TagsUpsertWithWhereUniqueWithoutMealInput = {
    where: Meal_TagsWhereUniqueInput
    update: XOR<Meal_TagsUpdateWithoutMealInput, Meal_TagsUncheckedUpdateWithoutMealInput>
    create: XOR<Meal_TagsCreateWithoutMealInput, Meal_TagsUncheckedCreateWithoutMealInput>
  }

  export type Meal_TagsUpdateWithWhereUniqueWithoutMealInput = {
    where: Meal_TagsWhereUniqueInput
    data: XOR<Meal_TagsUpdateWithoutMealInput, Meal_TagsUncheckedUpdateWithoutMealInput>
  }

  export type Meal_TagsUpdateManyWithWhereWithoutMealInput = {
    where: Meal_TagsScalarWhereInput
    data: XOR<Meal_TagsUpdateManyMutationInput, Meal_TagsUncheckedUpdateManyWithoutMealInput>
  }

  export type Meal_TagsScalarWhereInput = {
    AND?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
    OR?: Meal_TagsScalarWhereInput[]
    NOT?: Meal_TagsScalarWhereInput | Meal_TagsScalarWhereInput[]
    meal_id?: IntFilter<"Meal_Tags"> | number
    tag_id?: IntFilter<"Meal_Tags"> | number
  }

  export type NutritionUpsertWithWhereUniqueWithoutMealInput = {
    where: NutritionWhereUniqueInput
    update: XOR<NutritionUpdateWithoutMealInput, NutritionUncheckedUpdateWithoutMealInput>
    create: XOR<NutritionCreateWithoutMealInput, NutritionUncheckedCreateWithoutMealInput>
  }

  export type NutritionUpdateWithWhereUniqueWithoutMealInput = {
    where: NutritionWhereUniqueInput
    data: XOR<NutritionUpdateWithoutMealInput, NutritionUncheckedUpdateWithoutMealInput>
  }

  export type NutritionUpdateManyWithWhereWithoutMealInput = {
    where: NutritionScalarWhereInput
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyWithoutMealInput>
  }

  export type NutritionScalarWhereInput = {
    AND?: NutritionScalarWhereInput | NutritionScalarWhereInput[]
    OR?: NutritionScalarWhereInput[]
    NOT?: NutritionScalarWhereInput | NutritionScalarWhereInput[]
    id?: IntFilter<"Nutrition"> | number
    meal_id?: IntFilter<"Nutrition"> | number
    calories?: IntFilter<"Nutrition"> | number
    protein?: IntFilter<"Nutrition"> | number
    carbs?: IntFilter<"Nutrition"> | number
    fat?: IntFilter<"Nutrition"> | number
  }

  export type MealCreateWithoutMeal_TagsInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsCreateNestedManyWithoutMealInput
    Instructions?: InstructionsCreateNestedManyWithoutMealInput
    Nutrition?: NutritionCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutMeal_TagsInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutMealInput
    Instructions?: InstructionsUncheckedCreateNestedManyWithoutMealInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutMeal_TagsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutMeal_TagsInput, MealUncheckedCreateWithoutMeal_TagsInput>
  }

  export type TagsCreateWithoutMeal_TagsInput = {
    name: string
  }

  export type TagsUncheckedCreateWithoutMeal_TagsInput = {
    id?: number
    name: string
  }

  export type TagsCreateOrConnectWithoutMeal_TagsInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutMeal_TagsInput, TagsUncheckedCreateWithoutMeal_TagsInput>
  }

  export type MealUpsertWithoutMeal_TagsInput = {
    update: XOR<MealUpdateWithoutMeal_TagsInput, MealUncheckedUpdateWithoutMeal_TagsInput>
    create: XOR<MealCreateWithoutMeal_TagsInput, MealUncheckedCreateWithoutMeal_TagsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutMeal_TagsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutMeal_TagsInput, MealUncheckedUpdateWithoutMeal_TagsInput>
  }

  export type MealUpdateWithoutMeal_TagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutMeal_TagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUncheckedUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUncheckedUpdateManyWithoutMealNestedInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutMealNestedInput
  }

  export type TagsUpsertWithoutMeal_TagsInput = {
    update: XOR<TagsUpdateWithoutMeal_TagsInput, TagsUncheckedUpdateWithoutMeal_TagsInput>
    create: XOR<TagsCreateWithoutMeal_TagsInput, TagsUncheckedCreateWithoutMeal_TagsInput>
    where?: TagsWhereInput
  }

  export type TagsUpdateToOneWithWhereWithoutMeal_TagsInput = {
    where?: TagsWhereInput
    data: XOR<TagsUpdateWithoutMeal_TagsInput, TagsUncheckedUpdateWithoutMeal_TagsInput>
  }

  export type TagsUpdateWithoutMeal_TagsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutMeal_TagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MealCreateWithoutNutritionInput = {
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsCreateNestedManyWithoutMealInput
    Instructions?: InstructionsCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutNutritionInput = {
    id?: number
    name: string
    category: string
    cuisine: string
    diet_type: string
    prep_time: number
    cook_time: number
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMealInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutMealInput
    Instructions?: InstructionsUncheckedCreateNestedManyWithoutMealInput
    Meal_Tags?: Meal_TagsUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutNutritionInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutNutritionInput, MealUncheckedCreateWithoutNutritionInput>
  }

  export type MealUpsertWithoutNutritionInput = {
    update: XOR<MealUpdateWithoutNutritionInput, MealUncheckedUpdateWithoutNutritionInput>
    create: XOR<MealCreateWithoutNutritionInput, MealUncheckedCreateWithoutNutritionInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutNutritionInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutNutritionInput, MealUncheckedUpdateWithoutNutritionInput>
  }

  export type MealUpdateWithoutNutritionInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutNutritionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    diet_type?: StringFieldUpdateOperationsInput | string
    prep_time?: IntFieldUpdateOperationsInput | number
    cook_time?: IntFieldUpdateOperationsInput | number
    Favorite?: FavoriteUncheckedUpdateManyWithoutMealNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutMealNestedInput
    Instructions?: InstructionsUncheckedUpdateManyWithoutMealNestedInput
    Meal_Tags?: Meal_TagsUncheckedUpdateManyWithoutMealNestedInput
  }

  export type Meal_TagsCreateWithoutTagsInput = {
    Meal: MealCreateNestedOneWithoutMeal_TagsInput
  }

  export type Meal_TagsUncheckedCreateWithoutTagsInput = {
    meal_id: number
  }

  export type Meal_TagsCreateOrConnectWithoutTagsInput = {
    where: Meal_TagsWhereUniqueInput
    create: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput>
  }

  export type Meal_TagsCreateManyTagsInputEnvelope = {
    data: Meal_TagsCreateManyTagsInput | Meal_TagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type Meal_TagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: Meal_TagsWhereUniqueInput
    update: XOR<Meal_TagsUpdateWithoutTagsInput, Meal_TagsUncheckedUpdateWithoutTagsInput>
    create: XOR<Meal_TagsCreateWithoutTagsInput, Meal_TagsUncheckedCreateWithoutTagsInput>
  }

  export type Meal_TagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: Meal_TagsWhereUniqueInput
    data: XOR<Meal_TagsUpdateWithoutTagsInput, Meal_TagsUncheckedUpdateWithoutTagsInput>
  }

  export type Meal_TagsUpdateManyWithWhereWithoutTagsInput = {
    where: Meal_TagsScalarWhereInput
    data: XOR<Meal_TagsUpdateManyMutationInput, Meal_TagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type FavoriteCreateWithoutUserInput = {
    Meal: MealCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    meal_id: number
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteCreateManyMealInput = {
    id?: number
    user_id: number
  }

  export type IngredientsCreateManyMealInput = {
    id?: number
    name: string
  }

  export type InstructionsCreateManyMealInput = {
    id?: number
    step_number: number
    description: string
  }

  export type Meal_TagsCreateManyMealInput = {
    tag_id: number
  }

  export type NutritionCreateManyMealInput = {
    id?: number
    calories: number
    protein: number
    carbs: number
    fat: number
  }

  export type FavoriteUpdateWithoutMealInput = {
    User?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsUpdateWithoutMealInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUpdateWithoutMealInput = {
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Meal_TagsUpdateWithoutMealInput = {
    Tags?: TagsUpdateOneRequiredWithoutMeal_TagsNestedInput
  }

  export type Meal_TagsUncheckedUpdateWithoutMealInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type Meal_TagsUncheckedUpdateManyWithoutMealInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionUpdateWithoutMealInput = {
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
  }

  export type Meal_TagsCreateManyTagsInput = {
    meal_id: number
  }

  export type Meal_TagsUpdateWithoutTagsInput = {
    Meal?: MealUpdateOneRequiredWithoutMeal_TagsNestedInput
  }

  export type Meal_TagsUncheckedUpdateWithoutTagsInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
  }

  export type Meal_TagsUncheckedUpdateManyWithoutTagsInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateManyUserInput = {
    id?: number
    meal_id: number
  }

  export type FavoriteUpdateWithoutUserInput = {
    Meal?: MealUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}