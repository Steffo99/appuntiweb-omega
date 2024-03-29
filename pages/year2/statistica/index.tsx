import {Heading, Chapter, Panel, Idiomatic as I, Box, ListUnordered} from "@steffo/bluelib-react"
import { NextPageContext } from "next"
import { Link } from "../../../components/link"
import { Warn1024 } from "../../../components/warn"


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


export default function Statistica() {
    return <>
        <Heading level={2}>
            Statistica ed elementi di probabilità
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Come Fisica, <I>Statistica ed elementi di probabilità</I> è stato un altro esame in cui il modello &quot;a carte mnemoniche&quot; mi ha aiutato un sacco a ricordare i concetti per l&apos;orale.
                </p>
                <p>
                    Spero che questi contenuti possano essere altrettanto utili a voi!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appuntiweb
                        </Heading>
                        <Warn1024/>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <Link href="/year2/statistica/teoria">
                                    Appunti di teoria
                                </Link>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}
