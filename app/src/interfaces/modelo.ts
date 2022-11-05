import { Comparavel } from "./comparavel";
import { ImprimiLog } from "./imprimi-log";

export interface Modelo<T> extends Comparavel<T>, ImprimiLog {

}