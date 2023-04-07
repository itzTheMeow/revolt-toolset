import * as browser from "mediasoup-client";
import * as node from "msc-node";

/** Returns `true` to use the msc-node package. */
export function shouldUseNode() {
  return typeof navigator !== "object";
}
/** Returns the correct MSC client based on `shouldUseNode()`. */
export function getMSC() {
  return shouldUseNode() ? node : browser;
}

/* Utility types for compatibility between both clients. */

export type MSCConsumer = browser.types.Consumer | node.types.Consumer;
export type MSCDTLSParameters = browser.types.DtlsParameters | node.types.DtlsParameters;
export type MSCIceCandidate = browser.types.IceCandidate | node.types.IceCandidate;
export type MSCIceParameters = browser.types.IceParameters | node.types.IceParameters;
export type MSCMediaKind = browser.types.MediaKind | node.types.MediaKind;
export type MSCRTPCapabilities = browser.types.RtpCapabilities | node.types.RtpCapabilities;
export type MSCRTPParameters = browser.types.RtpParameters | node.types.RtpParameters;
export type MSCSCTPParameters = browser.types.SctpParameters | node.types.SctpParameters;
