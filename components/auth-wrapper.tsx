"use client"
import { Authenticator } from "@aws-amplify/ui-react";
import { ReactNode } from "react";

export default function AuthWrapper({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Authenticator>
            {children}
        </Authenticator>
    )
}